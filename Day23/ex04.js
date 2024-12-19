// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const arr2 = arr1.filter((item) => item % 2 === 0);
// console.log(arr2);

const products = [
	{ id: 1, title: "san pham A", price: 200, quantity: 2, discount: 0.2 },
	{ id: 2, title: "san pham B", price: 200, quantity: 1, discount: 0.1 },
	{ id: 3, title: "san pham C", price: 200, quantity: 3, discount: 0.05 },
	{ id: 4, title: "san pham D", price: 200, quantity: 2, discount: 0.35 },
];

/** Tạo hotSaleProducts là danh sách sản phẩm có khuyến mại từ đủ 20% */

// const hotSaleProducts = products.filter((item) => item.discount >= 0.2);

// console.log(hotSaleProducts);

/** pay = price*quantity*(1-discount) */
// let total = 0;
// products.forEach((item) => {
// 	total += item.price * item.quantity * (1 - item.discount);
// });
// console.log(total);

// const getProductsName = products.map((item) => item.title);
// console.log(getProductsName);

/** Dùng phương thức map tạo ra mảng mới với mỗi sản phẩm, thêm thuộc tính amount là số tiền phải trả của từng loại sản phẩm. */

const newProducts = products.map((item) => {
	// Tìm cách để tạo ra bản sao của item, sau đó thay đổi trên bản sao.
	item.amount = item.price * item.quantity * (1 - item.discount);
	return item;
});

console.log(newProducts);
console.log(products);
