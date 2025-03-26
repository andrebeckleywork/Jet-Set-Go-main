// Imports
import departureLocationSearchView from "./departureLocationSearchView";
import arrivalLocationSearchView from "./arrivalLocationSearchView";
import datePickerView from "./datePickerView";
import searchResultsBtnView from "./searchResultsBtnView";

class ClearInputBtn {
  // DOM Elements
  _inputWrappers = document.querySelectorAll(".input-wrapper");

  // This method will remove the input values of the container which it belongs to
  _clearInput() {
    // Loop through each input wrapper
    this._inputWrappers.forEach((wrapper) => {
      wrapper.addEventListener("click", (e) => {
        // Use event delegation to target the clear button
        if (e.target.closest(".clear-input-btn")) {
          // Store the clear button in a variable
          const clearBtn = e.target.closest(".clear-input-btn");

          // Use the querySelector() method to extract the specific input and store it into a variable
          const inputEl = wrapper.querySelector("input");

          // Check for each input id and remove the value
          switch (inputEl.id) {
            case "departure-location":
              departureLocationSearchView._departureLocationId = "";
              break;
            case "arrival-location":
              arrivalLocationSearchView._arrivalLocationId = "";
              break;
            case "departure-date":
              datePickerView._queryValues.departureDate = "";
              break;
            case "return-date":
              datePickerView._queryValues.returnDate = "";
              // As the return date is optional and doesn't need to be validated, I had to remove it manually from the queryStringValues in case the user selected a return date
              searchResultsBtnView._queryStringValues.returnDate = "";
              break;
          }

          // Remove the attribute so that the validator will work properly again if the user comes back to make input changes
          searchResultsBtnView._searchBtn.removeAttribute("href");

          // Hide the clear button
          clearBtn.classList.add("d-none");

          // Enable the input
          inputEl.removeAttribute("disabled");
          inputEl.value = "";
          // Focus the input
          inputEl.focus();
        }
      });
    });
  }
}

export default new ClearInputBtn();
