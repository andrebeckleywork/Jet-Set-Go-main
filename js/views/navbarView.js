class NavbarView {
  // DOM elements
  _sideNavbar = document.querySelector(".sidebar-navigation");
  _navbar = document.getElementById("nav");

  // Set the background styling for the navbar when the scrollY property is 1px or bigger or depending on the styling of the side navigation bar
  _setDynamicStyling() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        this._navbar.classList.add("navigation-highlight");
      }
      if (
        window.scrollY === 0 &&
        !this._sideNavbar.classList.contains("sidebar-navigation-visible")
      ) {
        this._navbar.classList.remove("navigation-highlight");
      }
      if (
        window.scrollY === 0 &&
        this._sideNavbar.classList.contains("sidebar-navigation-visible")
      )
        return;
    });
  }
}

export default new NavbarView();
