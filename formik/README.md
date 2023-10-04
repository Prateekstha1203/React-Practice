Formik 
As a developer we have to :
    - Handle form data 
    - Validation
    - Visual feedback with error message
    - Form submission

Why formik

Formik is an open source library in react javascript eco system. It provide set of tools and utiliy to manage the form data , perform validation, submit form and provide visual feedback with error message



- The useformik hook takes an object as an argument. The argument are initial values, onSubmit and validate
- In initial state the input values are set to empty string and the onSubmit function is called when the form is submitted
- the submit function takes the values as an argument and logs the values to the console
- the validate function thakes the value as an agrument and then validate the form values.
- If the form values are valid the function return an empty object else it returns an object with the error message
- When the function return an object the properties name should be the same as the name attribute of the form input
- The value of the properties should be the error message to be displayed for that input