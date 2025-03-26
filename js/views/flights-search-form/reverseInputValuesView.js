class ReverseInputValuesBtn {
  // DOM elements
  _locationsReverseBtn = document.querySelector(".locations-reverse-button");

  // Create the handler reverse values method and assign the handler parameter which will be passed as a function in flightsSearchController.js
  _addHandlerReverseValues(handler) {
    this._locationsReverseBtn.addEventListener("click", () => {
      handler();
    });
  }
}

export default new ReverseInputValuesBtn();
