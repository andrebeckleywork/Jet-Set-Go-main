// Import the parent class
import SearchLocationView from "./locationSearchView.js";

class ArrivalLocationSearchView extends SearchLocationView {
  // DOM elements
  _parentEl = document.querySelector(".arrival-location-results");
  _searchResultsList = document.querySelector(".arrival-location-results-list");
  _searchLocationWrapper = document.querySelector(".arrival-location-wrapper");
  _searchLocationInput = document.getElementById("arrival-location");

  // Global variables
  _arrivalLocationId = "";
  _transit = "arrival";
}

export default new ArrivalLocationSearchView();
