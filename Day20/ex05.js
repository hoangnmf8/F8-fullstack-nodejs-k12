const list = ["Xuan", "Ha", "Thu", "Dong"];

let myString = list.join(); // Default: nối các phần tử bởi dấu phẩy.
let myString1 = list.join("->");
console.log(myString);
console.log(myString1);

console.log(list.toString());

console.log(list.reverse());

// for (key in list) {
// 	console.log(key);
// }

let paragraph =
	"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum odio sit accusantium ducimus? Fuga animi ratione adipisci quia, aliquam ipsum accusantium sunt architecto veniam, maiores sed sapiente ducimus minima aliquid!";

/**
 * Biển đổi đoạn văn bằng cách thay toàn bộ dấu cách thành dấu "-"
 */

let myArr = paragraph.split(" ");

console.log(myArr.join("-"));

/** Bỏ hết dấu phẩy của đoạn văn. */

// áo bò nam -> slug: ao-bo-nam
const product = {
	name: "Đầm nữ ren abc",
	SKU: "CA-0123",
	categoryId: "CATE-145",
	slug: "dam-nu-ren-abc-ca-0123-cate-145",
};
