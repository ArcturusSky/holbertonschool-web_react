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

// Taking the array, looping with a "forEach", row is typed as a Student
// display the wanted attribute.
studentList.forEach((row: Student) => {
    process.stdout.write(row.firstName + " ")
    console.log(row.location)
})