class SideNavbarView {
  // DOM elements
  _navbar = document.getElementById("nav");
  _sideNavbar = document.querySelector(".sidebar-navigation");
  _hamburgerBtn = document.getElementById("hamburger-btn");
  _overlay = document.querySelector(".overlay");

  // Set the top positioning of the side navigation bar based on the height of the navigation bar when the page loads or when the user changes the screen size
  _setDynamicStyling() {
    ["load", "resize"].forEach((e) => {
      window.addEventListener(e, () => {
        const navbarSize = this._navbar.getBoundingClientRect();
        this._sideNavbar.style.marginTop = `${navbarSize.height}px`;
      });
    });
  }

  _toggleSideNavbar() {
    // Add an event listener to the body element and hide the overlay if it is currently visible
    document.body.addEventListener("click", (e) => {
      if (e.target.classList.contains("overlay")) {
        this._sideNavbar.classList.remove("sidebar-navigation-visible");
        e.target.classList.remove("overlay-visible");
      }

      // Adjust the styling of the navigation bar taking into consideration the scrollY property and the visibility of the overlay
      if (e.target.classList.contains("overlay") && window.scrollY === 0) {
        this._navbar.classList.remove("navigation-highlight");
        this._sideNavbar.classList.remove("sidebar-navigation-visible");
        e.target.classList.remove("overlay-visible");
      }
    });

    // Set the behaviour of the navigation bar and overlay when clicking the hamburger button
    this._hamburgerBtn.addEventListener("click", () => {
      this._sideNavbar.classList.toggle("sidebar-navigation-visible");
      this._overlay.classList.toggle("overlay-visible");

      if (window.scrollY === 0) {
        if (this._navbar.classList.contains("navigation-highlight")) {
          this._navbar.classList.remove("navigation-highlight");
        } else {
          this._navbar.classList.add("navigation-highlight");
        }
      }
    });
  }
}

export default new SideNavbarView();
