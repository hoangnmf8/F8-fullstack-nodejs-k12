console.log(Number.prototype);

// function MyNumber(number) {
//   EPSILON: 2.2204,
//   NaN: NaN,
//   isFinite: function() {
//   }
// }

// MyNumber.prototype.toExponential = function () {
// 	// logic
// };

// MyNumber.prototype.toFixed = function () {
// 	// logic
// };

// number -> auto boxing (Object Number) -> sử dụng phương thức -> sau khi thực hiện phương thức thì phá bỏ object wrapper.
let age = 20;
let age2 = new Number("123");
console.log(age.toFixed(2));
console.log(age2);

console.log(Number.NaN);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.EPSILON);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
console.log(100 / 0);
console.log(0);
console.log(-0);
console.log(-0 === 0);
