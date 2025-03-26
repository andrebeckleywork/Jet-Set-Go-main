# Jet-Set-Go - JavaScript Validator
In this project, I opted for **JSHint** over **JSLint** primarily because JSHint offers better support for modern JavaScript syntax (ES6 and beyond). You can have a better look on this tool [here](https://jshint.com/).
## Table of Contents
1. [Model](#model)
2. [Controller](#controller)
   - [Flights Search Controller](#flights-search-controller)
   - [Flights Results Controller](#flights-results-controller)
3. [Views](#views)
   - [Navbar View](#navbar-view)
   - [Side Navbar View](#side-navbar-view)
   - [Header Content View](#header-content-view)
   - [Persons Selection Button View](#persons-selection-button-view)
   - [Persons Selection View](#persons-selection-view)
   - [Flight Class Selection Button View](#flight-class-selection-button-view)
   - [Flight Class Selection View](#flight-class-selection-view)
   - [Location Search View](#location-search-view)
   - [Departure Location Search View](#departure-location-search-view)
   - [Arrival Location Search View](#arrival-location-search-view)
   - [Reverse Input Values Button View](#reverse-input-values-button-view)
   - [Date Picker View](#date-picker-view)
   - [Clear Input Button View](#clear-input-button-view)
   - [Search Results Button View](#search-results-button-view)
   - [Flight Results View](#flight-results-view)
   - [Flight Offers View](#flight-offers-view)
   - [Details Dialog View](#details-dialog-view)
   - [Form Submission Dialog View](#form-submission-dialog-view)
4. [Common Warnings](#common-warnings)
## [Main README.md file](https://github.com/FlorinMiron98/Jet-Set-Go/blob/main/README.md)

**Important Notes**
- In this project, underscores (_) are used as a convention to improve readability and clarity of method and variable names. The underscore has no special significance beyond helping to visually distinguish these members as internal or for organizational purposes.
- In this project, the MVC (Model-View-Controller) design pattern has been implemented to structure the code in a modular and maintainable way. This pattern separates the application into three main components:
  - **Model:** Responsible for fetching and storing data.
  - **View**: Responsible for displaying data and user interface.
  - **Controller:** Responsible for updating the Model and View. (a bridge between Model and View)
- The Publisher/Subscriber design pattern is slightly used in the Details Dialog View.
## Model
![model](https://github.com/user-attachments/assets/1d58aa30-2e61-4aa9-a10f-e8f0c6515441)

## Controller
### Flights Search Controller
![flight-search-controller](https://github.com/user-attachments/assets/5c988075-a17c-4bf9-a361-3472a1fe034c)

### Flights Results Controller
![flight-results-controller](https://github.com/user-attachments/assets/df0f2381-169b-49d9-96df-a40f7e81fbd8)

## Views
### Navbar View
![navbar-view](https://github.com/user-attachments/assets/672c3610-1388-4581-ba12-c7fef425b390)

### Side Navbar View
![side-navbar-view](https://github.com/user-attachments/assets/7d1979c1-5865-48bd-889e-69833d4002c7)

### Header Content View
![header-content-view](https://github.com/user-attachments/assets/7c72cdcc-c5df-47d8-bc2f-0dc95c38b3ec)

### Persons Selection Button View
![persons-selection-btn-view](https://github.com/user-attachments/assets/b50953d9-fa12-40eb-8128-bb1ad91e5699)

### Persons Selection View
![persons-selection-view](https://github.com/user-attachments/assets/ac0d78c5-a288-4344-a520-1322ef80cafd)

### Flight Class Selection Button View
![flight-class-selection-btn-view](https://github.com/user-attachments/assets/70661998-ce69-44bd-bca0-3f4ed6c720f0)

### Flight Class Selection View
![flight-class-selection-view](https://github.com/user-attachments/assets/00a20885-5086-457b-8103-75d8c3c79654)

### Location Search View
![location-search-view](https://github.com/user-attachments/assets/14135456-a20d-4023-a2ba-810709fb2238)

### Departure Location Search View
![departure-location-search-view](https://github.com/user-attachments/assets/0efa8126-96bd-4eca-ae4b-2d0d4510dd21)

### Arrival Location Search View
![arrival-location-search-view](https://github.com/user-attachments/assets/4396577c-bb96-40c3-ad46-eba57c1c936f)

### Reverse Input Values Button View
![reverse-input-values-btn-view](https://github.com/user-attachments/assets/76c6d5f5-ff45-4e58-b326-010d6af8b442)

### Date Picker View
![date-picker-view](https://github.com/user-attachments/assets/a7b6329a-1c43-45e1-9e3a-9bfc2c1d0c81)

### Clear Input Button View
![clear-input-btn-view](https://github.com/user-attachments/assets/48315091-d14b-41ef-817c-6413794d1cc3)

### Search Results Button View
![search-results-btn-view](https://github.com/user-attachments/assets/5ecb4517-9747-4f69-8961-ba27d9376d90)

### Flight Results View
![flights-results-view](https://github.com/user-attachments/assets/6c3a4ea6-bb0b-4e5f-aadf-cc7a04670cc0)

### Flight Offers View
![flights-offers-view](https://github.com/user-attachments/assets/41bea5b0-37be-414e-af3d-0f68ca3d8c6a)

### Details Dialog View
![details-dialog-view](https://github.com/user-attachments/assets/33bd5576-f689-4bab-aabd-2a5da985aa18)

### Form Submission Dialog View
![form-submission-dialog-view](https://github.com/user-attachments/assets/10804959-c60a-4735-81bd-4b6d4186ad96)

## Common Warnings
The following warnings are common across the view classes. These are typically related to coding style and modern JavaScript practices, and they do not impact the functionality of the application:
1. **Class properties must be methods. Expected '(' but instead saw '=':**
   - This warning occurs because arrow functions are used inside class properties. While JSHint expects methods to be defined using parentheses, the arrow functions are intentionally used to bind the correct `this` context in modern JavaScript.
2. **Expected an assignment or function call and instead saw an expression:**
   - This warning happens when a statement is written as an expression without performing any assignment or function call. The expression is valid but may not align with JSHint's expectations for how the code should be structured.
3. **Expected an identifier and instead saw ';'**
   - This warning is triggered by placement of semicolons in the code, though it doesn’t affect functionality(most probably introduced automatically by the Prettier extension). JavaScript is flexible with semicolons, and the code runs fine despite this warning.
4. **Expected an identifier and instead saw CSS selector**
   - This warning occurs when a CSS selector (e.g., .sidebar-navigation) is used where an identifier is expected. In this case, it's used correctly to select and manipulate DOM elements, so the warning can be ignored.
5. **Expected an identifier and instead saw '=>'.**
   - JSHint flags the use of arrow functions (`=>`) inside classes as a potential issue, though it’s intentional. Arrow functions are used here to preserve the `this` context, which is important in handling event listeners and other asynchronous functions in modern JavaScript.
6. **Duplicate class method `'this'`**
   - It's likely to refer to an actual reference to this rather than a method name, which does not interfere with functionality.
7. **Misleading line break before '?'; readers may interpret this as an expression boundary**
   - This warning appears because of a line break before a ternary operator (`?`), which JSHint interprets as potentially confusing for readability. However, the code is syntactically correct and works as expected.
