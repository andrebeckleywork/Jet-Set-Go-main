class HeaderContentView {
  // DOM elements
  _navbar = document.getElementById("nav");
  _header = document.querySelector(".header");

  // As the navigation bar has position:fixed which will get it out of the normal flow of the page, I had to dynamically set a padding top for the main content of the header element so the navigation bar will not overwrite it
  _setDynamicStyling() {
    ["load", "resize"].forEach((e) => {
      window.addEventListener(e, () => {
        const navbarSizes = this._navbar.getBoundingClientRect();

        this._header.style.paddingTop = `${navbarSizes.height}px`;
        this._header.style.paddingBottom = `${navbarSizes.height}px`;
      });
    });
  }
}

export default new HeaderContentView();
