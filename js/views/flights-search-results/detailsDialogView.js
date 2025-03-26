// Import flightResultsView to extract the query parameter for the cabin class
import flightResultsView from "../flightResultsView";

class DetailsDialogView {
  // DOM Elements
  _detailsDialog = document.querySelector(".details-dialog");
  _resultsList = document.querySelector(".results-list");
  _closeDialogBtn = document.querySelector(".close-dialog-btn");
  _parentEl = document.querySelector(".details-content-wrapper");

  _errorMessage =
    "Something went wrong while fetching flight details. Please try again";

  // Create the handler display dialog method for each of the view details buttons
  _addHandlerDisplayDialog(handler) {
    // Use event delegation to check for the closest parent element with the class of the details button
    this._resultsList.addEventListener("click", (e) => {
      if (e.target.closest(".view-details-btn")) {
        const detailsBtn = e.target;

        // Extract the data token from each parent div of the details button
        const flightItem = detailsBtn.closest(".flight-item");
        const token = flightItem.dataset.token;

        // Use the Publisher/Subscriber pattern to assign the token to the handler function which will be called in the flightResultsController.js with the token as the value for the API request in the model.js
        handler(token);
      }
    });
  }

  // Create the handler hide dialog method which will be passed as a function in the flightResultsController.js
  _addHandlerHideDialog(handler) {
    this._closeDialogBtn.addEventListener("click", () => {
      handler();
    });
  }

  // Display dialog method
  _displayDialog() {
    this._detailsDialog.showModal();
    document.body.classList.add("no-scroll");
  }

  // Hide dialog method
  _hideDialog() {
    this._detailsDialog.close();
    document.body.classList.remove("no-scroll");
  }

  // Clear markup method
  _clearMarkup() {
    this._parentEl.innerHTML = "";
  }

  // Render spinner method
  _renderSpinner() {
    const markup = `
          <div
            class="loader-container d-flex flex-column align-items-center justify-content-center mt-4"
          >
            <div class="loader"></div>
            <p class="mt-2">Fetching flight details...</p>
          </div>
    `;
    // Make sure to clear the markup inside the parent element before displaying the spinner
    this._clearMarkup();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  _renderError(message = this._errorMessage) {
    const markup = `
            <div class="text-center fs-4">${message}</div>
    `;
    this._clearMarkup();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  // Render markup data (where all the magic happens)
  _renderMarkup(data) {
    this._clearMarkup();

    // Create the date/time formatter
    const dateFormatter = new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
    });

    // Create the variables that will handle the markup
    // Flight
    let flightSummary;
    let flightDetails;

    // Layover
    let layoverMarkup;
    let layover;
    let departureTimeLayover;
    let arrivalTimeLayover;

    // Included Features
    let includedFeatures;

    flightSummary = data.flightDetails.segments
      .map((segment) => {
        // Extract the arrival time and departure time to make the calculations for the layover
        // Use e separate loop to avoing the conflict between omitting the first item in the legs array and rendering the markup
        layover = segment.legs
          // The value of the individual array item (leg) is not needed in this array method, so I replace it with an underscore (_)
          .map((_, index, arr) => {
            // This if statement makes sure the first leg is omitted
            // The layover is calculated by subtracting the first's leg arrival value of the next leg's departure value
            if (index > 0) {
              departureTimeLayover = arr[index - 1].arrivalTime;
              arrivalTimeLayover = arr[index].departureTime;
            }
            // Use the calculateLayover method to display the layover hours in a proper format. Check the method in this class for more details
            return this._calculateLayover(
              departureTimeLayover,
              arrivalTimeLayover
            );
            // As we are omitting the first item in the array, when the 'map()' method returns the newly created array, that first item will be 'undefined'
            // We use the 'slice()' method to remove the 'undefined' item
          })
          .slice(1);

        flightDetails = segment.legs
          .map((leg, index, arr) => {
            // Extract the time and hours from each leg into separate variables for a more readable code
            const departureTime = leg.departureTime.split("T")[0];
            const arrivalTime = leg.arrivalTime.split("T")[0];
            const departureHours = leg.departureTime.split("T")[1];
            const arrivalHours = leg.arrivalTime.split("T")[1];

            // Create global variables for the airline name and the airline logo URL
            let airlineName;
            let airlineIcon;

            // Create a global variable for the cabin class
            let cabinClass;

            // Extract the query parameter, format the scring and assign the value to the 'cabinClass' variable;
            const cabinClassQueryParameter =
              flightResultsView._getQueryParameters().flightClass;

            cabinClass = cabinClassQueryParameter.includes("_")
              ? cabinClassQueryParameter.split("_").join(" ")
              : cabinClassQueryParameter;

            // Extract the iata code and the airlines from the flight offers search results to extract the airline name and the airline logo URL
            const iataCode = leg.flightInfo.carrierInfo.operatingCarrier;
            const airlines = data.flightsSearchResults.aggregation.airlines;

            // Loop through the airlines array and assign values for the global variables
            for (const airline of airlines) {
              if (airline.iataCode === iataCode) {
                airlineName = airline.name;
                airlineIcon = airline.logoUrl;
              }
            }

            // Dynamically create the markup of the layover based on the length of the legs array
            // As the length of the layover array is equal to the length of flight details array - 1, I am rendering the layover using the index value of the flight details array for a proper rendering
            layoverMarkup = `
              <div class="dialog-layover py-5 fs-5 fw-bold">Layover - ${layover[index]}</div>
              `;

            return `
          <div class="flight-details">
            <div class="departure-details">
              <h3 class="fs-5 mb-0">${leg.departureAirport.code} • ${
              leg.departureAirport.name
            }</h3>
              <p>${dateFormatter.format(
                new Date(departureTime)
              )} • ${this._extractHoursAndMinutes(departureHours)}</p>
            </div>
            <div class="arrival-details">
              <h3 class="fs-5 mb-0">${leg.arrivalAirport.code} • ${
              leg.arrivalAirport.name
            }</h3>
              <p class="mb-0">${dateFormatter.format(
                new Date(arrivalTime)
              )} • ${this._extractHoursAndMinutes(arrivalHours)}</p>
            </div>
            <div class="airline-details d-flex mt-3">
              <div class="airline-icon">
                <img
                  src="${
                    airlineIcon ||
                    "https://r-xx.bstatic.com/data/airlines_logo/AA.png"
                  }"
                  alt="${airlineIcon} Icon"
                  class="w-100 h-100"
                />
              </div>
              <div>
                <p class="airline-name mb-0">${airlineName || "Wizz Air"}</p>
                <p class="flight-duration mb-0">Flight-duration: ${this._calculateFlightHours(
                  leg.totalTime
                )}</p>
                <p class="flight-class mb-0">${cabinClass}</p>
              </div>
            </div>
          </div>

          
          ${
            // The layover markup is dynamically displayed, as there can be no layover after the last leg of each segment
            arr.length === 1 || index === arr.length - 1
              ? (layoverMarkup = "")
              : layoverMarkup
          }
        `;
          })
          .join("");

        return `
          <section class="flight-summary-dialog mb-5">
            <h2 class="fw-bold fs-3 mb-1">Flight to ${
              segment.arrivalAirport.cityName
            }</h2>
            <p class="fs-6">${
              segment.legs.length - 1 === 0
                ? "Direct"
                : segment.legs.length - 1 + " stops"
            } • ${this._calculateFlightHours(segment.totalTime)}</p>
            ${flightDetails}
          </section>
      `;
      })
      .join("");

    includedFeatures = data.flightDetails.features
      .map((feature) => {
        return `
        <li
          class="list-group-item d-flex justify-content-between align-items-start"
        >
          <div class="me-auto">
            <div class="fw-bold">
              ${this._capitalizeString(
                feature.featureName.split("_").join(" ").toLowerCase()
              )}
            </div>
            <p class="mb-0">${feature.label}</p>
          </div>
          <span class="badge rounded-pill">${
            feature.availability.includes("_")
              ? feature.availability.split("_").join(" ")
              : feature.availability
          }</span>
        </li>
      `;
      })
      .join("");

    // Include all the markup created above and insert it in the parent element
    const markup = `
        ${flightSummary}

        <!-- Included Features -->
        <section class="included-features d-flex flex-wrap">
          <header>
            <h2 class="fw-bold fs-3 mb-1">Included Features</h2>
            <p class="fs-6 mb-0">The total features included in the price</p>
          </header>
          <main>
            <ol class="included-features-offers list-group list-group-numbered">
              ${includedFeatures}
            </ol>
          </main>
        </section>

        <!-- Price and Select Button -->
        <section class="price-container d-flex justify-content-between mt-5">
          <div class="dialog-price fs-1 fw-bold">£${data.flightDetails.price}</div>
          <button
            class="dialog-select-btn px-4 fs-5 fw-bold rounded-3 focus-ring text-white"
          >
            Select
          </button>
        </section>
      `;

    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  //   This method will return flight duration displayed as hours and minutes
  _calculateFlightHours(seconds) {
    let flightHoursString = "";

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    flightHoursString = `${hours.toFixed(0)}h ${
      minutes === 0 ? "" : minutes.toFixed(0) + "m"
    }`;

    return flightHoursString;
  }

  // This method extract the hours a minutes for the departure and arrival times from each segments
  _extractHoursAndMinutes(timeString) {
    const [hours, minutes] = timeString.split(":");
    return `${hours}:${minutes}`;
  }

  _calculateLayover(arrival, departure) {
    const arrivalDate = new Date(arrival);
    const departureDate = new Date(departure);

    // Calculate the difference in milliseconds
    const milliseconds = departureDate - arrivalDate;

    // Calculate the difference in minutes
    const diffInMinutes = Math.floor(milliseconds / 60000);

    // Calulcate the number of hours
    const hours = Math.floor(diffInMinutes / 60);
    // Calculate the number of minutes
    const minutes = diffInMinutes % 60;

    // Display the number of hours and minutes in a proper format
    return `${hours === 0 ? "" : hours + "h"} ${
      minutes === 0 ? "" : minutes + "m"
    }`;
  }

  // This method takes a string and capitalize the first letter
  _capitalizeString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

export default new DetailsDialogView();
