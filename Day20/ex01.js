const students = ["Minh", "Tue", "Son", "Thang"];

// console.log(students[0]);
// console.log(students.length);
// console.log(students[6]);
// students[7] = "Vinh";
// students[7] = "Cong";
// console.log(students);

// for (let i = 0; i < students.length; i++) {
// 	console.log(students[i]);
// }

// let content = "";
// for (value of students) {
// 	content = content + value + ", ";
// }

// console.log(content);

// console.log(students);

let result = students.unshift("Vinh", "Cong");
console.log(students);
console.log(result);

/**
 * unshift()
 * - Thêm phần tử vào đầu mảng.
 * - Thay đổi mảng gốc.
 * - Trả về độ dài mới của mảng.
 *
 * shift()
 * - Xoá 1 phần tử ở đầu mảng.
 * - Thay đổi mảng gốc.
 * - Trả về phần tử bị xoá.
 *
 * push()
 * - Thêm phần tử vào cuối mảng.
 * - Thay đổi mảng gốc.
 * - Trả về độ dài mới của mảng.
 *
 * pop()
 * - Xoá 1 phần tử ở cuối mảng.
 * - Thay đổi mảng gốc.
 * - Trả về phần tử bị xoá.
 */

console.log(students.shift());
console.log(students);

console.log(students.push("Dung", "Hoang", "Manh"));
console.log(students);

console.log(students.pop());
console.log(students);
