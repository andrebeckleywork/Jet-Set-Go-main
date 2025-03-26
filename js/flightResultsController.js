// Import model
import * as model from "./model";

// Import views
import flightResultsView from "./views/flightResultsView";
import navbarView from "./views/navbarView";
import sideNavbarView from "./views/sideNavbarView";
import headerContentView from "./views/headerContentView";
import flightsOffersView from "./views/flights-search-results/flightsOffersView";
import detailsDialogView from "./views/flights-search-results/detailsDialogView";
import formSubmissionDialogView from "./views/flights-search-results/formSubmissionDialogView";

// Include polyfilling for ES6 code and asynchronous code
import "core-js/stable";
import "regenerator-runtime/runtime.js";

const controlOnLoadSearch = function () {
  model.loadFlightsSearchResults(flightResultsView._getQueryParameters());
};

const controlDisplayFlightsOffers = async function () {
  try {
    // Render Spinner
    flightsOffersView._renderSpinner();

    // Fetch the flights offers
    await model.loadFlightsSearchResults(
      flightResultsView._getQueryParameters(),
      flightsOffersView._sortValue
    );

    // Render markup
    flightsOffersView._renderMarkup(model.state);
  } catch (error) {
    flightsOffersView._renderError();
  }
};

const controlDisplayMoreFlightsOffers = async function () {
  try {
    // Fetch the flights offers
    await model.loadFlightsSearchResults(
      flightResultsView._getQueryParameters(),
      flightsOffersView._sortValue
    );

    // Render markup
    flightsOffersView._renderMarkup(model.state, false);
  } catch (error) {
    flightsOffersView._renderError();
  }
};

const controlDisplayDialog = async function (token) {
  try {
    // Display dialog
    detailsDialogView._displayDialog();

    // Render spinner
    detailsDialogView._renderSpinner();

    // Fetch flight details
    await model.loadFlightDetails(token);

    // Render markup
    detailsDialogView._renderMarkup(model.state);
  } catch (error) {
    detailsDialogView._renderError();
  }
};

const controlHideDialog = function () {
  detailsDialogView._hideDialog();
};

const controlDisplayFormSubmissionDialog = function () {
  formSubmissionDialogView._displayFormSubmissionDialog();
};

const controlHideFormSubmissionDialog = function () {
  formSubmissionDialogView._hideFormSubmissionDialog();
};

// The init function establishes the functionality for each user interaction as the page loads
const init = function () {
  flightResultsView._addHandlerRender(controlOnLoadSearch);
  flightsOffersView._addHandlerLoadFlightsOffers(controlDisplayFlightsOffers);
  flightsOffersView._addHandlerSelectSort(controlDisplayFlightsOffers);
  flightsOffersView._loadMoreFlightsResults(controlDisplayMoreFlightsOffers);

  formSubmissionDialogView._addHandlerDisplayFormSubmissionDialog(
    controlDisplayFormSubmissionDialog
  );
  formSubmissionDialogView._addHandlerHideFormSubmissionDialog(
    controlHideFormSubmissionDialog
  );

  detailsDialogView._addHandlerDisplayDialog(controlDisplayDialog);
  detailsDialogView._addHandlerHideDialog(controlHideDialog);

  // Dynamic styling
  navbarView._setDynamicStyling();
  sideNavbarView._setDynamicStyling();
  sideNavbarView._toggleSideNavbar();
  headerContentView._setDynamicStyling();
};

init();
