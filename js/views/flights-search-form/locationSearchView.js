// This class is the parent class for departureLocationSearchView.js and arrivalLocationSearchView.js
// All the methods from this class will be available to the children classes
export default class LocationSearchView {
  // Global variables
  _errorMessage = "No locations found for your query. Please try again!";

  // Create the handler search method and assign the handler parameter which will be passed as a function in controller.js
  _addHandlerSearch(handler) {
    // The input event makes sure the function is called as the user starts typing a location
    this._searchLocationInput.addEventListener("input", (e) => {
      e.preventDefault();

      // Display the search results container if the length of the input's value is bigger than 1
      if (this._searchLocationInput.value.length >= 1) {
        this._showContainerResults();
      } else {
        this._hideContainerResults();
      }

      // After checking the if statement, call the handler
      handler();
    });
  }

  // Create the handler lose focus method and assign the handler parameter which will be passed as a function in controller.js
  _addHandlerLoseFocus(handler) {
    this._searchLocationInput.addEventListener("blur", () => {
      handler();
    });
  }

  // This method displays the results container
  _showContainerResults() {
    this._parentEl.classList.add("visible");
  }

  // This method hides the results container
  _hideContainerResults() {
    this._parentEl.classList.remove("visible");
  }

  // Clear markup method
  _clearMarkup() {
    this._searchResultsList.innerHTML = "";
  }

  // This method gets the input query
  _getQuery() {
    const query = this._searchLocationInput.value.toLowerCase();

    return query;
  }

  // Create the loading spinner markup and render it before getting the results from the API
  _renderSpinner() {
    const markup = `
        <div class="loader-container d-flex justify-content-center">
            <div class="loader"></div>
        </div>
    `;
    this._clearMarkup();
    this._searchResultsList.insertAdjacentHTML("afterbegin", markup);
  }

  // This method renders the error message if there is an error in fetching the results
  _renderError(message = this._errorMessage) {
    this._clearMarkup();
    const markup = `
      <li class="text-center">
            <p class="mb-0">${message}</p>
      </li>
    `;
    this._searchResultsList.insertAdjacentHTML("afterbegin", markup);
  }

  //
  _renderMarkup(data, transit) {
    // Clear the markup(loader spinner) before rendering the results of the user's search
    this._clearMarkup();
    const markup = data
      .map((item, index) => {
        // Utility variables
        const currentItem = data[index];
        const previousItem = data[index - 1];

        // Check the item type (specific of the booking API) and render the markup for that type
        // Each item has other relevant properties which will be stored in data attributes and will later be assigned in an object as query parameter values
        // type = CITY
        if (currentItem.type === "CITY") {
          let cityIcon;

          if (!item.photoUri) {
            cityIcon = '<i class="fa-solid fa-city fs-2"></i>';
          }
          if (item.photoUri) {
            cityIcon = `
                <img
                  src=${item.photoUri}
                  alt="City Image"
                  class="w-100 h-100 rounded-3"
                />
            `;
          }

          return `
        <li class="result-list-item">
        <a
            href="#"
            class="${transit}-location-city d-flex align-items-center p-0 p-sm-3 text-decoration-none rounded-3"
            data-id="${item.id}"
            data-code="${item.code}"
            data-name="${item.name}"
            data-type="${item.type}"
            >
                  <div class="city-image">
                    ${cityIcon}
                  </div>
                  <div class="city-details">
                    <h3 class="fs-5 fw-bold">
                      ${item.name}${
            !item.regionName ? "" : ", " + item.regionName
          }, ${item.countryName}
                      <span class="fw-normal">(${item.code})</span>
                    </h3>
                    <p class="m-0">All airports</p>
                  </div>
        </a>
        </li>
        `;
        }

        // type = AIRPORT
        // Check if there are more airports in the same city and dynamically label the distance from each airport to the center of the city and add a small margin (ms-3) to distinguish this fact
        if (currentItem.type === "AIRPORT") {
          if (
            previousItem &&
            currentItem.regionName === previousItem.regionName
          ) {
            return `
            <li class="result-list-item ms-3">
                    <a
                      href="#"
                      class="d-flex align-items-center text-decoration-none py-3 px-0 px-sm-3 rounded-3"
                      data-id="${item.id}"
                      data-code="${item.code}"
                      data-name="${item.cityName}"
                      data-type="${item.type}"
                    >
                      <div class="result-icon fs-2">
                        <i class="fa-solid fa-plane-up"></i>
                      </div>
                      <div class="result-content">
                        <p class="fw-bold mb-1">${item.code} ${item.name}</p>
                        <p class="m-0">${item.distanceToCity.value.toFixed(2)}${
              item.distanceToCity.unit
            } from city centre</p>
                      </div>
                    </a>
           </li>
          `;
          }

          // If the previous item of AIRPORT type is from a different location, remove the margin and label the city name, the region name and the country name instead of the distance from the centre of the city
          if (
            (previousItem &&
              currentItem.regionName !== previousItem.regionName) ||
            data.length === 1
          ) {
            return `
            <li class="result-list-item">
                    <a
                      href="#"
                      class="d-flex align-items-center text-decoration-none py-3 px-0 px-sm-3 rounded-3"
                      data-id="${item.id}"
                      data-code="${item.code}"
                      data-name="${item.cityName}"
                      data-type="${item.type}"
                    >
                      <div class="result-icon fs-2">
                        <i class="fa-solid fa-plane-up"></i>
                      </div>
                      <div class="result-content">
                        <p class="fw-bold mb-1">${item.code} ${item.name}</p>
                        <p class="m-0">${item.cityName}${
              !item.regionName ? "" : ", " + item.regionName
            }, ${item.countryName}</p>
                      </div>
                    </a>
           </li>
          `;
          }
        }
      })
      .join("");

    // Insert the markup in the parent element to be displayed to the user after passing the if statement analysis
    this._searchResultsList.insertAdjacentHTML("afterbegin", markup);
  }

  // This method extracts the relevant data from the search option selected by the user and displays the value to the input
  _assignInputValue() {
    this._searchResultsList.addEventListener("mousedown", (e) => {
      const target = e.target.closest("a");
      const code = target.dataset.code;
      const name = target.dataset.name;
      const id = target.dataset.id;

      const assignedValue = `${name} ${code}`;
      this._searchLocationInput.value = assignedValue;

      // Assign the query parameter values based on the transit (departure or arrival) and the id
      this._updateQueryValues(this._transit, id);
      this._searchLocationInput.setAttribute("disabled", true);
      this._displayDeleteInputButton();
    });
  }

  // This method displays the delete input buttons
  _displayDeleteInputButton() {
    this._searchLocationInput.nextElementSibling.classList.remove("d-none");
  }

  // This method updates the query paramaters values (departureLocationId and arrivalLocationId are stored in their respective classes)
  _updateQueryValues(transit, idValue) {
    if (transit === "departure") {
      this._departureLocationId = idValue;
    }
    if (transit === "arrival") {
      this._arrivalLocationId = idValue;
    }
  }
}
