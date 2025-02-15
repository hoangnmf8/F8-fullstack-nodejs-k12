let content = "F8 - Hoc lap trinh";

// Tạo ra hàm trả về chuỗi đảo ngược của chuỗi truyền vào
// function strReverse(str) {}
// output: Hoang -> gnaoH
/**
 * Cách 1: Dùng mảng
 * Cách 2: Dùng for
 * Cách 3: Dùng đệ quy
 */

function strReverse(str) {
	// Buoc 1:
	let reversedStr = "";

	// Buoc 2:
	for (let i = str.length - 1; i >= 0; i--) {
		reversedStr += str[i];
	}

	// Buoc 3:
	return reversedStr;
}

console.log(strReverse(content));
