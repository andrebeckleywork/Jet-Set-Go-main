# Jet-Set-Go

![search-page-mockup](https://github.com/user-attachments/assets/d06d3a2b-1253-4c8b-9b07-6bdd96346746)

![results-page-mockup](https://github.com/user-attachments/assets/24220174-0a1f-4045-ae23-49e2954ca9da)

This is a flights tickets booking website designed to facilitate seamless flight search and booking. The website uses the booking API to provide real-time flight data. Users can search for flights based on their  destination, dates, and preferences, and complete bookings through an easy-to-use submission form.

## [Live Website](https://jet-set-go-florin-miron.netlify.app/)
## Table of Contents
1. UX
    - [Project Goals](#project-goals)
    - [Business Goals](#business-goals)
    - [User Stories](#user-stories)
    - [Design Choices](#design-choices)
    - [Wireframes](#wireframes)
2. [Features](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/features.md)
    - [Navigation](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/features.md#navigation)
      - [Sidebar Navigation](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/features.md#sidebar-navigation)
    - [Footer](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/features.md#footer)
    - [Homepage](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/features.md#homepage)
      - [Hero](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/features.md#hero)
        - [Main Features Links](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/features.md#main-features-link-buttons)
        - [Persons Selection Button](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/features.md#persons-selection-button)
        - [Flight Class Selection Button](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/features.md#flight-class-selection-button)
        - [Departure/Arrival Location Inputs](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/features.md#departure-and-arrival-location-inputs)
        - [Departure/Return Date Input](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/features.md#departure-and-return-date-inputs)
        - [Clear Input Button](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/features.md#clear-input-button)
        - [Form Validation Tooltips](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/features.md#form-validation-tooltips)
        - [Search Button](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/features.md#search-button)
      - [Services](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/features.md#services)
      - [Best Destinations](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/features.md#best-destinations)
      - [The Best Seasonal Destination](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/features.md#the-best-seasonal-destination)
    - [Results Page](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/features.md#results-page)
      - [Sort Buttons](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/features.md#sort-buttons)
      - [Flights Results](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/features.md#flights-results)
      - [Flight Details Dialog](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/features.md#flight-details-dialog)
      - [Flight Booking Dialog](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/features.md#flight-booking-dialog)
    - [Booking Confirmation Page](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/features.md#booking-confirmation-page)
4. [Technologies Used](#technologies-used)
5. [Testing](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/testing.md)
    - [Validator Testing](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/testing.md#validator-testing)
    - [Performance, Accessibility and Best Practices](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/testing.md#performance-accessibility-and-best-practices-testing)
    - [Manual Testing](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/testing.md#manual-testing)
    - [Testing Client Stories From UX](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/testing.md#testing-client-stories-from-ux)
    - [Functional Testing](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/testing.md#functional-testing)
    - [Bugs](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/testing.md#bugs)
6. [Deployment](#deployment)
    - [Run This Project Locally](#run-the-project-locally)
7. [Credits](#credits)
    - [Content](#content)
    - [Media](#media)
    - [Code](#code)
    - [Inspirations](#inspirations)
## UX
The user experience (UX) of Jet-Set-Go website has been carefully designed to ensure simplicity, clarity, and ease of navigation.
### Project Goals
1. UX Design
   
   Ensure the website is responsive across all screen sizes and provide an aesthetically pleasing and modern design that aligns with travel industry standards.
2. Simplified User Flow

   Create for the user a straightforward navigation from landing page to completing a booking.
3. Flights Search and Booking
   
   The website will allow users to enter travel details (e.g. departure date, return date, destinations) and receive available flight options. The flight search feature will provide the user with all the relevant details.
4. Error Prevention and Handling
   
   Prevent errors during the booking process and ensure users are guided appropriately if errors occur.
5. Booking Confirmation
    
   After users complete their bookings they will be redirected to a confirmation page.
6. Sorting Options
    
   Users will be provided with different sort options. Sorting options will allow users to view results by the best, cheapest and fastest.
7. Accessibility Considerations

   Make the website accessible to all users, including those with disabilities.
8. SEO Optimisation and Performance

   Implement the best SEO practices ro tank well for relevant keywords inside the user's browser. Optimize website performance to ensure fast loading times.
### Business Goals
1. Provide a Seamless User Experience(UX)

   Create a website that is intuitive, easy to navigate and allows users to easily book flights.

2. Enhance Customer Satisfaction

   Offer competitive prices, easy booking processes, and prompt customer service to ensure high customer satisfaction and repeat business.
3. Increase Traffic Website

   Drive traffic to the website using the best SEO practices to increase the ranking in the users' search results.
4. Improve Booking Flexibility

   Allow users to easily cancel their bookings.

5. Optimize for Speed and Performance

   Ensure that your website is fast and responsive to improve user experience
### User Stories
1. As a customer, I want to search for available flights by entering my departure and arrival cities, travel dates, and number of passengers so that I can find flights that meet my needs.
2. As a customer, I want to be able to sort flight search results by best, cheapest, and fastest, so that I can easily find the option that best fits my travel needs based on price, duration, or overall quality.
3. As a customer, I want to select a flight from the search results, view flight details, and proceed to booking so that I can finalize my flight purchase.
4. As a customer, I want to see recommended flight destinations so that I can discover new places to visit and book flights easily.
5. As a customer, I want to be able to load more flight search results, so that I can view additional options beyond the initial set without having to perform a new search.
### Design Choices
1. **Typography**
   - The font families used for this project are 'Poppins' as the primary font and 'Roboto' as the secondary font.
   - Poppins has been selected for all headings of the website. It offers a bold and clear presence, making it ideal for headings, which need to grab the user’s attention immediately.
   - Roboto is used for all body text. It has been chosen for its excellent legibility, especially at smaller sizes. This is critical for ensuring that all textual content remains easily readable on various screen sizes, from desktops to mobile devices.
2. **Colors**
   - The main colors used for this project are blue and sky blue(the main 2 colors for the flights feature), white, orange, red, black, green, gray and whitesmoke.
   - **Blue** and **sky blue** are the primary colors associated with the flight booking feature, providing a recognizable color identity for this section. **Blue** is used as the background color for the sidebar navigation and for the navigation bar when the scroll position (scrollY) is greater than 0, providing a consistent and dynamic visual identity, as well as the background color for the 'View Details' button of each flight offer. It is also used for heading elements to ensure they stand out and grab attention. **Sky blue** is used for the body text color, offering a soft, readable contrast against the background, and as the background color of the footer to create a distinct, calming section at the bottom of the page. **Sky blue** is also used as the color for loading spinners.
   - **Whitesmoke** is the body's background color in order to create a soft, neutral canvas that reduces eye strain, ensuring a comfortable viewing experience without being too harsh on the eyes.
   - **White** is used for the navigation bar elements (hamburger button, logo, bookmarks and saved flights icons), the main heading of the hero section, footer content, and sidebar navigation links to ensure clarity and a good contrast throughout the website.
   - **Orange** is used as a contrasting accent to the main colors. It serves as the background color for the 'Search' button, drawing attention to this key action. In the main heading **orange** is applied to the text "Fly Your Dreams," emphasizing the key message and adding visual interest to the heading.
   - **Red** is used as a background color for key action buttons, including the "Clear" button next to input fields for departure/arrival locations or calendar selections, ensuring it's easily noticeable for users to reset their choices. It is also applied to the "Save" button for each flight offer and the "Close" button in the flight details dialog, drawing attention to these important interactive elements and enhancing the overall usability of the site.
   - **Black** is used for key textual elements, including the departure and arrival hours in the flight offers, providing strong contrast for readability. It is also applied to the headings and content within the flight details dialog.
   - **Green** is used to highlight the cabin class and label the included features within the flight details dialog, providing a clear and visually appealing way to draw attention to important information and enhancing the overall user experience.
   - **Gray** is primarily used as a hover color for the footer social media buttons and for the sorting buttons (best, cheapest, fastest) on the flight results page, providing a subtle visual cue that enhances interactivity without overwhelming the design.
3. **Navigation**
   - The following aspects were taken into consideration for designing the navigation bar to ensure the user has a smooth experience on navigating the website:
     - **Background Color:** The navigation bar features a blue background color, which aligns with the overall color scheme of the site and ensures consistency with the flight booking section. This color also helps the navigation stand out while maintaining a clean and professional look.
     - **Fixed Position:** The navigation bar is fixed at the top of the screen, remaining visible as the user scrolls. This ensures quick access to important site sections, enhancing usability and improving user experience by keeping navigation options readily available at all times.
4. **Footer**
   - The footer has a sky blue background color, offering a soft contrast to the rest of the page while creating a distinct section at the bottom.
   - The text within the footer is white, ensuring high contrast and readability against the sky blue background, making important information easy to find and read.
5. **Layout**
   - The core functionality of the website is showcased in the hero section where users are immediately presented with the most important features like flight search and calls to action.
   - The most modern CSS layout techniques were used to build the website, including CSS Flexbox, CSS Grid and the [Bootstrap Grid System](https://getbootstrap.com/docs/5.3/layout/grid/#example).
6. **Images**
   - All images are carefully selected and of high quality. The images were optimised using [Image Resizer](https://imageresizer.com/image-compressor) as image compressor.
   - The hero background image was created using [Figma](https://www.figma.com/) and highlights the main feature of the website.
7. **Modals**
   - The website includes modals for displaying detailed flight information and for the flight booking form, both of which are created using the `<dialog>` element. This choice allows for efficient and accessible modal management, leveraging built-in methods for displaying and hiding the modals.
   - The `<dialog>` element provides convenient built-in methods such as `.showModal()` and `.close()`, making it easier to control the visibility of the modals using JavaScript.
   - The `<dialog>` element enhances accessibility by providing a semantic way to define modals. This helps ensure that the modals are properly recognized by screen readers and other assistive technologies, improving the overall user experience for all users, including those with disabilities.
   - More about the `<dialog>` element on [MDN dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog).
8. **Cards**
   - The services section utilizes [Bootstrap's Card Components](https://getbootstrap.com/docs/5.3/components/card/#about) to present key features of the site. Each service is displayed in its own dedicated card, providing a visually structured and user-friendly way to highlight these unique selling points.
9. **Responsive Design**
    - The content adapts seamlessly to all screen sizes and devices, ensuring a smooth user experience.
### Wireframes 
For this project, I decided to create high-fidelity wireframes to better visualize the final product. High-fidelity wireframes provide a more detailed representation of the design compared to low-fidelity wireframes.
1. [Homepage - Desktop](https://postimg.cc/CnTjwvvz)
2. [Homepage - Tablet](https://postimg.cc/SYfzkm2v)
3. [Homepage - Mobile](https://postimg.cc/bG4nRCf3)
4. [Results Page - Desktop](https://postimg.cc/BX3xyVLz)
5. [Results Page - Tablet](https://postimg.cc/BX3xyVLz)
6. [Results Page - Mobile](https://postimg.cc/7b03Kk67)
## Technologies Used
1. **HTML5** - The foundational markup language for structuring web content.
2. **CSS3** - Used for styling and layout, enhancing the visual appearance of the project.
3. **Bootstrap 5** - Used for creating responsiveness across all screen sizes, pre-designed components and utility classes. More about Bootstrap on the [official Bootstrap website](https://getbootstrap.com/).
4. **JavaScript** - It is used to handle user interactions, manipulate the DOM, and manage application logic.
5. **Tippy.js** - Tippy.js is a lightweight and highly customizable library for creating tooltips and popovers in web applications. More about Tippy.js on the [official website](https://atomiks.github.io/tippyjs/).
6. **Air-datepicker** - Air-datepicker is a simple and flexible date-picker library that makes it easy for users to select dates. More about Air-datepicker on the [official website](https://air-datepicker.com/).
7. **Parcel.js** - Parcel.js is a fast, zero-config web application bundler. It simplifies the development process by automatically handling tasks such as bundling JavaScript, CSS and assets. More about Parcel.js on the [official website](https://parceljs.org/).
8. **Babel** (included in Parcel.js by default) - Babel is a JavaScript compiler that allows developers to use the latest ECMAScript features by converting modern JavaScript (ES6) into a version compatible with older browsers and environments. Babel can only transpile ES6 syntax(e.g. arrow functions, classes, const). The same is not true for new features like new array methods (e.g. find) or promises, but here is where polyfilling comes into play. More about Babel on the [official website](https://babeljs.io/).
9. **Core.js** (integrated with Babel) - Core.js is a powerful JavaScript library that provides polyfills for ECMAScript features, ensuring compatibility across different browsers and environments. More about Core.js on this [GitHub repository](https://github.com/zloirock/core-js).
10. **Regenerator-runtime** - The Regenerator-runtime library provides a runtime for generators and async functions, enabling the use of modern asynchronous JavaScript syntax (like async/await) in environments that do not natively support it. More about the Regenerator-runtime [here](https://www.npmjs.com/package/regenerator-runtime).
11. **Booking API** - The Booking API focuses on flight-related services. It provides real-time data on arrival and departure locations, flight dates and available flight offers. The API allows users to search for flights and view flight options.
12. **Intersection Observer API** - The Intersection Observer API is a web API that allows you to monitor the visibility and position of elements within a viewport or container. It provides a way to asynchronously observe changes in the intersection of an element with a parent element or the viewport, without needing to manually track scroll events. This API is commonly used for implementing features like infinite scrolling, lazy loading images, and triggering animations when elements come into view. More about the Intersection Observer API [here](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).
13. **Intl** - The Intl API (Internationalization API) is a built-in JavaScript API that provides a set of functions and objects for handling language-sensitive operations. It helps developers build web applications that can adapt to various languages, formats, and cultural conventions. More about Intl [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl).
## Deployment
This project was created using [Visual Studio Code](https://code.visualstudio.com/), committed to [Git](https://git-scm.com/) and pushed to [GitHub](https://github.com/) using Git's built-in function `git push`.
As this project was created using the development environment provided by [Parcel.js](https://parceljs.org/), I decided to deploy it on [Netlify](https://www.netlify.com/) as the deployment process was much easier. The next steps were followed:
1. **Build the Project**
   - After the development process, I made sure the project is built for production by running the following command in the terminal: `npm run build`
   - This will generate the production-ready files inside the `dist/` folder (or the configured output folder).
2. **Create a Netlify Account**
   - If you dont't have a Netflify account, sign-up at [Netlify](https://www.netlify.com/).
3. **Log In to Netlify**
   - Once your account is created, log in to the **Netlify Dashboard**.
4. **Deploy the Project Manually**
   - In the Netlify Dashboard, look for the "Deploy manually" option on the next screen.
   - Drag and drop your entire `dist/` folder (the output folder from Parcel) into the provided area on the Netlify interface.
   - Netlify will automatically upload and deploy your site.
5. **Access the Live Website**
   - After deployment is complete, Netlify will provide with a unique URL for the website.
6. **Optional: Set Up a Custom Domain**
   - I created a custom domain by going to Domain Settings in the Netlify site dashboard.
### Run the Project Locally
#### Windows
To clone this project from GitHub into a local IDE such as [Visual Studio Code](https://code.visualstudio.com/), follow the next steps:
1. Download and install [Node.js](https://nodejs.org/en/download) on your local machine.
2. Create an account on [RapidAPI](https://rapidapi.com/hub).
3. Get your API key
   - After creating your account, click on the 'Apps' link from the right navigation bar. Make sure a `default-application` was created on the right sidebar navigation where you can get your API key from.
   ![rapid-api-key](https://github.com/user-attachments/assets/4198bc93-6cbd-417b-abbf-ab551cc3c2c7)

    
4. Return to the main page, search for the Booking API and click it.
   ![booking-api-search](https://github.com/user-attachments/assets/f6abefcc-5876-4eb0-a7cb-faad1be0b0f8)

5. On the right windows, select **JavaScript** as Target and **fetch** as Client in order to get the `options` object which will be the second parameter for the `fetch` function when making an API request
   ![rapid-api-key](https://github.com/user-attachments/assets/14efd693-1f12-4127-8975-37ccfeb44aac)

   
6. Follow this link to the [GitHub Project Repository](https://github.com/FlorinMiron98/Jet-Set-Go)
7. Under the repository name, click **<> Code**
![code-button](https://github.com/user-attachments/assets/1de54cc8-457d-452d-a95b-747446c40480)
8. Copy the clone URL for the repository.
![clone-URL](https://github.com/user-attachments/assets/3995b2ae-86d3-452d-a46c-0d927313f9bd)

9. Navigate to the Project Directory
   - Once the repository is cloned, navigate to the location where you want the cloned directory to be created using this command: `cd your-directory`.
10. Clone the Repository
   - Clone the project repository to your local machine using `git clone https://github.com/FlorinMiron98/Jet-Set-Go.git`.
11. Navigate to the newly created folder.
    - The newly created folder is the cloned repository where you should navigate to using `cd Jet-Set-Go`.
12. Install Dependencies
   - Before running the project, you'll need to install all required dependencies. These dependencies are listed in the `package.json` file. In order to install them, run the command `npm install`.
13. Create the `config.js` file.
   - In the `js/` directory, create a new file `config.js`.
   - Create the `OPTIONS` object. Copy and paste the following code inside `config.js`
     ```javascript
     const OPTIONS = {
        method: "GET",
        headers: {
               "x-rapidapi-key": "your-api-key",
               "x-rapidapi-host": "rapid-api-host",
        },
     };

     export { OPTIONS };
     ```
   - Inside the `headers` property introduce the API key value and the RapidAPI host from your booking API.  
14. Run the Project Locally
   - Now, start the Parcel development server to view the project locally using the followin command: `npm run start`.
   - Alternatively, if the script is not defined in `package.json`, you can run Parcel directly by specifying the entry HTML file (e.g., `index.html`): `parcel index.html`.
   - Parcel will start a development server and provide a local URL, typically `http://localhost:1234`.
15. View the Project In Your Browser
   - Open your web browser and go to the following URL: `http://localhost:1234` (or the one provided in the terminal).
16. Make Changes and See Live Updates
   - While the development server is running, any changes you make to the project’s source files will automatically reload in the browser, providing a live preview of your changes.
17. Stop the Development Server
   - When you’re done, you can stop the Parcel development server by pressing `Ctrl + C` in the terminal.
#### MacOS
**Follow the first 10 steps from Windows instructions above**

**Important Note**
As this project was built on a Windows, trying to run it on macOS might cause additional issues. It's possible that the `node_modules` directory still has the Windows-specific version of other platform-specific dependencies that aren't compatible with macOS. (e.g Parcel.js uses [Lightningcss](https://lightningcss.dev/) for CSS minification and optimization. This can cause an error on macOS when running a project that was built on Windows). To solve this issue, follow the next steps:
- **Delete `package-lock.json` (if it exists):** If you still have the `package-lock.json` file in your project, it may contain platform-specific dependencies from the previous Windows environment. It’s a good practice to delete this file before reinstalling dependencies to avoid platform-specific conflicts. Run `rm package-lock.json` in your command line or delete the file manually.
- **Install dependencies on macOS:** Run `npm install` to install all the dependencies fresh on your macOS machine. This will ensure that the right versions of all packages for macOS are installed. The packages will be installed based on your system's platform and architecture, and any platform-specific versions of dependencies (like Lightningcss) will be installed correctly for macOS.
- **Verify the installation:** Once the dependencies are installed, you can verify that everything is working correctly by running `npm start`.
**After completing the steps above, you can follow the rest of the steps from Windows instructions**
## Credits
### Content
- [ChatGPT](https://chatgpt.com/) - Used to create content for:
  - Introduction section
  - Best destinations section
  - Best seasonal destination
  - `<meta>` keywords attribute
  - `<meta>` description attribute
### Media
- favicon: [Image Source](https://www.flaticon.com/free-icon/globe_744502?term=plane&page=1&position=22&origin=search&related_id=744502)
- The logo images both for desktop and mobile screen were created using [Figma](https://www.figma.com/)
- The airplane image with no background: [Image Source](https://unsplash.com/photos/air-canada-airline-X_MOr6oa4-k) - Photo by [John McArthur](https://unsplash.com/@snowjam)
- The sky background image of the `header` element for **desktop**: [Image Source](https://unsplash.com/photos/above-cloud-photo-of-blue-skies-yQorCngxzwI) - Photo by [Taylor Van Riper](https://unsplash.com/@taylorvanriper925)
- The sky background image of the `header` element for **mobile**: [Image Source](https://www.pexels.com/photo/scenic-view-of-sky-1367180/) - Photo by [eberhard grossgasteiger](https://www.pexels.com/@eberhardgross/)
- flight-booking-prices.jpg: [Image Source](https://www.pexels.com/photo/silver-imac-displaying-line-graph-placed-on-desk-572056/) - Photo by [Serpstat](https://www.pexels.com/@serpstat-177219/)
- multiple-airlines.jpg: [Image Source](https://www.pexels.com/photo/person-using-self-check-in-kiosk-3943949/) - Photo by [Anna Shvets](https://www.pexels.com/@shvetsa/)
- easy-booking.jpg: [Image Source](https://www.pexels.com/photo/person-using-macbook-pro-on-white-table-5077049/) - Photo by [cottonbro studio](https://www.pexels.com/@cottonbro/)
- new-york.jpg: [Image Source](https://www.pexels.com/photo/high-angle-view-of-cityscape-against-cloudy-sky-313782/) - Photo by [Quintin Gellar](https://www.pexels.com/@quintingellar/)
- tokyo.jpg: [Image Source](https://www.pexels.com/photo/people-walking-on-the-streets-surrounded-by-buildings-1510595/) - Photo by [Aleksandar Pasaric](https://www.pexels.com/@apasaric/)
- rio-de-janeiro.jpg: [Image Source](https://pixabay.com/photos/rio-rio-de-janeiro-sugar-loaf-4348017/) - Photo by [pauloduarte](https://pixabay.com/users/pauloduarte-2508074/)
- sydney.jpg: [Image Source](https://www.pexels.com/photo/aerial-view-of-sydney-995764/) - Photo by [Patrick McLachlan](https://www.pexels.com/@patrick/)
- cairo.jpg: [Image Source](https://pixabay.com/photos/cairo-mosque-egypt-islam-1980350/) - Photo by [shadyshaker](https://pixabay.com/users/shadyshaker-4265067/)
- paris.jpg: [Image Source](https://www.pexels.com/photo/picture-of-eiffel-tower-338515/) - Photo by [Thorsten technoman](https://www.pexels.com/@thorsten-technoman-109353/)
- aspen.jpg: [Image Source](https://www.pexels.com/photo/snow-covered-mountain-3628990/) - Photo by [Hui Huang](https://www.pexels.com/@hui-huang-1364440/)
The responsive screen mockups was created using [Yujin Yeoh Mockup Generator](https://yujinyeoh.com/website-mockup-generator).
### Code
1. Code for all website's icons was created using [Font Awesome](https://fontawesome.com/).
2. Code for importing Google Fonts inside the `assets/styles.css` file was created using [Google Fonts](https://fonts.google.com/).
3. Code for the layout of the introduction section was created using [Bootstrap Grid System](https://getbootstrap.com/docs/5.3/layout/grid/#example).
4. Code for introduction section cards was created using [Bootstrap Cards](https://getbootstrap.com/docs/5.3/components/card/#about) and slightly modified to fit the project's needs and design.
5. Code for best destinations section cards was created using [Bootstrap Cards](https://getbootstrap.com/docs/5.3/components/card/#about) and heavily edited to fit the project's needs and design.
6. Code for flight booking form and its layout was created using [Bootstrap Forms](https://getbootstrap.com/docs/5.3/forms/overview/#overview) and [Bootstrap Grid System](https://getbootstrap.com/docs/5.3/layout/grid/#example).
7. Code for ordered lists inside the details dialog was created using [Bootstrap List Groups](https://getbootstrap.com/docs/5.3/components/list-group/#basic-example).
8. Code for spinner loaders was created using this [W3C Article](https://www.w3schools.com/howto/howto_css_loader.asp) and slightly modified to fit the project's needs.
9. Code for CSS selectors used to style the **Tippy.js** box was created using [Tippy.js Themes](https://atomiks.github.io/tippyjs/v6/themes/).
10. Code for **Tippy.js** options was created using [Tippy.js Customization](https://atomiks.github.io/tippyjs/v6/customization/).
11. Code for setting the options and the initialisation of the **Air-datepicker.js** was created using [Airdatepicker.js Examples](https://air-datepicker.com/examples).
12. Code for implementing infinite scroll for displaying more search results was created using the [MDN Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).
13. Code for date formatting on search results page and flight details dialog was created using [MDN Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat).
14. Code for adding the correct CSS prefixes to ensure the cross-browser compatibility was created using [Autoprefixer CSS online](https://autoprefixer.github.io/).
15. Code for darkening background images was taken from this [Stack Overflow post](https://stackoverflow.com/questions/26621513/darken-css-background-image).
16. Code for **regular expressions** used in flight booking form inputs was created using [ChatGPT](https://chatgpt.com/).
### Inspirations
- [Booking.com](https://www.booking.com) - For the overall layout of the results page.
#   J e t - S e t - G o - m a i n  
 