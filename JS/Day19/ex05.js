let i = 0;
for (;;) {
	if (i >= 10) {
		break;
	}
	console.log(i);
	i++;
}

/**
 * For loop:
 * Bước 1: Khai báo giá trị khởi tạo của biến đếm (i)
 * Bước 2: Kiểm tra điều kiện thoát vòng lặp.
 * Bước 3: Thực hiện khối lệnh.
 * Bước 4: Cập nhật biến đếm (i)
 */

let j = 0;
total = 0;
while (j <= 100) {
	// tinh tong cac so chan tu 0 den 100
	if (j % 2 === 0) {
		console.log(`Gia tri cua j: ${j}`);
		total += j;
	}
	j++;
}
console.log(total);

// Viết lại hàm in ra số nguyên tố, bắt buộc dùng while

function checkPrime(n) {
	// for (let i = 2; i < n; i++) {
	// 	if (n % i === 0) {
	// 		console.log(`gia tri n: ${n}, gia tri i: ${i}`);
	// 		return false;
	// 	}
	// }
	// return true;
	let i = 2;
	while (i < n) {
		if (n % i === 0) {
			console.log(`gia tri n: ${n}, gia tri i: ${i}`);
			return false;
		}
		i++;
	}
	return true;
}

function printPrime(n) {
	// Bỏ qua validation
	for (let i = 2; i <= n; i++) {
		checkPrime(i) && console.log(i);
	}
}

printPrime(10);

/**
 * while loop:
 * - thường được dùng khi chưa biết rõ số lần lặp.
 * - biến đếm được viết trước vòng lặp.
 * - kiểm tra điều kiện -> thực hiện code nếu điều kiện đúng. (lưu ý: trong khối code thì phải thay đổi giá trị biến đếm tránh rơi vào vòng lặp vô tận.)
 */

let index = 10;
do {
	// thực hiện 1 lần trước, kể cả khi điều kiện sai
	console.log(index);
	index++;
} while (index <= 5);
