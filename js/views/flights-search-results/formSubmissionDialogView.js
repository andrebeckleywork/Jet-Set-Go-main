class FormSubmissionDialogView {
  // DOM Elements
  _formSubmissionDialog = document.querySelector(".form-submission-dialog");
  _detailsDialog = document.querySelector(".details-dialog");
  _closeDialogBtn = document.querySelector(
    ".form-submission-dialog .close-dialog-btn"
  );

  // Create the handler display form submission dialog which will be handle the functionality in flightResultsController.js
  _addHandlerDisplayFormSubmissionDialog(handler) {
    document.body.addEventListener("click", (e) => {
      if (e.target.classList.contains("dialog-select-btn")) {
        handler();
      }
    });
  }

  // Create the handler hide form submission dialog which will be handle the functionality in flightResultsController.js
  _addHandlerHideFormSubmissionDialog(handler) {
    this._closeDialogBtn.addEventListener("click", () => {
      handler();
    });
  }

  // Display form submission dialog
  _displayFormSubmissionDialog() {
    this._formSubmissionDialog.showModal();
    // Make sure we close the details dialog
    this._detailsDialog.close();
  }

  // Hide the form submission dialog
  _hideFormSubmissionDialog() {
    this._formSubmissionDialog.close();
    // Remove the no-scroll property of the document so the window becomes scrollable again
    document.body.classList.remove("no-scroll");
  }
}

export default new FormSubmissionDialogView();
