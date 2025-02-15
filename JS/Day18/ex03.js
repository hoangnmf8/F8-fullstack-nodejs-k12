// function sum(a, b) {
// 	let result = a + b;
// 	return result;
// 	console.log("hello");
// }

/**
 * Declaration function: Hàm khai báo với từ khoá function, có đầy đủ tên khi khai báo.
 * Expression function: Hàm được gán cho biến, .v.v
 * Anonymous function: Hàm ẩn danh.
 * Callback function: Là hàm được truyền vào hàm khác như một đối số.
 */

// function welcome(username = "") {
// 	console.log(`Xin chao ban ${username}`);
// }

// welcome("Duy");
// welcome("Thang");

// const sum = function (a, b) {
// 	return a + b;
// };

// console.log(sum(2, 4));

// const cart = {
// 	userId: "123",
// 	products: [],
// 	total: function () {
// 		// logic tính toán tổng giá trị đơn hàng.
// 	},
// 	// Phương thức
// };

// cart.total();

// setTimeout(console.log("Xin chao"), 1000);
// setTimeout(function () {
// 	console.log("Xin chao");
// }, 1000);

// setTimeout(callback, [ms]);

function taskA() {
	console.log("Mua nha");
}
function kiemTien(callback) {
	console.log("Kiem du tien");
	callback();
}
// function muaXe() {
// 	console.log("Mua xe");
// }

// kiemTien(taskA);
kiemTien(function () {
	taskA();
});

// Callback function: Là hàm được truyền vào hàm khác như một đối số.
