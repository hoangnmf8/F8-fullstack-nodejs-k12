// const list = ["table", "clock", "television", "clock", "pen"];

// let result = list.indexOf("clock");
// let result2 = list.lastIndexOf("clock");
// console.log(result);
// console.log(result2);
// console.log(list);

/**
 * Những phương thức tìm kiếm, duyệt mảng, truy vấn thường không thay đổi mảng gốc: indexOf(), lastIndexOf(), find(), findIndex()...
 *
 * indexOf()
 * - trả về vị trị của phần tử đầu tiên tìm thấy
 * - nếu không tìm thấy phần tử thoả mãn thì trả về -1
 * - không thể tìm thấy NaN
 *
 */

const products = [
	{ id: 1, title: "Product A", price: 200 },
	{ id: 2, title: "Product B", price: "" },
	{ id: 3, title: "Product C", price: 200 },
];

/**
 * Tìm vị trí của phần tử đầu tiên có price không hợp lệ.
 * Price không hợp lệ là:
 * - Không có thuộc tính price.
 * - Thuộc tính price không phải là số nguyên dương.
 */

// console.log(products[1].price);

function validationProduct(product) {
	if (!product.price || typeof product.price !== "number" || product.price !== product.price || product.price < 0) {
		return false;
	}
	return true;
	// neu valid -> return true
	// neu invalid -> return false
}

for (let i = 0; i < products.length; i++) {
	if (!validationProduct(products[i])) {
		console.log(i);
	}
}

const list = [1, 2, 3, "F8", NaN, { fullname: "Nguyen Minh Hoang" }];

console.log(list.indexOf(NaN));
console.log(list.indexOf({ fullname: "Nguyen Minh Hoang" }));

console.log(list.includes("F8"));
console.log(list.includes("F88"));
console.log(list.includes(NaN));
console.log(list.includes({ fullname: "Nguyen Minh Hoang" }));

console.log(list.indexOf("F8", 4));
