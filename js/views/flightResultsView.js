class FlightResultsView {
  // Global Variables
  _pageNumber = 1;

  // Create the handler render method and assign the handler parameter which will be passed as a function in flightResultsController.js
  _addHandlerRender(handler) {
    window.addEventListener("load", () => {
      handler();
    });
  }

  // This method will be responsible for returning an object which will contain all the query parameters necessary to perform the flights search
  // It will be passed as an argument for the loadFlightsSearchResults function from model.js
  // Each value of the object returned by this method will serve as a parameter for the URL where the API request will be made
  _getQueryParameters() {
    // Return the query string from the URL
    const link = window.location.search;
    // Extract the search params from the query string and store them into a constant variable
    const searchParams = new URLSearchParams(link);

    // As the value for the dynamically added children query parameter depends on the user's selections, I stored the value of the params in a separate variable
    const childrenSearchParam = searchParams.get("children");

    // Create e let variable which will be the value of the children property in the returned object
    let children;

    // As one of the requested params for the URL is represented by each child's age, I use 3 different if statements to check the children's ages
    if (!childrenSearchParam) {
      children = "";
    }
    if (childrenSearchParam && childrenSearchParam.includes(",")) {
      children = childrenSearchParam.split(",");
    }
    if (childrenSearchParam && !childrenSearchParam.includes(",")) {
      children = [childrenSearchParam];
    }

    // Return the object which contains the parameters for the API's URL
    return {
      adults: searchParams.get("adults"),
      children,
      flightClass: searchParams.get("flightClass"),
      departureLocationId: searchParams.get("departureLocationId"),
      arrivalLocationId: searchParams.get("arrivalLocationId"),
      departureDate: searchParams.get("departureDate"),
      returnDate: searchParams.get("returnDate"),
      pageNumber: this._pageNumber,
    };
  }
}

export default new FlightResultsView();
