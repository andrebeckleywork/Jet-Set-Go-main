// Import the button view so the text content of it can be dynamically updated based on user's selection
import flightClassSelectionBtnView from "./flightClassSelectionBtnView";

class FlightClassSelectionView {
  // DOM elements
  _flightClassBtns = document.querySelectorAll(".flight-class-btn");

  // Global variables
  _flightClassQuery = "ECONOMY";
  _selectedBtn;

  // Create the handler render method and assign the handler parameter which will be passed as a function in controller.js
  _addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  // This method handles the flight class selection from the user and dynamically adds the 'selected' class
  _selectFlightClass() {
    // Loop through the flight class buttons
    this._flightClassBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Make sure no button has the 'selected' class
        this._flightClassBtns.forEach((btn) => {
          btn.classList.remove("selected");
        });
        // Add the selected class to the clicked button
        btn.classList.add("selected");
        this._selectedBtn = btn;
        this._flightClassQuery = btn.dataset.flightClass;

        // Dynamically generate the button text content when the user clicks on a flight class
        flightClassSelectionBtnView._generateMarkup(
          this._selectedBtn.textContent
        );
      });
    });
  }
}

export default new FlightClassSelectionView();
