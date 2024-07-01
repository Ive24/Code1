var student1 = {
    name: "Max Müller",
    adress: "Hauptstraße 5",
    matrikel: 123456,
    exmatriculated: false,
};
var student2 = {
    name: "Martina Musterfrau",
    adress: "Musterstraße 42",
    matrikel: 654321,
    exmatriculated: true,
};
console.log(student1.adress);
student1.adress = "Am Graben 6";
console.log(student1.adress);
//first create the array, than fill it
var students = [student1, student2];
console.log(students[0].matrikel);
function studentInfo(student) {
    console.log(student.name, "lives at", student.adress, "and has matrikel number", student.matrikel);
}
for (var i = 0; i < students.length; i++) {
    studentInfo(students[i]);
}
