# Jet-Set-Go - Features

## Table of Contents
1. [Navigation](#navigation)
   - [Sidebar Navigation](#sidebar-navigation)
3. [Footer](#footer)
4. [Homepage](#homepage)
   - [Hero](#hero)
     - [Main Features Link Buttons](#main-features-link-buttons)
     - [Persons Selection Button](#persons-selection-button)
     - [Flight Class Selection Button](#flight-class-selection-button)
     - [Departure/Arrival Location Inputs](#departure-and-arrival-location-inputs)
     - [Departure/Return Date Inputs](#departure-and-return-date-inputs)
     - [Clear Input Button](#clear-input-button)
     - [Form Validation Tooltips](#form-validation-tooltips)
     - [Search Button](#search-button)
   - [Services](#services)
   - [Best Destinations](#best-destinations)
   - [The Best Seasonal Destination](#the-best-seasonal-destination)
5. [Results Page](#results-page)
   - [Sort Buttons](#sort-buttons)
   - [Flights Results](#flights-results)
   - [Flight Details Dialog](#flight-details-dialog)
   - [Flight Booking Dialog](#flight-booking-dialog)
6. [Booking Confirmation Page](#booking-confirmation-page)

## [Main README.md file](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/README.md)

## Navigation
![navbar-transparent](https://github.com/user-attachments/assets/e33f50fb-6d22-4dc1-ab1c-d9b40b742e55)
- The navigation bar contains the hamburger button, the website's logo and 2 navigation buttons(booked flights and saved flights) which will have the functionality introduced in the future.
- The background color of the navigation bar is transparent when the `scrollY` property is 0.

![navbar-colored](https://github.com/user-attachments/assets/82b442ad-202b-43d8-a237-0397dbc9eed1)
- The background color of the navigation bar turns into blue when the `scrollY` property is bigger than 0.
### Sidebar Navigation
![sidebar-navigation](https://github.com/user-attachments/assets/483d35b2-b77c-4056-925c-4b50775b62c1)
- The sidebar navigation opens when the user clicks the hamburger button. It contains links to the main features of the website. Besides the Flights page, the rest of them will be implemented in the future.
- The overlay opens together with the sidebar navigation and it helps the sidebar navigation to stand out.
- The sidebar navigation closes once the user clicks the hamburger button again or the overlay.
## Footer
![footer](https://github.com/user-attachments/assets/006a0115-50b8-4967-8588-a5e028ab18b2)
- The footer contains contanct information about the company, quick links to the main features of the website and link to social media websites which will open in a new tab.
## Homepage
### Hero
![hero](https://github.com/user-attachments/assets/f49902df-e370-46cb-b234-000332d18583)
- This is an overview of the hero section.
#### Main Features Link Buttons
![main-features-links](https://github.com/user-attachments/assets/fc97d43a-749a-412b-8e44-db97a4206243)
- Each button will open a page in a new tab. The page will contain one of the main features of the website. This will be implemented in the future.
#### Persons Selection Button
![persons-selection-button](https://github.com/user-attachments/assets/efa35eb4-921c-4d13-b03e-e0fbf0d534f5)

![persons-selection-dropdown](https://github.com/user-attachments/assets/42076bd9-77ba-411e-83c4-1b0c1e7e4d1d)
- This feature provides a dynamic dropdown container with functionality that allows users to adjust the number of adults and children for a given selection.
- The dropdown contains options to increase or decrease the number of adults and children.
- The user can adjust the count of adults and children by selecting the respective increment or decrement buttons.
- When the user increases the number of children, a corresponding select element is created for each additional child.
- Each select element allows the user to choose the age of the child, with available options ranging from 1 to 17 years old.
- The content of the button is updated dynamically to reflect the current number of adults and children based on the user's selections.
- The dropdown container is hidden when the user clicks the 'Done' button or anywhere else outside the container.
#### Flight Class Selection Button
![flight-class-selection-button](https://github.com/user-attachments/assets/fb4c0811-1bcf-497b-833f-542f520f965c)

![flight-class-selection-dropdown](https://github.com/user-attachments/assets/48fe7091-29c6-492b-9fd1-e2b263c18cc1)
- The flight class selection button opens a dropdown menu containing 4 flight class options(Economy, Premium Economy, Business Class, First Class).
- When the user selects a flight class, the content of the flight class selection button is updated to reflect the chosen class.
- The selected flight class button is visually distinguished with a blue border, marking it as the active selection.
- The dropdown menu closes when clicking the 'Done' button or anywhere else outside the container.
#### Departure and Arrival Location Inputs
- This feature provides a search input for users to find and select a departure or arrival location, displaying relevant city and airport information in a dropdown results container.
![departure-arrival-location-search-input](https://github.com/user-attachments/assets/e0f77a50-4738-4767-8bfc-ca43975b1c20)

- As the user types into the search input, a dropdown container displays search results based on the input.
- Cities are displayed with an associated city icon, which is sourced from the booking API.
- Airports within the same city are listed with the airport code, airport name, the distance from the city center. Airports within the same city have a larger gap between the edge of the container to make them easier to distinguish.
![departure-arrival-location-results-dropdown](https://github.com/user-attachments/assets/18e068d2-9ec9-4e25-bf4c-41ba8377beb8)

- Airports from other cities are displayed with the airport code, airport name, the location.
![departure-arrival-location-results-dropdown-2](https://github.com/user-attachments/assets/a3a93c81-bae5-4e94-8947-4cb3e6cfcc4d)
#### Departure and Return Date Inputs
- This feature allows users to select a departure and/or return date using an interactive calendar interface, provided by [Air-datepicker](https://air-datepicker.com/).
- There are two date input fields: one for selecting the departure date and one for the return date.
![departure-return-date-input](https://github.com/user-attachments/assets/16f8def7-ebc9-46da-bbe7-cee21d0c70cd)

- When the user clicks on either input field, a calendar (using Air-datepicker) is displayed for date selection.
- The minimum selectable date for both departure and return is today, preventing users from selecting a past date.
![departure-return-date-dropdown](https://github.com/user-attachments/assets/9255e3e8-a0f9-4cff-93df-63355d593c7e)
#### Clear Input Button
- Once the user selects a value (location or date), the corresponding input field is updated with the selected value, and the input is disabled temporarily to prevent further manual editing.
- A "Clear Input" button appears on the right edge of the input field (for both departure/arrival locations and departure/return dates) after the user has selected a value from the dropdown results container or the Air-datepicker calendar.
![clear-input-button](https://github.com/user-attachments/assets/be16d508-9724-4cf6-8fd3-fe51e8a14ec3)

- When the user clicks the clear input button the input field's value is cleared and the input field is refocused, ready for a new input or selection.
![clear-input-button-focus](https://github.com/user-attachments/assets/43d69b35-7269-40d5-a498-2a65115d1dc6)
#### Form Validation Tooltips
This feature provides validation tooltips to guide users when certain selections are missing or incorrect, ensuring the form is completed correctly. The tooltips were created using [tippy.js](https://atomiks.github.io/tippyjs/).
- **Persons Selection Button Validation:**
  - If the user does not select an age for each child (in case children have been added), a tooltip is displayed above the persons selection button.
  - The tooltip warns the user to select the age for all children.
  - The tooltip is triggered when the form is submitted and has not filled in the required child age fields.
  ![children-age-tooltip](https://github.com/user-attachments/assets/971da321-3386-4f3e-8e49-5ba1f4ce9005)

- **Flight Class Button Validation**
  - As the default value for the flight class selection is 'Economy', this button does not need to be validated.
- **Departure/Arrival Location Input Validation**
  - If the user does not select a location for either departure or arrival, a tooltip is displayed above the corresponding input field.
  - The tooltip informs the user to select a valid departure and/or arrival location.
  - The tooltip is triggered when the form is submitted or when the user interacts with the location input fields and has not selected a location.
  
  ![departure-location-input-validation](https://github.com/user-attachments/assets/e6504ce4-4f14-479c-81bd-6eea7af1d505)
  ![arrival-location-input-validation](https://github.com/user-attachments/assets/9cabad43-6d3b-4d9f-947a-d5a9801a5255)

- **Departure/Return Date Input Validation**
  - The user is required to select a valid departure date before submitting the form.
  - If the departure date is not selected, a tooltip will appear, informing the user that the departure date is required.
  - The tooltip for the departure date appears above the departure date input if the user has not selected a date. It prompts the user to select a valid departure date.
  - The tooltip is triggered when the form is submitted and has not made a selection.
  - The return date input is **optional**. Users may leave this field blank without triggering any validation error.
  ![departure-date-input-validation](https://github.com/user-attachments/assets/e93f59cd-74b2-4175-887a-4b01ab7c119d)
  ![return-date-input-validation](https://github.com/user-attachments/assets/b038c4c3-1742-438c-9733-82bbb18e45ce)
#### Search Button
- After the user fills in valid inputs for all required fields (departure/arrival locations, departure/return dates, persons selection), the search button redirects the user to the results page, where the available flight offers matching their inputs are displayed.
![search-button](https://github.com/user-attachments/assets/ee9675ad-62ea-4eed-95e8-ddfe0205a3b0)
### Services
This feature displays a section with three cards, each highlighting a key service the website provides. These cards are designed to inform users about the primary benefits of using the website and make navigation more engaging. Each card contains an image, the service provided and a short description.
![services](https://github.com/user-attachments/assets/7c658c7e-97e2-4483-81e8-4a153138531a)
### Best Destinations
This section highlights some of the top travel destinations around the world, showcasing cards for each city with key features related to booking travel.
![best-destinations](https://github.com/user-attachments/assets/2e6418f6-4397-4836-bc29-34c47cc7213d)

- Each card features a beautiful image of the city to capture the user's attention and provide a preview of the destination.
- The buttons are placeholders for future functionality, where users will be able to explore booking options for flights, hotels, car rentals, attractions, and access detailed information about each city.
### The Best Seasonal Destination
This section highlights the best travel destinations for each season, showcasing cards for top locations with an inviting "Book Now" call to action.
![best-seasonal-destination](https://github.com/user-attachments/assets/9decc0e0-bdef-4c30-a73b-1c523b61d7f0)

- The card contains an image of the location, the location name, a short description of the location highlighting why it's an ideal seasonal destination, and a call-to-action button 'Book Now'(the functionality for this button will be implemented in the future).
- The functionality for displaying the location dynamically based on the season will be implemented in the future.
## Results Page
### Sort Buttons
This feature offers intuitive sorting options to help the user quickly find the flights that best suit his needs.
![sort-buttons](https://github.com/user-attachments/assets/fdb920e3-fbdd-4708-a175-8d211b993bc7)

- Users can toggle between the sorting options using the three buttons labeled **Best**, **Cheapest**, and **Fastest**.
- When a user clicks one of the sorting buttons, a new API request is triggered to fetch the sorted list of flights based on the selected criteria.
- To indicate which sorting option is currently active, the button representing the selected sort option is visually highlighted with a blue border at the bottom.
### Flights Results
![flight-offers](https://github.com/user-attachments/assets/2da03ce4-d975-434d-baac-885b0c87636f)

- Each flight result is presented within a container, showcasing the most relevant details in a clear and organized manner:
  - **Operating Carrier**
    - The airline responsible for the flight is shown with the logo of the airline for easy identification and the full name of the airline.
  - **Flight Class**
    - This label displays the flight class (e.g., Economy, Business, First Class) to give users an idea of the comfort and services provided on board.
  - **Departure/Arrival Date & Time**
    - The exact date and time when the flight departs and when it arrives at the destination
  - **Departure & Arrival Airport Codes**
    - The IATA codes of the airport where the flight departs and of the airport where the flight arrives. (e.g. LAX, JFK)
  - **Flight Duration**
    - An indicator displaying the total flight time, helping users quickly understand how long the flight will take from departure to arrival.
  - **Number of Stops**
    - A simple indicator showing whether the flight is non-stop or how many layovers are included.
  - **Price**
    - The total cost of the flight is shown here, helping users evaluate their options based on budget.
  - **Save Button**
    - This button will allow users to save the flight for future reference. The Save button’s functionality will be added in the future.
  - **View Details Button**
    - Clicking this button will open a more detailed view of the selected flight, showing other essential details.
### Flight Details Dialog
![flight-details-dialog-1](https://github.com/user-attachments/assets/7e2e5f80-bb0f-4b06-b0f3-c87e13615e41)
![flight-details-dialog-2](https://github.com/user-attachments/assets/b10aadba-32d8-455c-997f-c68d2dd381b9)

The modal includes the additional information that wasn't shown in the flight results container, and that information is layover time(if that's the case), operating carrier features and the 'Select' button.
- **Layover Time**
  - If the flight includes layovers, the modal will display the layover time for each stop. This gives users a clear idea of how long they will need to wait between connecting flights.
- **Operating Carrier Features**
  - This information will help users make a more informed decision based on the amenities available during the flight.
- **Select Button**
  - The 'Select' button will be clearly visible, allowing users to move to the booking form with ease.
### Flight Booking Dialog
![flight-booking-dialog](https://github.com/user-attachments/assets/2f6d628f-2863-4af0-8556-7422e1c2b1c6)

- Once the user clicks the 'Select' button from the Flight Details modal, they are redirected to the Flight Booking Form.
- This form allows the user to enter all necessary information to complete their booking.
- The form also includes validation to ensure all required fields are completed correctly.
- Upon successful submission, the user is redirected to the confirmation page.
## Booking Confirmation Page
![booking-confirmation](https://github.com/user-attachments/assets/80d22a38-cd91-4b6d-920a-1c455a90f53b)

- Once the user successfully submits their flight booking form, they are redirected to the Booking Confirmation Page
- This page confirms that the booking was completed successfully and provides the user with a button which can be clicked to return to the main page.

