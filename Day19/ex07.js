const cart = [
	{ id: 1, title: "tivi xiaomi X", price: 10000000, quantity: 2 },
	{ id: 1, title: "Iphone promax 16", price: 30000000, quantity: 3 },
];

/** Tính tổng tiền của giỏ hàng*/

function calcPayment(cart) {
	let total = 0;
	for (value of cart) {
		// total += value.price * value.quantity;
		total = total + value.price * value.quantity;
	}
	return total;
}

document.write(`Tong gia tri don hang la: ${calcPayment(cart)} VND`);
