const Cart = {
	products: [
		{ id: 1, title: "Product A", quantity: 2, price: 200 },
		{ id: 2, title: "Product B", quantity: 1, price: 300 },
		{ id: 3, title: "Product C", quantity: 4, price: 240 },
	],
	userId: "123",
	getTotal: function () {
		let total = 0;
		console.log(this.products);
		// logic tinh tien.
		return total;
	},
};

function Cart(products, userId) {
	this.products = products;
	this.userId = userId;
}

Cart.prototype.getTotal = function () {
	// logic tinh tien
	// reuturn
};

const products = [
	{ id: 1, title: "Product A", quantity: 2, price: 200 },
	{ id: 2, title: "Product B", quantity: 1, price: 300 },
	{ id: 3, title: "Product C", quantity: 4, price: 240 },
];

const cartOfHoang = new Cart(products, "123");
const cartOfThang = new Cart([{ id: 5, title: "tomato", price: 1, quantity: 4 }], "456");
console.log(cartOfHoang.getTotal());
console.log(cartOfThang.getTotal());
