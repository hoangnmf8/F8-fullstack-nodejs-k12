// // "use strict";

// const userInfor = {
// 	fullname: "Nguyen Hoang",
// 	learn: function (lesson, time) {
// 		console.log(`${this.fullname} hoc ${lesson} luc ${time}`);
// 	},
// 	getName: function () {
// 		console.log(this.fullname);
// 	},
// };

// /**
//  * Từ khoá `this` trỏ đến chính object chứa từ khoá - nó có nghĩa là chính object này.
//  */

// userInfor.learn("JS", "toi nay");

// userInfor.getName();

const cart = {
	products: [
		{ id: 1, title: "san pham A", price: 200, quantity: 2 },
		{ id: 2, title: "san pham B", price: 300, quantity: 4 },
		{ id: 3, title: "san pham C", price: 230, quantity: 1 },
	],
	getTotal: function () {
		let total = 0;
		for (let value of this.products) {
			// console.log(value);
			// logic tính lại total
			total += value.price * value.quantity;
		}
		return total;
	},
};

console.log(cart.getTotal());
