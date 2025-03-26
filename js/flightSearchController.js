// Model import
import * as model from "./model.js";

// Views imports
import navbarView from "./views/navbarView.js";
import sideNavbarView from "./views/sideNavbarView.js";
import headerContentView from "./views/headerContentView.js";
import searchFormView from "./views/searchFormView.js";
import personsSelectionView from "./views/flights-search-form/personsSelectionView.js";
import personsSelectionBtnView from "./views/flights-search-form/personsSelectionBtnView.js";
import flightClassSelectionView from "./views/flights-search-form/flightClassSelectionView.js";
import flightClassSelectionBtnView from "./views/flights-search-form/flightClassSelectionBtnView.js";
import departureLocationSearchView from "./views/flights-search-form/departureLocationSearchView.js";
import arrivalLocationSearchView from "./views/flights-search-form/arrivalLocationSearchView.js";
import reverseInputValuesView from "./views/flights-search-form/reverseInputValuesView.js";
import datePickerView from "./views/flights-search-form/datePickerView.js";
import searchResultsBtnView from "./views/flights-search-form/searchResultsBtnView.js";
import clearInputBtnView from "./views/flights-search-form/clearInputBtnView.js";

// Include polyfilling for ES6 code and asynchronous code
import "core-js/stable";
import "regenerator-runtime/runtime.js";

const controlSelectPersons = function () {
  // Generate persons selection markup
  personsSelectionView._generateAdultsMarkup();
  personsSelectionView._generateChildrenMarkup();

  // Set dynamic styling for children age selectors parent element
  personsSelectionView._hideChildrenSelectAgeParentEl();

  // Add the functionality for selecting the number of persons
  personsSelectionView._adultsCounter();
  personsSelectionView._childrenCounter();

  // Dynamically update the content of the persons dropdown button
  personsSelectionBtnView._generateMarkup(
    personsSelectionView._adults,
    personsSelectionView._children
  );

  // Add the functionality for selection done
  searchFormView._hideSelectionDropdown();
};

const controlSelectFlightClass = function () {
  // Select flight class
  flightClassSelectionView._selectFlightClass();

  // Dynamically update the select flight class button text content
  flightClassSelectionBtnView._generateMarkup(
    flightClassSelectionView._selectedBtn
  );
};

const controlDepartureSearchLocations = async function () {
  try {
    // Render spinner
    departureLocationSearchView._renderSpinner();

    // Get search query
    const query = departureLocationSearchView._getQuery();
    if (!query) return;

    // Load search results
    await model.loadDestinationsSearchResults(
      query,
      departureLocationSearchView._transit
    );

    // Render results
    departureLocationSearchView._renderMarkup(
      model.state.locationResults.departureLocationResults,
      departureLocationSearchView._transit
    );
  } catch (error) {
    departureLocationSearchView._renderError(error.message);
  }
};

const controlArrivalSearchLocations = async function () {
  try {
    // Render spinner
    arrivalLocationSearchView._renderSpinner();

    // Get search query
    const query = arrivalLocationSearchView._getQuery();
    if (!query) return;

    // Load search results
    await model.loadDestinationsSearchResults(
      query,
      arrivalLocationSearchView._transit
    );

    // Render results
    arrivalLocationSearchView._renderMarkup(
      model.state.locationResults.arrivalLocationResults,
      arrivalLocationSearchView._transit
    );
  } catch (error) {
    arrivalLocationSearchView._renderError(error.message);
  }
};

const controlDepartureSearchLoseFocus = function () {
  // Hide the results container
  departureLocationSearchView._hideContainerResults();

  // Clear the markup
  departureLocationSearchView._clearMarkup();
};

const controlArrivalSearchLoseFocus = function () {
  // Hide the results container
  arrivalLocationSearchView._hideContainerResults();

  // Clear the markup
  arrivalLocationSearchView._clearMarkup();
};

const controlReverseInputValues = function () {
  // Extract the input values and store them into variables
  const departureLocationValue =
    departureLocationSearchView._searchLocationInput.value;
  const arrivalLocationValue =
    arrivalLocationSearchView._searchLocationInput.value;

  // Assign the new values for the inputs
  departureLocationSearchView._searchLocationInput.value = arrivalLocationValue;
  arrivalLocationSearchView._searchLocationInput.value = departureLocationValue;

  // Extract the query values and store them into variables
  const departureLocationId = departureLocationSearchView._departureLocationId;
  const arrivalLocationId = arrivalLocationSearchView._arrivalLocationId;

  // Assign the new values for the query parameters
  departureLocationSearchView._departureLocationId = arrivalLocationId;
  arrivalLocationSearchView._arrivalLocationId = departureLocationId;
};

const controlReturnSearchQueries = function () {
  searchResultsBtnView._assignQueryParameterValues();
};

// The init function establishes the functionality for each user interaction as the page loads
const init = function () {
  personsSelectionView._addHandlerRender(controlSelectPersons);
  flightClassSelectionView._addHandlerRender(controlSelectFlightClass);
  departureLocationSearchView._addHandlerSearch(
    controlDepartureSearchLocations
  );
  departureLocationSearchView._addHandlerLoseFocus(
    controlDepartureSearchLoseFocus
  );

  arrivalLocationSearchView._addHandlerSearch(controlArrivalSearchLocations);
  arrivalLocationSearchView._addHandlerLoseFocus(controlArrivalSearchLoseFocus);

  departureLocationSearchView._assignInputValue();
  arrivalLocationSearchView._assignInputValue();

  reverseInputValuesView._addHandlerReverseValues(controlReverseInputValues);
  datePickerView._setDatePicker();

  searchResultsBtnView._addHandlerCreateQueries(controlReturnSearchQueries);

  clearInputBtnView._clearInput();

  // Dynamic styling
  navbarView._setDynamicStyling();
  sideNavbarView._setDynamicStyling();
  sideNavbarView._toggleSideNavbar();
  searchFormView._setDropdownDynamicStyling();
  searchFormView._showSelectionDropdown();
  headerContentView._setDynamicStyling();
  departureLocationSearchView._setDynamicStyling();
};

init();
