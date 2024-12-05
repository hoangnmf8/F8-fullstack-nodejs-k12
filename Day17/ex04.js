function sum(a, b) {
	let result = a + b;
	// console.log(result);
	return result;
	console.log("Xin chao");
}

sum(10, 20);
sum(2, 3);
sum(100, 200);
console.log(sum(15, 20));

const result = sum(2, 3);
console.log(result);

/**
 * 1. function là một công việc cụ thể có tính tái sử dụng cao.
 * 2. function có tính đóng gói.
 * 3. Dùng từ khoá return trong hàm để trả về kết quả.
 * 4. Hàm không return thì kết quả trả về là undefined.
 * 5. Code sau lệnh return không được thực thi.
 */

/**
 * 1. Viết hàm tính chu vi hình chữ nhật có các cạnh là a, b.
 * 2. Viết hàm tính tính diện tích hình chữ nhật có các cạnh là a, b.
 * 3. Viết hàm tính diện tích hình chữ tròn có bán kính r, chấp nhận Pi ~ 3.14. (Pi * r * r)
 */

function circOfRectangle(a, b) {
	return (a + b) * 2;
}
function areaOfRectangle(a, b) {
	return a * b;
}
function areaCircle(r) {
	return 3.14 * r * r;
}

console.log(circOfRectangle(4, 6));
console.log(areaOfRectangle(10, 10));
console.log(areaCircle(5));

// window.alert("Xin chao!");
// console.log("code");
// let confirmValue = window.confirm("Lam vk anh nhe!");
// console.log(confirmValue);

// let promptValue = window.prompt("Ten ban la gi?");
// console.log(promptValue);

let width = +window.prompt("Nhap vao chieu rong?");
let height = +window.prompt("Nhap vao chieu cao?");
console.log(typeof width, typeof height);

console.log("4" + "6");
console.log("46" * 2);

console.log(typeof +"33");
alert("Chu vi hinh chu nhat la: " + circOfRectangle(width, height));
