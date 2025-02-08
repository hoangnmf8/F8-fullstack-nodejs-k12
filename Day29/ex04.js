// const infor = {
// 	email: "hoang@gmail.com",
// };
// let str = JSON.stringify(infor).toUpperCase();
// console.log(str);
// console.log(typeof str);

// console.log(JSON.parse(str));
// console.log(JSON.parse()); //error
// console.log(JSON.parse(null)); // null
// console.log(JSON.parse(undefined)); //error

// const datas = null;
// console.log(JSON.parse(datas || "{}"));

// stringify

console.log(JSON.stringify(NaN));
console.log(JSON.stringify(null));
console.log(JSON.stringify(undefined));
console.log(JSON.stringify(true));
console.log(JSON.stringify(""));
console.log(JSON.stringify(0));
console.log(JSON.stringify([]));
console.log(JSON.stringify(Infinity));

// console.log(JSON.parse(NaN)); // Error
console.log(JSON.parse(null));
// console.log(JSON.parse(undefined)); // Error
console.log(JSON.parse(true));
// console.log(JSON.parse("")); // Error
console.log(JSON.parse(0));
// console.log(JSON.parse([])); // Error
// console.log(JSON.parse(Infinity)); // Error

console.log("--------------");
const user = {
	fullname: "Nguyen Minh Hoang",
	address: undefined,
	greet() {
		console.log("hello");
	},
	now: new Date(),
};

console.log(JSON.parse(JSON.stringify(user)));

/**
 * Có thể sử dụng JSON để sao chép sâu (không có tính toàn vẹn dữ liệu với method và giá trị undefined).
 * Có thể dùng để khử phương thức, hoặc thuộc tính undefined
 */

console.log([1, 2, 3, , , , 9]);

console.log(JSON.stringify([1, 2, 3, , , , 9]));
console.log(JSON.parse(JSON.stringify([1, 2, 3, , , , 9])));

const chooseTheme = "dark-mode";
localStorage.setItem("theme", chooseTheme);

const cart = {
	userId: 123,
	products: [
		{ id: 1, title: "san pham A", price: 200 },
		{ id: 2, title: "san pham B", price: 200 },
	],
};

localStorage.setItem("cart", JSON.stringify(cart));
