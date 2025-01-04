let str1 = "Hello!";

// console.log(str1.repeat(2));
// console.log(str1.repeat(2.7));
// console.log(str1.repeat(NaN));
// console.log(str1.repeat(null));
// console.log(str1.repeat(-1)); // error

// console.log(String.prototype);

console.log(str1.substring(1, 3));
console.log(str1.substring(1));
console.log(str1.substring(-1));
console.log(str1.substring(5, 2));

/**
 * substring(start, end)
 *
 * - nếu âm -> 0
 * - nếu > str.length -> length
 * - nếu start > end: Đảo ngược start và end
 */

console.log("-------");

/**
 * slice(start, end)
 *
 * - nếu âm -> đếm từ cuối chuỗi
 * - nếu start > end: chuỗi rỗng
 */

console.log(str1.slice(1, 3));
console.log(str1.slice(1));
console.log(str1.slice(-1));
console.log(str1.slice(5, 2));
console.log(str1.slice(NaN));

document.write(`<h1>title</h1>`);
document.write(`<b>title</b>`);
document.write("Xin chao moi nguoi, minh den tu <b>F8</b>");
