// for (let i = 0; i < 10; i++) {
// 	// block code
// 	console.log(`gia tri cua ${i}`);
// }

/**
 * For loop:
 * Bước 1: Khai báo giá trị khởi tạo của biến đếm (i)
 * Bước 2: Kiểm tra điều kiện thoát.
 * Bước 3: Thực hiện khối lệnh.
 * Bước 4: Cập nhật biến đếm (i)
 */

/** In ra các số nguyên tố từ 2 đến n.
 * Số nguyên tố là số chỉ chia hết cho 1 và chính nó.
 * -> Kiểm tra xem nó có chia hết cho số nào nhỏ hơn nó không? -> nếu có, thì đây ko phải số nguyên tố.
 *
 *
 */
function checkPrime(n) {
	for (let i = 2; i < n; i++) {
		// kiem tra xem n co phai so nguyen to khong?
		if (n % i === 0) {
			console.log(`gia tri n: ${n}, gia tri i: ${i}`);
			return false;
		}
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
