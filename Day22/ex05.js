const product = {
	title: "san pham A",
	price: 200,
	description: "Mo ta san pham",
	stock: 2000,
	sku: "sp0123",
	size: "XL",
};

// const title = product.title;
// const price = product.price;
// const description = product.description;

const { title, price, ...other } = product;

// destructuring áp dụng với object và array
/**
 * rest parameter: là phần còn lại của object (array) khi destructuring
 * rest luông xuất hiện ở cuối khai báo trong cấu trúc destructuring
 */

console.log(price);
console.log(other);

/**
 * Spread Oparater
 * - Dùng để trải các phần tử (hoặc thuộc tính) của array (object) cũ vào một khai báo array (object) mới.
 * - Spread có thể dùng để shallow copy, gom (gộp) object, array.
 */

const productCopy = { color: "yellow", ...product, isFreeShip: true };
console.log(productCopy);

const infor1 = { a: 1, b: 2 };
const infor2 = { b: 3, d: 4 };
const infor3 = { ...infor1, ...infor2 };
console.log(infor3);

const newObj = new Object();

const newString = new String("F8");
console.log(typeof newString);
console.log(newString);
