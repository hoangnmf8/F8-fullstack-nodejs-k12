console.log(Number.isNaN("123"));
console.log(Number.isNaN("abc"));
console.log(Number.isNaN(NaN));
console.log(Number.prototype);

/**
 * Number.isNaN(number) kiểm tra xem giá trị truyền vào có phải là NaN hay không?
 * isNaN() thực hiện ép kiểu ngầm định sang number nếu cần thiết trước khi kiểm tra.
 * */

console.log(isNaN("123")); // false
console.log(isNaN("abc")); // true
let num1 = 1234.56;
console.log(num1.toExponential(10)); // trả về dạng chuỗi: 1.23*10^2 - trả về chuỗi biểu diễn số dạng toán học

console.log(num1.toFixed(3)); // trả về dạng chuỗi, làm tròn đến số gần nhất và lấy n chữ số sau dấu "."

console.log(num1.toPrecision(6)); // trả về dạng chuỗi giới hạn số lượng ký tự biểu diễn (tính cả phần nguyên và phần thập phân)
console.log(num1.toString());
console.log((15).toString(16));
console.log((10).toString(2));
let num2 = new Number(123);
console.log((123).valueOf());
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 - 1);
console.log(90071992547401000n + 100n);
console.log(typeof (90071992547401000n + 100n));
let a = 123;
console.log(Number.isFinite(123.45));
console.log(Number.isFinite(Math.sqrt(2)));
console.log(Number.isFinite(Math.PI));
console.log(Number.isInteger(a));
console.log(Number.isSafeInteger(90071992547401000n));
