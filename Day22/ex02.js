const product = { title: "san pham A", price: 200, description: "Thong tin chi tiet abc..." };

// for (key in product) {
// 	console.log(`Giá trị của ${key} là ${product[key]}`);
// }

// for (item of product) {
// 	console.log(item);
// } // sai
// for...of chỉ áp dụng với array.

// console.log(product.length); // Object không có thuộc tính length.

// console.log(Object.keys(product));
// console.log(Object.values(product));
// console.log(Object.entries(product));

const arrInfor = [
	["fullname", "hoangnm"],
	["age", 32],
	["address", "HN"],
];

//Output:
// const objInfor = {
// 	fullname: "hoangnm",
// 	age: 32,
// 	address: "HN",
// };

// Cach 1:
const objInfor = {};
for (value of arrInfor) {
	objInfor[value[0]] = value[1];
}

// Cach 2:
// for (let i = 0; i < arrInfor.length; i++) {
// 	objInfor[arrInfor[i][0]] = arrInfor[i][1];
// }

console.log(objInfor);

const cart = {
	products: [
		{ id: 1, title: "san pham A", price: 200, quantity: 2 },
		{ id: 2, title: "san pham B", price: 300, quantity: 4 },
		{ id: 3, title: "san pham C", price: 230, quantity: 1 },
	],
	getTotal: function () {
		// Viết phương thức tính tổng đơn hàng ở đây
	},

	updateProduct: function (id, quantity) {
		//  Xây dựng phương thức cập nhật số lượng của sản phẩm theo id sản phẩm.
	},

	removeProduct: function (id) {
		// Xây dựng phương thức xoá sản phẩm khỏi giỏ hàng (gợi ý, sử dụng splice hoặc filter)
	},
};
