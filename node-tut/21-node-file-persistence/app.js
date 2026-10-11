
// const fs = require('fs');

// const student = {
//   name: 'Asha',
//   marks: 90
// };

// fs.writeFileSync(
//   'students.json',
//   JSON.stringify([student], null, 2)
// );

// console.log('Student data saved successfully!');



// Read the saved data from the file
// const data = fs.readFileSync('students.json', 'utf8');

// console.log(data);


// read in the form of javascript not string -----------------------

// // Step 1: Read the file
// const data = fs.readFileSync('students.json', 'utf8');

// // Step 2: Convert JSON string into JavaScript data
// const students = JSON.parse(data);

// // Step 3: Access the student's details
// console.log(students);
// console.log(students[0].name);
// console.log(students[0].marks);


// add new student -----------------
// const fs = require('fs');

// // 1. Read existing data
// const data = fs.readFileSync('students.json', 'utf8');

// // 2. Convert JSON string into an array
// const students = JSON.parse(data);

// // 3. Create a new student
// const newStudent = {
//   name: 'Riya',
//   marks: 85
// };

// // 4. Add the student to the existing array
// students.push(newStudent);

// // 5. Save the updated array to the file
// fs.writeFileSync(
//   'students.json',
//   JSON.stringify(students, null, 2)
// );

// console.log('New student added successfully!');

// display all the students -----------------

// const fs = require('fs');

// // Read the file
// const data = fs.readFileSync('students.json', 'utf8');

// // Convert JSON into a JavaScript array
// const students = JSON.parse(data);

// // Display all students
// console.log('----- STUDENT RECORDS -----');

// students.forEach((student, index) => {
//   console.log(
//     `${index + 1}. Name: ${student.name} | Marks: ${student.marks}`
//   );
// });

// // Display total count
// console.log(`\nTotal students: ${students.length}`);

//search for a student-----------


const fs = require('fs');

// Read saved student records
const data = fs.readFileSync('students.json', 'utf8');
const students = JSON.parse(data);

// Name we want to search for
const searchName = 'Mayuri';

// Find the student
const student = students.find(
  (student) => student.name === searchName
);

// Display the result
if (student) {
  console.log('Student found!');
  console.log(`Name: ${student.name}`);
  console.log(`Marks: ${student.marks}`);
} else {
  console.log('Student not found!');
}


