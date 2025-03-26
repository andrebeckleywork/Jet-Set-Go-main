# Jet-Set-Go - Testing Details

[Main README.md file](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/README.md)

## Table of Contents
1. [Validator Testing](#validator-testing)
2. [Performance, Accessibility and Best Practices Testing](#performance-accessibility-and-best-practices-testing)
3. [Manual Testing](#manual-testing)
4. [Testing Client Stories From UX](#testing-client-stories-from-ux)
5. [Functional Testing](#functional-testing)
6. [Bugs](#bugs)

Automated testing refers to using software tools to automatically execute tests on your application. Automated tests are scripted and can run without human intervention. The primary goal is to increase the efficiency and repeatability of tests.

Manual testing involves human testers executing test cases without using any automated tools. It is often employed to assess the usability and user experience.

Automated testing should be deployed during development and performance testing, while manual testing is essential for early development, user acceptance, and testing complex features before full automation.

### Validator Testing
1. [W3C Markup Validator](https://validator.w3.org/)
   - Pages validated:
     - index.html
     - flights-results.html
     - booking-confirmation.html
   - Results
     - The result for `flights-results.html` and `booking-confirmation.html` files is "_Document checking completed. No errors or warnings to show._".
       
       ![search-results-page-html-validator](https://github.com/user-attachments/assets/86cf4d8b-679b-40bb-aaf1-de6bc4792bb3)
     - The result for `index.html` file throws a single error: "_Element `a` is missing required attribute `href`_".
       ![homepage-html-validator-error](https://github.com/user-attachments/assets/f8b00356-dbb7-4998-ac7e-c3eaeeae2215)
     - **Notes**: The error thrown by W3C Markup Validator for `index.html` file is related to the 'Search' button of the flights search form. The `href` attribute will be dynamically added using **JavaScript** and its value is an URL containing all the input values introduced by the user and passed as query parameters.
2. [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
   - The CSS file was validated and is used across all HTML pages. **Results:**
     - The result for CSS file checking is "_Congratulations! No Error Found._"
       ![CSS validation](https://github.com/user-attachments/assets/c1c8506d-bb73-44fd-b3d9-d07062896788)
3. To maintain code readability and keep the project organized, I decided to create a separate `.md` file for the JSHint validator instead of embedding the linting testing directly within this file. This approach ensures that the documentation remains clean, without cluttering the files with extensive linting testing. **You can find the JavaScript validator in the separate [JSValidator.md file](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/JSValidator.md)**

### Performance, Accessibility and Best Practices Testing
Performance, accessibility, and best practices tests were conducted using [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview). The results help ensure the application is optimized for speed, user accessibility, and adherence to modern development standards.
Results for each page:
- Homepage(index.html):
  - **Performance:** Score 93/100
  - **Accessibility:** Score 95/100
  - **Best Practices:** Score 96/100
 
   ![homepage-scores](https://github.com/user-attachments/assets/38a942a7-0225-4978-b86b-a7ae34677ef5)

- Search Results Page(flights-results.html):
  - **Performance:** Score 99/100
  - **Accessibility:** Score 95/100
  - **Best Practices:** Score 100/100

    ![search-results-page-scores](https://github.com/user-attachments/assets/bb64692e-a708-412b-8a73-f2cb0eeb3981)

- Booking Confirmation Page(booking-confirmation.html):
  - **Performance:** Score 100/100
  - **Accessibility:** Score 100/100
  - **Best Practices:** Score 100/100
 
    ![booking-confirmation-page-scores](https://github.com/user-attachments/assets/5085e3ba-073c-48ab-aa84-a64438296d99)

### Manual Testing
Manual testing was conducted to ensure the application functions as expected across various use cases and user interactions.
- **Desktop Testing:** Verified compatibility using Chrome, Firefox, Microsoft Edge, Opera as well as Safari through [Playwright](https://playwright.dev/) on a Windows computer.
- **Mobile Testing(Android):** Checking responsiveness and functionality with Chrome, Firefox and Opera browsers on an Android device.
- **Link Verification:** All manually tested links, both internal and external(footer links to social media), have been verified and successfully confirmed to function correctly, ensuring seamless navigation.
- **Form Validation:** The booking form has undergone thorough validation testing to ensure that users receive appropriate feedback for any input errors. The form accurately checks for required fields and correct formatting.
### Testing Client Stories From UX
1. As a customer, I want to search for available flights by entering my departure and arrival cities, travel dates, and number of passengers so that I can find flights that meet my needs.
   | **Test Description** | **Outcome** | **Status** |
   | -------------------- | ----------- | ---------- |
   | Verify that the search flight tickets form is displayed | Flight tickets search form should be visible on the page | Passed |
   | Test search with valid departure and arrival cities, valid travel dates and number of passengers | A new page is displayed in a new tab displaying the flight offers results | Passed |
   | Test search with invalid departure and arrival cities | A dropdown box containing an error message should be displayed | Passed |
   | Test search with valid departure and arrival cities, invalid travel dates (e.g. past dates) | A message that no flight offer has been found should be displayed | Passed |
   | Test search with valid departure and arrival cities, travel dates and unselected children's ages(if that's the case) | A `tippy.js` tooltip should be displayed requiring each child's age to be introduced | Passed |
   | Test search with valid input values | A message that no flight offer has been found should be displayed | Passed |
   | Test search with blank fields | A `tippy.js` tooltip should be displaying requiring the user to enter the relevant data | Passed |

2. As a customer, I want to be able to sort flight search results by best, cheapest, and fastest, so that I can easily find the option that best fits my travel needs based on price, duration, or overall quality.
   | **Test Description** | **Outcome** | **Status** |
   | -------------------- | ----------- | ---------- |
   | Verify that the flight search results are sorted by the "best" option (combining factors like price and duration) by default once the results are displayed. | Flights offers should automatically be sorted by the "best" option when first displayed. | Passed |
   | Verify that flight search results can be sorted by the cheapest option (lowest price). | Flights should be listed from the lowest to the highest price. | Passed |
   | Verify that flight search results can be sorted by the fastest option (shortest duration). | Flights should be listed from the shortest to the longest duration. | Passed |
   | Verify that each sorting button is styled differently when active | The active button must have a different styling than the unactive ones | Passed |
   | Verify that the sorting functionality works consistently across different screen sizes. | Sorting by cheapest, fastest, and best should work seamlessly on mobile and tablet views. | Passed |

3. As a customer, I want to select a flight from the search results, view flight details, and proceed to booking so that I can finalize my flight purchase.
   | **Test Description** | **Outcome** | **Status** |
   | -------------------- | ----------- | ---------- |
   | Verify that a customer can select a flight from the search results. | Each flight offer should contain a 'View Details' button which will open a modal containing the flight details | Passed |
   | Verify that the flight details page displays accurate information (e.g. departure/arrival times, duration, price). | All flight details should be displayed correctly on the details page. | Passed |
   | Verify that the user can click the "Book Now" or equivalent button to proceed to the booking page after viewing the flight details. | Clicking "Book Now" or the equivalent button should open a modal with the relevant form requiring user's details | Passed |
   | Verify that the information displayed on the flight details modal matches what was shown in the search results. | Flight details on the details modal should match the information presented in the search results. | Passed |
   | Verify that the flight selection, details modal and booking process works correctly on mobile devices. | Flight selection, details modal and booking should be fully functional on mobile devices with no layout issues. | Passed
   | Verify that the user can cancel the flight selection and return to the search results. | The user should be able to cancel the selection and go back to the search results without losing their previous search parameters. | Passed |

4. As a customer, I want to see recommended flight destinations so that I can discover new places to visit and book flights easily.
   | **Test Description** | **Outcome** | **Status** |
   | -------------------- | ----------- | ---------- |
   | Verify that recommended flight destinations are displayed on the homepage or relevant page. | The recommended destinations should be visible and clearly labeled on the page. | Passed |
   | Verify that the recommended destinations are displayed correctly and are clickable on mobile devices. | Recommended destinations should be properly displayed on mobile screens without layout issues. | Passed |
**Note**: The functionality beyond displaying the recommended flight destinations is yet to be implemented.

5. As a customer, I want to be able to load more flight search results, so that I can view additional options beyond the initial set without having to perform a new search.
   | **Test Description** | **Outcome** | **Status** |
   | -------------------- | ----------- | ---------- |
   | Verify that the **IntersectionObserver** is correctly triggered when the user scrolls to the bottom of the flight results list. | When the user scrolls near the bottom of the page, the IntersectionObserver should be triggered, initiating the loading of more results. | Passed |
   | Verify that when the IntersectionObserver triggers, new flight results are loaded without needing the user to click a button. | Additional flight results should load seamlessly below the initial set when the user scrolls down. | Passed |
   | Verify that the additional results loaded via the IntersectionObserver are relevant to the search query and do not include duplicates. | New results should match the initial search criteria, and duplicates should not appear. | Passed |
   | Verify that a loading spinner or indicator is shown while the additional results are being fetched. | A loading spinner should be displayed while new results are loading, providing visual feedback to the user. | Passed |
   | Verify that using the IntersectionObserver for infinite scrolling does not negatively impact page performance. | The page should load additional results without significant performance degradation or delays, even with many results. | Passed |
   | Verify that the IntersectionObserver behavior works correctly on mobile and tablet devices, including loading additional results. | The IntersectionObserver should work seamlessly across different screen sizes, including mobile and tablet. | Passed |
   | Verify that after applying sorting, the IntersectionObserver continues to load results that match the new criteria. | The IntersectionObserver should load additional results based on the updated filters or sorting options applied by the user. | Passed |
   | Verify that the infinite scrolling functionality does not conflict with other UI elements. | The IntersectionObserver should work without interfering with other interactive elements on the page. | Passed | 
### Functional Testing
1. **Homepage**
   | **Test Description** | **Expected Result** | **Status** |
   | -------------------- | ------------------- | ---------- |
   | Click the Hamburger button from the navigation bar | The overlay and the sidebar navigation should be displayed. The background color of the navigation bar should turn to blue | Passed |
   | Click the overlay | The sidebar navigation should be hidden. If the `scrollY` property is bigger than 1, the background color of the navigation bar should be blue. If the `scrollY` property is 0, the background color of the navigation bar should be transparent. | Passed |
   | Click the persons selection button | A dropdown container should be displayed containing the number of adults and children, as well as the buttons to increase or decrease their number | Passed |
   | Increase or decrease the number of adults or children | The content of the persons selection button should dynamically update to reflect the changes | Passed |
   | Increase the number of children | A select element should be displayed where the user is asked to select each child's age | Passed |
   | Decrease the number of children | The select element should be hidden | Passed |
   | Each time the user increases the number of adults or children, the total number should not be bigger than 9. | Disable the increase buttons when the total number of adults and children is equal to 9 | Passed |
   | Click the cabin class button | A dropdown list should be displayed containing all flight classes (economy, premium economy, business class, first class) | Passed |
   | Select a cabin class | The content of the cabin class button should dynamically update to reflect the changes. Style the selected class differently for a proper User Experience | Passed |
   | Look for a departure/arrival location | A dropdown list should be displayed containing results based on the input value introduced by the user | Passed |
   | Click one of the departure/arrival location results | The input value should update with the location code and the location name. The clear input button should be displayed | Passed |
   | Introduce an invalid departure/location value | The dropdown list should contain a message stating that no result matches the user's query | Passed |
   | Click the departure/return date input | A datepicker should be displayed where the minimum value is the today date | Passed |
   | Select a departure/return date | The input value should update with the selected date. The clear input button should be displayed | Passed |
   | Click 'Search' button without selecting each child's age if that's the case | A `tippy.js` tooltip should appear asking the user to select all children's age | Passed |
   | Click 'Search' button without selecting a departure/arrival location | A `tippy.js` tooltip should appear asing the user to select a value for the departure/arrival location | Passed |
   | Click 'Search' button without selecting a departure date | A `tippy.js` tooltip should appear asing the user to select a departure date | Passed |
   | Click on the clear input button for each input | The input value should be cleared and the input should receive focus | Passed |
   
2. **Results page**
   | **Test Description** | **Expected Result** | **Status** |
   | -------------------- | ------------------- | ---------- |
   | Click 'Search' button without introducing a return date | The search results page should open with the relevant flight offers results as the return date is optional | Passed |
   | Click 'Search' button with valid data | The search results page should open containing the three sort buttons (best, cheapest, fastest) and the loading spinner. The loading spinner will be hidden and the flight offers will be displayed when the data is received | Passed |
   | Click 'Search' button with invalid data | The search results page should open containing the three sort buttons (best, cheapest, fastest) and the loading spinner. The loading spinner will be hidden and a message that no flight result matches the search criteria will be displayed for the user | Passed |
   | Click the 'View Details' button from the flight offers | A modal should be displayed containing all the relevant data for the flight offer selected by the user (e.g. departure and arrival locations, departure and return date, layover, operating carrier, included features) | Passed |
   | Click the sort buttons (best, cheapest, fastest) | The results page should reload and display the flight offers that match the sort button | Passed |
   | Scroll to the bottom of the page | The Intersection Observer API should load more flight offers for the user | Passed |

3. **Book flight form**
   | **Test Description** | **Expected Result** | **Status** |
   | -------------------- | ------------------- | ---------- |
   | Click the 'Select' button from the flight details modal | A new modal should appear containing a form for the user to complete in order to book the selected flight | Passed |
   | Leave the 'First Name' input empty when clicking the 'Submit' button | Display a message for the user to fill the input | Passed |
   | Verify that the first name field accepts only alphabetic characters and is required. | The field should only allow alphabetic characters and display an error message if left empty. | Passed |
   | Verify that the last name field accepts only alphabetic characters and is required. | The field should only allow alphabetic characters and display an error message if left empty. | Passed |
   | Verify that the email address field accepts a valid email format and is required. | The field should accept a valid email format (e.g. user@example.com) and show an error if invalid or empty. | Passed |
   | Verify that the phone number field accepts a valid phone number format and is required. | The field should accept a phone number in the international format and display an error if left empty or incorrect. | Passed |
   | Verify that the card number field accepts a valid credit/debit card number and is required. | The field should accept 16-digit card numbers and display an error message if it doesn't match the format or is left empty. | Passed |
   | Verify that the CVV field accepts a 3-digit CVV code and is required. | The field should only accept a 3-digit number and display an error if left empty or incorrect. | Passed |
   | Verify that the message field is optional and can accept text input. | The field should allow text input but is not required for submission. | Passed |
   | Verify that the form cannot be submitted unless all required fields are filled out correctly. | The submit button display an error if any required fields are missing or invalid. | Passed |
   | Verify that the form fields and layout adjust properly on mobile devices. | The form should be fully functional and properly displayed on mobile devices with no layout issues. | Passed |
   | Click the 'Submit' button after the data was properly introduced | The user should be redirected to a booking confirmation page which contains a confirmation message and a 'Return to Main Page' button | Passed |

4. **Booking confirmation page**
   | **Test Description** | **Expected Result** | **Status** |
   | -------------------- | ------------------- | ---------- |
   | Click 'Return to Main Page' button | Return the user to the Homepage | Passed |
### Bugs
- Issue with data fetching time:
  - When fetching data from the booking API (such as departure/arrival locations, flight offers, or flight details), there may be a delay of a few seconds before the data is fully loaded. This is due to the time it takes to retrieve and process the information from the external API. Users may experience a brief loading period, which is normal during this process.
- Issue with `.parcel-cache` File:
  - The `.parcel-cache` file was omitted from the `.gitignore` file during development. As a result, Git preserved a reference to the `.parcel-cache` and it was accidentally pushed to GitHub. The process of removing the `.parcel-cache` from the repository on GitHub caused some duplicate commits to appear in the commit history.
    
  **Solution**
    - Added the `.parcel-cache` file to `.gitignore` to prevent it from being tracked by Git in the future.
    - Removed the `.parcel-cache` file from the Git history using [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) to clean the history and prevent duplication.
    - Force-pushed the cleaned history to the remote GitHub repository.
- Issue with Safari:
  - While the website is designed to work seamlessly across modern browsers such as Chrome, Firefox, Opera, and Edge, some features may not function as expected in Safari. This section outlines known issues related to modern layout techniques (such as CSS Grid and Flexbox) and the handling of asynchronous code, including unhandled promise rejections. These discrepancies are mainly due to differences in how Safari interprets and implements web standards. Below, you'll find a detailed explanation of these issues and potential workarounds to ensure optimal functionality.
  1. **Layout Issues in Safari**
     - **CSS Grid:** Safari has had inconsistent behavior when using `grid-template-areas`. Sometimes, it doesn't respect the grid areas as expected or has visual inconsistencies when compared to other browsers like Chrome or Firefox. This can result in misalignment or incorrect placement of grid items.
     - **CSS Flexbox:** There are certain Flexbox issues with Safari, especially with items stretching or aligning incorrectly. For example, setting align-items: stretch may not always stretch items to their full container size in Safari.
  2. **Asynchronous Code**
     - While the code for handling asynchronous operations is wrapped in a `try...catch` block to catch errors, Safari may still throw an **"Unhandled Promise Rejection"** error in certain cases. This occurs because Safari's behavior around promise rejections can sometimes be more strict or behave differently than other browsers (such as Chrome, Firefox, Opera, and Edge). Even with proper error handling using `try...catch`, Safari may still interpret certain rejection cases as unhandled or trigger the error unexpectedly.
 
     ![unhandled-promise-rejection-safari](https://github.com/user-attachments/assets/b3eb83cd-e79a-4230-977b-85d40a2433ea)

- Missing airline information:
  - Some flight offers may not display the airline name and airline icon. This issue arises because the API does not provide the relevant information for the operating carriers in certain flight offers. As a result, these details may be missing or unavailable for those particular flights.

    ![missing-airline-information](https://github.com/user-attachments/assets/e04e3b15-ceb4-4d87-93b7-f7cb8364773d)

- Handling non-existent pages/resources:
  - While the requirement is to redirect users to the main page if they navigate to a non-existent page or resource, there is an exception for the flight results page. Since flight results open in a new tab, if something goes wrong with the flight data, users should simply close the new tab and return to the main page where they can modify their search values. This behavior is intended as a workaround for scenarios where direct redirection isn't feasible.
- API Requests Limits and API key limitations
  - The project uses the booking API that provides only 25 requests per month. This limit may restrict the ability to fully assess the project, especially if more frequent API calls are required during testing or evaluation. A database for storing and managing API keys was not implemented because it is considered a feature beyond the scope of this project. As a result, users will need to manually provide their own API key, which may be inconvenient if the API's request limit is reached.
