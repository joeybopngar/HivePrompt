# HivePrompt
Dropdown Component

The first step for running this react app is to cd into the dropdown folder and execute the command “npm install”

Next a user should run the command “npm start” in order to start the application in their local web browser.

The Dropdown component (located in src > App.js) that I have created takes in 3 props. “default” which allows the user to provide a place holder if no value is selected from the dropdown menu. “multi” which is a Boolean value. This lets the component know whether or not is should be configured for multiple selections. And lastly, “selections” which provides a list of menu items that will be available for selection in the components drop down menu

(Side Note): If you choose to use the Multi selection functionality, make sure you include the label value pair {value:"Select All", label: "Select All"} in your selections list, as the component will only recognize the select all functionality with this label and value.

Best user experience in Full screen.

