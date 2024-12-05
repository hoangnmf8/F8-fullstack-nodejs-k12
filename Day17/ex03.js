const studentListK12 = ["Minh", "Manh", "Thong", "Tue", "Son", "Vinh", "Dung", "Thang"];

console.log(studentListK12.length);

console.log(typeof studentListK12);
console.log(Array.isArray(studentListK12));
console.log(Array.isArray("Ahihi"));

console.log(Array.isArray([]));
console.log(studentListK12[0]);
console.log(studentListK12[1]);
console.log(studentListK12[10]);
console.log(studentListK12[-1]);
studentListK12[8] = undefined;
console.log(studentListK12);

studentListK12[20] = "Cong";
console.log(studentListK12);
console.log(studentListK12.length);

const myArray = [, , , , ,];
console.log(myArray);
