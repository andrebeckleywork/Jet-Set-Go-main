class FlightClassSelectionBtnView {
  // DOM elements
  _flightsClassBtn = document.getElementById("flight-class-dropdown-btn");

  // Dynamically generate the markup for the flight class selection while setting the default value to 'Economy'
  _generateMarkup(flightClass = "Economy") {
    this._clearMarkup();
    const markup = `
    <i class="fa-solid fa-plane-circle-check"></i>
              <span>${flightClass}</span>
    <i class="fa-solid fa-chevron-down"></i>
    `;

    this._flightsClassBtn.insertAdjacentHTML("afterbegin", markup);
  }

  // Clear markup method
  _clearMarkup() {
    this._flightsClassBtn.innerHTML = "";
  }
}

export default new FlightClassSelectionBtnView();
