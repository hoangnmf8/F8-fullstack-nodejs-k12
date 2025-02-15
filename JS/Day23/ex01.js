/**
 * pop(): xoá ở cuối mảng
 * push(): thêm ở cuối mảng
 * shift(): bớt ở đầu mảng
 * unshift(): thêm ở đầu mảng
 * indexOf(): trả về index của phần tử,
 * join(): chuyển mảng thành chuỗi
 * reverse(): đảo ngược mảng.
 * slice(start, end):
 *
 */

const myStudents = ["Minh", "Tue", "Vinh", "Toan", "Hoang"];

const result = myStudents.slice(2, 3);
console.log(result);
console.log(myStudents);

const myStudentsCopy = myStudents.slice();
console.log(myStudentsCopy);
console.log(myStudentsCopy === myStudents);

/**
 * slice(start, end)
 * - Tạo mảng mới từ một phần của mảng cũ.
 * - Nếu start > end -> mảng rỗng.
 * - Nếu chỉ số âm thì đếm từ cuối mảng với index = -1
 */
