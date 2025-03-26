class SearchFormView {
  // DOM elements
  _dropdownInputsContainer = document.querySelector(
    ".dropdown-inputs-container"
  );
  _flightPersonsDropdownBtn = document.getElementById(
    "flight-persons-dropdown-btn"
  );
  _flightClassDropdownBtn = document.getElementById(
    "flight-class-dropdown-btn"
  );
  _personsSelectionDropdown = document.querySelector(".persons-selection");
  _flightClassDropdown = document.querySelector(".flight-class-selection");
  _selectionDoneBtns = document.querySelectorAll(".selection-done-btn");

  // Get the parent element of each dropdown (persons and flight class) and set the positioning for a smooth user experience across all screen sizes
  _setDropdownDynamicStyling() {
    ["load", "resize"].forEach((e) => {
      window.addEventListener(e, () => {
        // Get the sizes of the parent element
        const parentSizes =
          this._dropdownInputsContainer.getBoundingClientRect();
        // Get the sizes of each dropdown button
        const selectPersonsBtnSizes =
          this._flightPersonsDropdownBtn.getBoundingClientRect();
        const selectFlightClassBtnSizes =
          this._flightClassDropdownBtn.getBoundingClientRect();

        // Set the top position so both dropdowns appear correctly on all screen sizes
        this._personsSelectionDropdown.style.top = `${
          selectPersonsBtnSizes.height + 10
        }px`;
        this._flightClassDropdown.style.top = `${parentSizes.height + 10}px`;

        // As the flight class button has a different 'left' value on desktop and tablet screen size, set the left position dynamically for the flight class dropdown list
        this._flightClassDropdown.style.left = `${
          selectFlightClassBtnSizes.left - parentSizes.left
        }px`;
      });
    });
  }

  // Use the event delegation technique and alternate the display of the dropdown list for persons selection and flight class selection
  // If one dropdown is open, close it when opening the other
  _showSelectionDropdown() {
    this._dropdownInputsContainer.addEventListener("click", (e) => {
      const visibleDropdowns = document.querySelectorAll(".dropdown-visible");

      if (e.target.closest("#flight-persons-dropdown-btn")) {
        visibleDropdowns.forEach((e) => e.classList.remove("dropdown-visible"));
        this._personsSelectionDropdown.classList.add("dropdown-visible");
        this._personsSelectionDropdown.scrollIntoView(false);
      }
      if (e.target.closest("#flight-class-dropdown-btn")) {
        visibleDropdowns.forEach((e) => e.classList.remove("dropdown-visible"));
        this._flightClassDropdown.classList.add("dropdown-visible");
        this._flightClassDropdown.scrollIntoView(false);
      }
    });
  }

  // Hide the dropdown when the user clicks the 'Done' button
  _hideSelectionDropdown() {
    // Add a click event listener to the body event
    // Use event delegation to check for the possible outcomes of clicking outside the body that impact the removals of dropdown container visibility
    document.body.addEventListener("click", (e) => {
      if (
        e.target.closest(".selection-number") ||
        e.target.closest(".dropdown-visible") ||
        e.target.closest(".dropdown-btn")
      )
        return;
      const visibleDropdowns = document.querySelectorAll(".dropdown-visible");
      visibleDropdowns.forEach((e) => e.classList.remove("dropdown-visible"));
    });

    this._selectionDoneBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.target
          .closest(".dropdown-visible")
          .classList.remove("dropdown-visible");
      });
    });
  }
}

export default new SearchFormView();
