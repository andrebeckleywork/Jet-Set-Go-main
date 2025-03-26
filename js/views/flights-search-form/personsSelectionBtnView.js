class PersonsSelectionBtnView {
  // DOM elements
  _personsBtn = document.getElementById("flight-persons-dropdown-btn");

  // The generate markup method will get 2 parameters which will allow the function to update the text content of the button dynamically based on the user's selections
  _generateMarkup(adults, children) {
    this._clearMarkup();
    const markup = `
    <i class="fa-solid fa-user-group"></i>
              <span>${adults}</span>
              Adult${adults > 1 ? "s" : ""},
              <span>${children}</span>
              Child${children > 1 ? "ren" : ""}
    <i class="fa-solid fa-chevron-down"></i>
    `;

    this._personsBtn.insertAdjacentHTML("afterbegin", markup);
  }

  // Clear markup method
  _clearMarkup() {
    this._personsBtn.innerHTML = "";
  }
}

export default new PersonsSelectionBtnView();
