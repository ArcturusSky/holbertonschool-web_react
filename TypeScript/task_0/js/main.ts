// Creating an interface (kinda like a class in Python)
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Initiation two instance of the Student interface ("class")
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    location: "Paris"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    location: "Paris"
};

// Storing the two students in an array while typing the type of the elements inside
const studentList: Student[] = [student1, student2]

// Going back to vanilla Javascript to render HTML elements:
// remember theses are standard "balises" or tags.

// Retrieving html body to use it
const body = document.body;

// Creating main elements
const table = document.createElement('table'); // a table
const tableHead = document.createElement('thead'); // place for its header
const tableBody = document.createElement('tbody'); // place for its insise

// Creating Header of the table
const headerRow = document.createElement('tr');
const firstNameHeader = document.createElement('th');
firstNameHeader.textContent = "Firstname";
const locationHeader = document.createElement('th');
locationHeader.textContent = "Location";
// Assemblying it
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
tableHead.appendChild(headerRow);

// Taking the array, looping with a "forEach", student (typed as "Student" structure)
// Create a new row for a new student
// Create a new cell for the firstname, adding the firstname of the current student
// Create a new cell for the location, adding the location of the current student
// Appending the cells into the new row and the row into the tablebody
studentList.forEach((student: Student) => {
    const row = document.createElement('tr');
    const firstNameCase = document.createElement('td');
    firstNameCase.textContent = student.firstName;
    const locationCase = document.createElement('td');
    locationCase.textContent = student.location;
    row.appendChild(firstNameCase);
    row.appendChild(locationCase);
    tableBody.appendChild(row);
});

// Assemblying everything
table.appendChild(tableHead);
table.appendChild(tableBody);
body.appendChild(table);
