interface Adress {
    street: string,
    houseNumber: number;
    //... you could combine interfaces adress: Adress
}

interface StudentData {
    name: string,
    adress: string,
    matrikel: number,
    exmatriculated: boolean,
}

let student1: StudentData = {
    name: "Max Müller",
    adress: "Hauptstraße 5",
    matrikel: 123456,
    exmatriculated: false,
}

let student2: StudentData  = {
    name: "Martina Musterfrau",
    adress: "Musterstraße 42",
    matrikel: 654321,
    exmatriculated: true,
}

console.log(student1.adress);
student1.adress = "Am Graben 6";
console.log(student1.adress);

//first create the array, than fill it
let students: StudentData[] = [student1, student2];
console.log(students[0].matrikel);

function studentInfo(student: StudentData): void {
    console.log(student.name, "lives at", student.adress, "and has matrikel number", student.matrikel);
}

for (let i: number = 0; i < students.length; i++) {
    studentInfo(students[i]); 
}
