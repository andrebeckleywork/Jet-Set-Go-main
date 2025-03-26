// Import the parent class
import searchLocationView from "./locationSearchView.js";

class DepartureLocationSearchView extends searchLocationView {
  // DOM elements
  _parentEl = document.querySelector(".departure-location-results");
  _searchResultsList = document.querySelector(
    ".departure-location-results-list"
  );
  _searchLocationWrapper = document.querySelector(
    ".departure-location-wrapper"
  );
  _searchLocationInput = document.getElementById("departure-location");

  // Global variables
  _departureLocationId = "";
  _transit = "departure";

  // Set the top position dynamically so the dropdown results list is displayed properly on small screen sizes
  _setDynamicStyling() {
    ["load", "resize"].forEach((e) => {
      window.addEventListener(e, () => {
        const sizes = this._searchLocationWrapper.getBoundingClientRect();
        this._parentEl.style.top = `${sizes.height + 10}px`;
      });
    });
  }
}

export default new DepartureLocationSearchView();
