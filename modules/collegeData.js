// Importing the built-in 'fs' module for file system operations
const fs = require('fs');
// Class representing the data structure with students and courses
class Data {
  constructor(students, courses) {
    this.students = students;
    this.courses = courses;
  }
}
// Variable to hold the initialized data collection, initially set to null
let dataCollection = null;
// Function to initialize the data collection from JSON files
function initialize() {
  return new Promise((resolve, reject) => {

// Reading 'students.json' file
    fs.readFile('./data/students.json', 'utf8', (err, studentDataFromFile) => {
      if (err) {
// Rejecting the promise if an error occurs while reading 'students.json'
        reject("Unable to read students.json");
        return;
      }
// Reading 'courses.json' file
      fs.readFile('./data/courses.json', 'utf8', (err, courseDataFromFile) => {
        if (err) {

// Rejecting the promise if an error occurs while reading 'courses.json'
          reject("Unable to read courses.json");
          return;
        }
// Creating a new Data instance with parsed JSON data
        dataCollection = new Data(
          JSON.parse(studentDataFromFile),
          JSON.parse(courseDataFromFile)
        );
// Resolving the promise with a success message
        resolve("Data initialization successful");
      });
    });
  });
}
// Function to retrieve all students from the data collection
function getAllStudents() {
  return new Promise((resolve, reject) => {
// Checking if dataCollection is initialized and contains students
    if (dataCollection && dataCollection.students.length > 0) {
// Resolving the promise with a success message and the number of students
      resolve(`Successfully retrieved ${dataCollection.students.length} students`);
    } else {
      reject("No results returned");
    }
  });
}
// Function to retrieve Teaching Assistants (TAs) from the data collection
function getTAs() {
  return new Promise((resolve, reject) => {
// Filtering students to find those with TA property set to true
    const TAs = dataCollection.students.filter(student => student.TA);
    if (TAs.length > 0) {
// Resolving the promise with a success message and the number of TAs
      resolve(`Successfully retrieved ${TAs.length} TAs`);
    } else {

// Rejecting the promise if no TAs are found
      reject("No results returned");
    }
  });
}
// Function to retrieve all courses from the data collection
function getCourses() {
  return new Promise((resolve, reject) => {

// Checking if dataCollection is initialized and contains courses
    if (dataCollection && dataCollection.courses.length > 0) {

// Resolving the promise with a success message and the number of courses
      resolve(`Successfully retrieved ${dataCollection.courses.length} courses`);
    } else {

// Rejecting the promise if no courses are found
      reject("No results returned");
    }
  });
}
// Exporting functions for external use
module.exports = {
  initialize,
  getAllStudents,
  getTAs,
  getCourses
};
