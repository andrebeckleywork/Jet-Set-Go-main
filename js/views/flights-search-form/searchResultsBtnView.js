// Import views
import personsSelectionBtnView from "./personsSelectionBtnView";
import personsSelectionView from "./personsSelectionView";
import flightClassSelectionView from "./flightClassSelectionView";
import departureLocationSearchView from "./departureLocationSearchView";
import arrivalLocationSearchView from "./arrivalLocationSearchView";
import datePickerView from "./datePickerView";

// Import tippy.js library
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

class SearchResultsBtnView {
  _searchBtn = document.querySelector(".search-button");

  // Each value of this object will serve as a query parameter
  _queryStringValues = {
    persons: {
      adults: 0,
      children: [],
    },
    flightClass: "",
    departureLocationId: "",
    arrivalLocationId: "",
    departureDate: "",
    returnDate: "",
  };

  // Pass the handler function from the controller to the click event listener
  _addHandlerCreateQueries(handler) {
    this._searchBtn.addEventListener("click", handler);
  }

  _assignQueryParameterValues() {
    // tippy options object
    // The code for the tippy options was taken from https://atomiks.github.io/tippyjs/
    const tippyOptions = {
      placement: "top",
      arrow: true,
      theme: "warning",
      animation: "fade-custom",
      content: "",
      trigger: "manual",
    };

    // Assign the number of adults to the queryStringValues object
    this._queryStringValues.persons.adults = personsSelectionView._adults;

    // Children age validator
    // Check if the number of children is bigger than 0
    if (personsSelectionView._childrenSelectAgeEl.length > 0) {
      for (const el of personsSelectionView._childrenSelectAgeEl) {
        if (!el.value) {
          // Create the form validation using tippy for UX
          const content = "Select all children age!";
          const instanceEl = personsSelectionBtnView._personsBtn;
          this._formValidator(content, instanceEl, tippyOptions);
          return;
        } else {
          // Assign the value of each child's age to the queryStringValues object (converted into a number type)
          this._queryStringValues.persons.children.push(+el.value);
        }
      }
    }

    // Ass the default value is Economy, the flight class selection won't need a form validation
    this._queryStringValues.flightClass =
      flightClassSelectionView._flightClassQuery;

    // Departure location validator
    if (!departureLocationSearchView._departureLocationId) {
      const content = "Enter a departure location!";
      const instanceEl =
        departureLocationSearchView._searchLocationWrapper.querySelector(
          ".input-wrapper"
        );
      this._formValidator(content, instanceEl, tippyOptions);
      return;
    } else {
      // Assign the value of the departure location id to the queryStringValues object
      this._queryStringValues.departureLocationId =
        departureLocationSearchView._departureLocationId;
    }

    // Arrival location validator
    if (!arrivalLocationSearchView._arrivalLocationId) {
      const content = "Enter an arrival location!";
      const instanceEl =
        arrivalLocationSearchView._searchLocationWrapper.querySelector(
          ".input-wrapper"
        );
      this._formValidator(content, instanceEl, tippyOptions);
      return;
    } else {
      // Assign the value of the arrival location id to the queryStringValues object
      this._queryStringValues.arrivalLocationId =
        arrivalLocationSearchView._arrivalLocationId;
    }

    // Departure date validator
    if (!datePickerView._queryValues.departureDate) {
      const content = "Enter a departure date!";
      const instanceEl =
        datePickerView._departureDateWrapper.querySelector(".input-wrapper");
      this._formValidator(content, instanceEl, tippyOptions);
      return;
    } else {
      // Assign the value of the departure date to the queryStringValues object after formatting to the ISO
      this._queryStringValues.departureDate = this._formatDateToISO(
        datePickerView._queryValues.departureDate.formattedDate
          .split("/")
          .join("-")
      );
    }

    // As the return date is optional, it doesn't need to be validated
    if (datePickerView._queryValues.returnDate) {
      this._queryStringValues.returnDate = this._formatDateToISO(
        datePickerView._queryValues.returnDate.formattedDate
          .split("/")
          .join("-")
      );
    }

    // Set the href attribute dynamically while adding all the user's input data stored as query parameters
    this._searchBtn.setAttribute(
      "href",
      this._generateQueryParametersMarkup(this._queryStringValues)
    );
  }

  // A method to help with the form validation created in order to avoid repetitive code
  _formValidator(content, instanceEl, tippyOptions) {
    // Create the form validation using tippy for UX
    // The code for initializing a tippy instance and the tippy methods was taken from https://atomiks.github.io/tippyjs/
    tippyOptions.content = content;
    const tippyInstance = tippy(instanceEl, tippyOptions);
    tippyInstance.show();

    // Hide the tippy box after 3 seconds
    setTimeout(() => tippyInstance.hide(), 3000);
  }

  _generateQueryParametersMarkup(queryValues) {
    // As the children ages will be stored in an array, we have to take into consideration the size of the array
    let children;

    // Set the children query parameter values based on the length of the children array
    if (queryValues.persons.children.length === 1) {
      children = `&children=${queryValues.persons.children[0]}`;
    }
    if (queryValues.persons.children.length === 0) {
      children = "";
    }
    if (queryValues.persons.children.length > 1) {
      // '%2C' is the URL-encoded representation of a comma (,) character.
      children = `&children=${queryValues.persons.children.join("%2C")}`;
    }

    // Get rest of the query parameters values
    const adults = queryValues.persons.adults;
    const flightClass = queryValues.flightClass;
    const departureLocationId = queryValues.departureLocationId;
    const arrivalLocationId = queryValues.arrivalLocationId;
    const departureDate = queryValues.departureDate;
    const returnDate = queryValues.returnDate;

    // Dynamically generate the URL based on user's selections. The values will be extracted from the URL as the flights-results.html page loads
    const URL = `flights-results.html?adults=${adults}${children}&flightClass=${flightClass}&departureLocationId=${departureLocationId}&arrivalLocationId=${arrivalLocationId}&departureDate=${departureDate}&returnDate=${returnDate}`;

    return URL;
  }

  // This is a method created to format the departure and return dates to ISO
  _formatDateToISO(inputDate) {
    const date = new Date(inputDate);

    const year = date.getFullYear();
    // getMonth() is zero-indexed
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }
}

export default new SearchResultsBtnView();
