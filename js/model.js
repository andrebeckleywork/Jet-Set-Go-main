// Import the 'options' object which contains the method and the API key
import { OPTIONS } from "./config.js";

// The 'state object will store all the relevant data to be displayed for the user'
export const state = {
  locationResults: {
    departureLocationResults: [],
    arrivalLocationResults: [],
  },
  flightsSearchResults: {
    aggregation: {},
    baggagePolicies: [],
    flightDeals: [],
    flightOffers: [],
    cabinClass: "",
  },
  flightDetails: {
    features: [],
    segments: [],
    price: 0,
    tripType: "",
    token: "",
  },
};

// Fetch the data of the departure and arrival locations
export const loadDestinationsSearchResults = async function (query, transit) {
  const url = `https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination?query=${query}`;
  try {
    const response = await fetch(url, OPTIONS);

    if (!response.ok) {
      throw new Error("Something went wrong. Please try again!");
    }

    const data = await response.json();
    if (data.data.length === 0) {
      throw new Error("No results found for your query. Please try again!");
    }

    // Dynamically display the search list based on the transit (departure locations/arrival locations)
    if (transit === "departure") {
      state.locationResults.departureLocationResults = data.data;
    }
    if (transit === "arrival") {
      state.locationResults.arrivalLocationResults = data.data;
    }
  } catch (error) {
    throw error;
  }
};

// Fetch the flights data based on the user's search form
// This function will take one argument which is the object returned by the getQueryParameters() method from flightResultsView
export const loadFlightsSearchResults = async function (
  queryParams,
  sort = "BEST"
) {
  // As the return date is optional, check if the value is empty
  let returnDate = !queryParams.returnDate
    ? ""
    : `&returnDate=${queryParams.returnDate}`;

  // Create the let variable to store the children search param based on the value stored in the object returned by getQueryParameters() method
  let children;

  // Check each possible outcome for the number of children selected by the user and assign the value to the children variable
  if (queryParams.children.length === 1) {
    children = `&children=${queryParams.children[0]}`;
  }
  if (queryParams.children.length > 1) {
    children = `&children=${queryParams.children.join("%2C")}`;
  }
  if (!queryParams.children) {
    children = "";
  }

  // Dynamically create the URL for the fetch request
  const url = `https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights?fromId=${queryParams.departureLocationId}&toId=${queryParams.arrivalLocationId}&departDate=${queryParams.departureDate}${returnDate}&pageNo=${queryParams.pageNumber}&adults=${queryParams.adults}${children}&sort=${sort}&cabinClass=${queryParams.flightClass}&currency_code=GBP`;

  try {
    const response = await fetch(url, OPTIONS);

    if (!response.ok) {
      throw new Error("Something went wrong. Please try again!");
    }

    const data = await response.json();

    // Assign the response to the 'state' object
    state.flightsSearchResults.aggregation = data.data.aggregation;
    state.flightsSearchResults.baggagePolicies = data.data.baggagePolicies;
    state.flightsSearchResults.flightDeals = data.data.flightDeals;
    state.flightsSearchResults.flightOffers = data.data.flightOffers;
    state.flightsSearchResults.cabinClass = data.data.searchCriteria.cabinClass;
  } catch (error) {
    throw error;
  }
};

// Fetch the flight details
export const loadFlightDetails = async function (token) {
  const url = `https://booking-com15.p.rapidapi.com/api/v1/flights/getFlightDetails?token=${token}&currency_code=GBP`;

  try {
    const response = await fetch(url, OPTIONS);

    if (!response.ok) {
      throw new Error("Something went wrong. Please try again!");
    }

    const data = await response.json();

    // Assign the response to the 'state' object
    state.flightDetails.features = data.data.brandedFareInfo.features;
    state.flightDetails.segments = data.data.segments;
    state.flightDetails.price = data.data.priceBreakdown.total.units;
    state.flightDetails.tripType = data.data.tripType;
    state.flightDetails.token = data.data.token;
  } catch (error) {
    throw error;
  }
};
