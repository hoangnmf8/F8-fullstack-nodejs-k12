// console.log("1" + 1);
// console.log(1 + "1");
// console.log("10" / "5");
// console.log("10" * 2);
// console.log("F8" * 2);
// console.log(true + true + false);
// console.log(true + "F8");
// console.log(true + "8");

// Number
// console.log(Number(undefined));
// console.log(Number(null));
// console.log(Number(false));
// console.log(Number(true));
// console.log(Number("100"));
// console.log(Number("Hoang"));
// console.log(Number([]));
// console.log(Number(["Hoang"]));

console.log(String(undefined));
console.log(String(null));
console.log(String(false));
console.log(String(true));
console.log(String("100"));
console.log(String("Hoang"));
console.log(typeof String([]));
("");
console.log(String(["Hoang", 1, 100, null, undefined, true, false, NaN]));
console.log(String([{ id: 1, title: "San pham XYZ" }]));
console.log(String({ id: 1, title: "San pham XYZ" }));
// JSON = Javascript Object Notation

console.log([1, 2, 3] + [7, 8, 9]);
// Công, Minh: [1,2,3,7,8,9]
// Vinh: [8, 10, 12]
// Sơn, Thông: [array Array]

console.log([, , ,] + [7, 8, 9]);

// console.log([1, 2, ]); // Dấu phẩy ngăn cách phần tử cuối cùng của mảng bị lược bỏ và không tạo ra thêm một phần tử empty ở cuối.

let a = 10;
a = "Hoang";
