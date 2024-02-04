/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Julius Ugwu Student ID:120796230 Date: 03-02-2024
*
********************************************************************************/

// Importing the collegeData module
const collegeData = require('./modules/collegeData');

// Initializing the collegeData module and chaining asynchronous operations
collegeData.initialize()
  .then((message) => {

// Logging a success message after successful initialization
    console.log(message);

// Calling the getAllStudents function after initialization
    return collegeData.getAllStudents();
  })
  .then((message) => {
// Logging the message returned by getAllStudents function
    console.log(message);

// Calling the getCourses function after getting all students
    return collegeData.getCourses();
  })
  .then((message) => {

// Logging the message returned by getCourses function
    console.log(message);

// Calling the getTAs function after getting all courses
    return collegeData.getTAs();
  })
  .then((message) => 
  
// Logging the message returned by getTAs function
  console.log(message))

 // Handling errors in case any of the promises are rejected
  .catch((error) => console.error(error));

