step to start the project locally

 install command : npm install
 start command : npm run dev

 Explaination

Dashboard Component

This is the main component that manages the state of the dashboard.

It uses the 
useState
 hook to maintain the state of categories, widgets, and other UI-related states.

The 
dashboard
 state holds an array of categories, each with an ID, name, and an array of widgets.

The 
addWidget
 function is used to open a modal for adding a new widget to a category.

The 
addWidgetData
 function adds a new widget to the selected category.

The 
removeWidget
 function removes a widget from a specific category.

The 
searchWidgets
 function filters the widgets based on the search query.

The 
handleChakedChange
 function toggles the 
enabled
 state of a widget.

Category Component

This component is responsible for rendering each category and its widgets.

It receives the 
category
 data, 
addWidget
, and 
removeWidget
 functions as props from the 
Dashboard
 component.

UI Components

The code includes UI components for rendering the dashboard header, search input, and buttons.

It also includes a modal for adding new widgets, with tabs for each category and a form to enter the widget name and text.

State Management

The application uses the 
useState
 hook for managing the state of the dashboard, categories, widgets, and UI-related states.

When adding, removing, or updating widgets, the state is updated using the 
setDashboard
 function, which creates a new state object with the updated data.

Rendering

The 
Dashboard
 component renders the categories by mapping over the 
dashboard.categories
 array and passing the category data to the 
Category
 component.

The 
Category
 component is responsible for rendering the category name and its widgets.

Search Functionality

The application includes a search input field in the header.

When the user types in the search input, the 
searchWidgets
 function is called, which filters the widgets based on the search query and updates the 
dashboard
 state with the filtered categories and widgets.

Widget Enabling/Disabling

Each widget has an 
enabled
 state, which can be toggled using a checkbox.

The 
handleChakedChange
 function is responsible for updating the 
enabled
 state of a widget when the checkbox is clicked.


