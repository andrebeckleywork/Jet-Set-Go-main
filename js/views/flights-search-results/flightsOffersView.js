// Import this component so we can increase the page number value when using the Intersection Observer API
import flightResultsView from "../flightResultsView";

class FlightsOffersView {
  // DOM Elements
  _parentEl = document.querySelector(".flights-search-results");
  _sortBtns = document.querySelectorAll(".sort-btn");
  _intersectionObserverSpinner = document.querySelector(
    ".intersection-observer-loader"
  );

  // Global variables
  _errorMessage = "No flight offers matching your request. Please try again!";
  _sortValue = "BEST";

  // Create the handler select sort method which will sort the results based on the user's selection (best, cheapest, fastest)
  _addHandlerSelectSort(handler) {
    // Loop through each sort button
    this._sortBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this._sortBtns.forEach((btn) => {
          // Remove the 'active' class list from each button
          btn.classList.remove("active");
        });

        // Add the 'active' class list on the clicked button
        btn.classList.add("active");

        // Extract the sort value from the data attribute and assign it to the _sortValue variable
        const sortValue = btn.dataset.sort;
        this._sortValue = sortValue;

        // Hide the intersection observer spinner while loading the flights for the selected sort value
        this._intersectionObserverSpinner.classList.add("d-none");

        // Call the handler in the flightResultsController.js
        handler();
      });
    });
  }

  _addHandlerLoadFlightsOffers(handler) {
    window.addEventListener("load", () => {
      handler();
    });
  }

  // Create the loading spinner markup and render it before displaying the flight offers
  _renderSpinner() {
    const markup = `
        <div class="loader-container d-flex flex-column align-items-center justify-content-center mt-4">
              <div class="loader"></div>
              <p class="mt-2">Searching for flights offers...</p>
        </div>
    `;
    this._clearMarkup();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  // This method renders the error message if there is an error in fetching the results
  _renderError(message = this._errorMessage) {
    const markup = `
            <div class="text-center fs-4">${message}</div>
    `;
    this._clearMarkup();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  // Clear markup method
  _clearMarkup() {
    this._parentEl.innerHTML = "";
  }

  // Add a second parameter of type 'boolean' so we can separate the initial load of the Intersection Observer API loads
  _renderMarkup(data, isInitialLoad = true) {
    // Clear the markup on the inital load
    if (isInitialLoad) {
      this._clearMarkup();
    }

    // Loop through the flight offers
    const markup = data.flightsSearchResults.flightOffers
      .map((item) => {
        // Create the date formatter
        const dateFormatter = new Intl.DateTimeFormat("en-GB", {
          day: "2-digit",
          month: "short",
        });

        let cabinClass;

        // Extract the query parameter, format the scring and assign the value to the 'cabinClass' variable;
        const cabinClassQueryParameter =
          flightResultsView._getQueryParameters().flightClass;

        cabinClass = cabinClassQueryParameter.includes("_")
          ? cabinClassQueryParameter.split("_").join(" ")
          : cabinClassQueryParameter;

        // The flightDetails variable will handle the markup for the flight details
        let flightDetails;
        let operatingAirline;
        // Check if the legs operating carriers are the same and filter the value (extract the unique value for a proper display)
        const uniqueAirlines = item.segments[0].legs.filter(
          (leg, index, arr) => {
            return (
              index ===
              arr.findIndex(
                (i) =>
                  i.flightInfo.carrierInfo.operatingCarrier ===
                  leg.flightInfo.carrierInfo.operatingCarrier
              )
            );
          }
        );

        // Map through the unique airlines values and return the markup for the airline icon and airline name
        operatingAirline = uniqueAirlines
          .map((leg) => {
            // This variables will store the markup
            let airlineName;
            let airlineIcon;

            // Extract the iata code and the airlines array
            const iataCode = leg.flightInfo.carrierInfo.operatingCarrier;
            const airlines = data.flightsSearchResults.aggregation.airlines;

            // Loop through the airlines array
            for (const airline of airlines) {
              // Check for the equality between the leg's carrier iata code and each airline iata code for a dynamic display of the icon and the airline name
              if (airline.iataCode === iataCode) {
                airlineIcon = `
                  <img
                      src=${airline.logoUrl}
                      class="h-100"
                      alt="${airline.name} Icon"
                  />`;
                airlineName = `
                  <figcaption
                    class="airline-name align-self-center m-0 fs-6 fw-bold"
                  >
                    ${airline.name}
                  </figcaption>
                  `;
              }
            }

            return `
            <figure class="airline-icon d-flex mb-2">
                ${airlineIcon || ""}
                ${airlineName || ""}
            </figure>
            `;
          })
          .join("");

        // If the segments length === 1, then the flight type is one-way
        flightDetails = item.segments
          .map((segment) => {
            const departureTime = segment.departureTime.split("T")[1];
            const arrivalTime = segment.arrivalTime.split("T")[1];
            const departureDate = segment.departureTime.split("T")[0];
            const arrivalDate = segment.arrivalTime.split("T")[0];

            return `
                  <div
                    class="flight-details d-flex flex-column flex-md-row justify-content-between mb-3"
                  >
                    <div class="airline-content-wrapper mb-2">
                      <div class="airline-content d-flex align-items-center flex-wrap mb-1">
                          ${operatingAirline}
                      </div>
                      <p
                        class="flight-class m-0 fw-bold fs-6 px-4 rounded-3 text-white"
                      > ${cabinClass}
                      </p>
                    </div>
                    <div class="d-flex flex-column">
                      <div class="flight-hours d-flex justify-content-between">
                        <div class="flight-departure-hour fw-bold fs-3">
                          ${this._extractHoursAndMinutes(departureTime)}
                        </div>
                        <div
                          class="flight-line d-flex align-self-center align-items-center"
                        >
                          <div class="line"></div>
                          <div><i class="fa-solid fa-plane fs-3"></i></div>
                          <div class="line"></div>
                        </div>
                        <div class="flight-arrival-hour fw-bold fs-3">
                           ${this._extractHoursAndMinutes(arrivalTime)}
                        </div>
                      </div>
                      <div
                        class="flight-destinations d-flex justify-content-between"
                      >
                        <div class="flight-location-code fw-bold">
                          ${
                            segment.departureAirport.code
                          } • ${dateFormatter.format(new Date(departureDate))}
                        </div>
                        <div class="flight-duration fw-bold">
                          ${this._calculateFlightHours(segment.totalTime)} • ${
              segment.legs.length - 1 === 0
                ? "Direct"
                : segment.legs.length - 1 + " stops"
            }
                        </div>
                        <div class="flight-location-code fw-bold">
                        ${segment.arrivalAirport.code} • ${dateFormatter.format(
              new Date(arrivalDate)
            )}
                        </div>
                      </div>
                    </div>
                  </div>
              `;
          })
          .join("");

        // Flight item markup
        return `
      <div class="flight-item px-2 px-md-4 py-3 border rounded-3 mb-3" data-token=${item.token}>
              ${flightDetails}
              <div class="flight-price text-start text-md-end">
                <p class="m-0 fs-2 fw-bold">£${item.priceBreakdown.total.units}</p>
              </div>
              <div
                class="flight-item-btns d-flex flex-wrap justify-content-between"
              >
                <button
                  class="save-btn px-5 py-2 rounded-3 focus-ring text-white fw-bold"
                >
                  <i class="fa-solid fa-heart"></i> Save
                </button>
                <button
                  class="view-details-btn px-5 py-2 rounded-3 focus-ring text-white fw-bold"
                >
                  View Details
                </button>
              </div>
      </div>
      `;
      })
      .join("");

    // Insert the markup depending if the request belongs to the initial load or to the Intersection Observer API load
    if (isInitialLoad) {
      this._parentEl.insertAdjacentHTML("afterbegin", markup);
    }
    if (!isInitialLoad) {
      this._parentEl.insertAdjacentHTML("beforeend", markup);
    }

    // Display the intersection observer spinner after the results were added to the container
    this._intersectionObserverSpinner.classList.remove("d-none");
    this._intersectionObserverSpinner.classList.add("d-flex");

    // Render the markup which informs the user that there are no more flights to be loaded when scrolling
    if (data.flightsSearchResults.flightOffers.length === 0) {
      this._renderEndOfResults();
    }
  }

  // This method will return flight duration displayed as hours and minutes
  _calculateFlightHours(seconds) {
    let flightHoursString = "";

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    flightHoursString = `${hours.toFixed(0)}h ${
      minutes === 0 ? "" : minutes.toFixed(0) + "m"
    }`;

    return flightHoursString;
  }

  // This method will extract the number of hours and minutes from a given timestring passed as a parameter
  _extractHoursAndMinutes(timeString) {
    const [hours, minutes] = timeString.split(":");
    return `${hours}:${minutes}`;
  }

  // Intersection Observer API method
  _loadMoreFlightsResults(handler) {
    // Create the options for the Intersection Observer API
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    // Loop through the callback entries, increase the page number and assign the handler function which will be called in the flightResultsController.js
    // The page number is a parameter required by the booking API
    // Each time the number of the page is increased, the fetch function will be called again with the new value
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          flightResultsView._pageNumber += 1;
          // The handler function which was passed as a parameter will be responsible for triggering a new API request with the new value of the page number assigned to it
          handler();
        }
      });
    };

    // Initiate the Intersection Observer API
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    // Observe the intersection observer spinner
    observer.observe(this._intersectionObserverSpinner);
  }

  // This method will let the user know when there are no more results to fetch
  _renderEndOfResults() {
    // Hide the intersection observer spinner
    this._intersectionObserverSpinner.classList.add("d-none");

    const markup = `
        <div class="d-block text-center mt-1">
            <p class="mt-2 mb-0 fs-3 fw-bold">End of results</p>
        </div>
    `;
    this._parentEl.insertAdjacentHTML("beforeend", markup);
  }
}

export default new FlightsOffersView();
