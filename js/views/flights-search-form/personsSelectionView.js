// Import the button view so the text content of it can be dynamically updated based on user's selection
import personsSelectionBtnView from "./personsSelectionBtnView";

class PersonsSelectionView {
  // DOM elements
  _parentEl = document.querySelector(".persons-selection");
  _adultsParentEl = document.querySelector(".adults");
  _childrenParentEl = document.querySelector(".children");
  _childrenAgeParentEl = document.querySelector(".selection-children-age");
  _childrenSelectAgeEl =
    this._childrenAgeParentEl.getElementsByTagName("select");

  // Global variables
  _adults = 1;
  _children = 0;
  _childrenSelectAgeMarkup = [];

  // Create the handler render method and assign the handler parameter which will be passed as a function in flightSearchController.js
  _addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  // The clear markup method takes a parameter which will be the container of the markup to be cleared
  _clearMarkup(container) {
    container.innerHTML = "";
  }

  // Generate the adults markup and establish the behaviour of the increase and decrease buttons based on the user's selection
  // The total number of persons (adults + children) is never bigger than 9
  _generateAdultsMarkup() {
    this._clearMarkup(this._adultsParentEl);
    const markup = `
            <div class="selection-content d-flex flex-column">
                <h3 class="fs-5 fw-semibold">Adults</h3>
                <p class="m-0">Age 18+</p>
            </div>
            <div class="selection-number d-flex align-items-center">
                <button
                type="button"
                class="selection-decrease-btn border-0 rounded-3 focus-ring"
                title="Decrease Adults Number"
                ${this._adults === 1 ? "disabled" : ""}
                >
                <i class="fa-solid fa-minus"></i>
                </button>
                <span class="selection-count-adults">${this._adults}</span>
                <button
                type="button"
                class="selection-increase-btn border-0 rounded-3 focus-ring"
                title="Increase Adults Number"
                ${this._adults + this._children === 9 ? "disabled" : ""}
                >
                <i class="fa-solid fa-plus"></i>
                </button>
            </div>
    `;
    this._adultsParentEl.insertAdjacentHTML("afterbegin", markup);
  }

  // Generate the children markup and establish the behaviour of the increase and decrease buttons based on the user's selection
  // The total number of persons (adults + children) is never bigger than 9
  _generateChildrenMarkup() {
    this._clearMarkup(this._childrenParentEl);
    const markup = `
            <div class="selection-content">
                <h3 class="fs-5 fw-semibold">Children</h3>
                <p class="m-0">Age 0 - 17</p>
            </div>
            <div class="selection-number d-flex align-items-center">
                <button
                type="button"
                class="selection-decrease-btn border-0 rounded-3 focus-ring"
                title="Decrease Children Number"
                ${this._children === 0 ? "disabled" : ""}
                >
                <i class="fa-solid fa-minus"></i>
                </button>
                <span class="selection-count-children">${this._children}</span>
                <button
                type="button"
                class="selection-increase-btn border-0 rounded-3 focus-ring"
                title="Increase Children Number"
                ${this._adults + this._children === 9 ? "disabled" : ""}
                >
                <i class="fa-solid fa-plus"></i>
                </button>
            </div>
    `;

    this._childrenParentEl.insertAdjacentHTML("afterbegin", markup);
  }

  // Generate the select elements markup for each child age as the user increases the number of children
  _generateSelectChildAgeMarkup(counter) {
    // Use the childrenCount method to dynamically set the name and the label text content by adding the ordinal suffixes
    const selectMarkup = `
                 <label class="fs-5 fw-semibold" for="child-age-${counter}"
                        >${counter}${this._childrenCount(
      counter
    )} child's age</label
              >
              <select
                name="${counter}${this._childrenCount(counter)}-child-age"
                id="child-age-${counter}"
                class="px-3 py-2 rounded-3 focus-ring mb-3"
              >
                <option value="">Select age at time of flying</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
              </select>
          `;

    this._childrenSelectAgeMarkup.push(selectMarkup);
  }

  // Display the select elements
  _displaySelectChildAgeEl() {
    this._clearMarkup(this._childrenAgeParentEl);
    const markup = this._childrenSelectAgeMarkup
      .map((el) => {
        return el;
      })
      .join("");

    this._childrenAgeParentEl.insertAdjacentHTML("afterbegin", markup);
  }

  // Apply all the above methods in the correct order as the user clicks the increase or decrease button for the adults
  // Use event delegation to establish which button the user clicked (increase or decrease)
  _adultsCounter() {
    this._adultsParentEl.addEventListener("click", (e) => {
      if (e.target.closest(".selection-increase-btn")) {
        this._adults++;
        // Generate the markup for the persons selection button
        personsSelectionBtnView._generateMarkup(this._adults, this._children);
        this._generateAdultsMarkup();
        this._generateChildrenMarkup();
      }
      if (e.target.closest(".selection-decrease-btn")) {
        this._adults--;
        // Generate the markup for the persons selection button
        personsSelectionBtnView._generateMarkup(this._adults, this._children);
        this._generateAdultsMarkup();
        this._generateChildrenMarkup();
      }
    });
  }

  // Apply all the above methods in the correct order as the user clicks the increase or decrease button for the children
  // Use event delegation to establish which button the user clicked (increase or decrease)
  _childrenCounter() {
    this._childrenParentEl.addEventListener("click", (e) => {
      if (e.target.closest(".selection-increase-btn")) {
        this._children++;
        // Generate the markup for the persons selection button
        personsSelectionBtnView._generateMarkup(this._adults, this._children);
        this._generateSelectChildAgeMarkup(this._children);
        this._showChildrenSelectAgeParentEl();
        this._displaySelectChildAgeEl();
        this._generateChildrenMarkup();
        this._generateAdultsMarkup();
      }
      if (e.target.closest(".selection-decrease-btn")) {
        this._children--;
        // Generate the markup for the persons selection button
        personsSelectionBtnView._generateMarkup(this._adults, this._children);
        this._removeChildAgeEl(this._childrenSelectAgeMarkup);
        this._displaySelectChildAgeEl();
        this._generateChildrenMarkup();
        this._generateAdultsMarkup();
      }
    });
  }

  // Hide the container of the child age select element
  _hideChildrenSelectAgeParentEl() {
    this._childrenAgeParentEl.style.display = "none";
  }
  // Display the container of the child age select element
  _showChildrenSelectAgeParentEl() {
    this._childrenAgeParentEl.style.display = "flex";
  }

  // This method removes the last child age select element from the array
  _removeChildAgeEl(array) {
    array.pop();

    // Hide the container if the array is empty
    if (array.length === 0) {
      this._hideChildrenSelectAgeParentEl();
    }

    return array;
  }

  // Set the ordinal suffixes as the children count increases or decreases
  _childrenCount(count) {
    switch (true) {
      case count === 1:
        return "st";
      case count === 2:
        return "nd";
      case count === 3:
        return "rd";
      default:
        return "th";
    }
  }
}

export default new PersonsSelectionView();
