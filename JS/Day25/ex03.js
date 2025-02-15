/**
 * Cho mảng fruits.
 *
 * NHÓM CÁC PHẦN TỬ CÓ ĐẶC ĐIỂM CHUNG.
 * Đếm các loại trái cây xuất hiện nhiều lần và thống kê lại thành 1 object.
 *
 * LOẠI BỎ PHẦN TỬ TRÙNG LẶP
 * Tạo ra mảng fruitsRemoveDuplicated chỉ chứa các phần tử không trùng lặp của fruits
 */

// Input:
const fruits = ["apple", "banana", "orange", , , , , "kiwi", "orange", "apple", "kiwi", "apple"];

// Output:
// const fruitsCount = {
// 	apple: 3,
// 	banana: 1,
// 	orange: 2,
// 	kiwi: 2,
// };

const fruitsCount = fruits.reduce((acc, cur) => {
	console.log(acc);
	// Bước 1: kiểm tra nếu acc đã tồn tại key = cur
	if (!acc[cur]) {
		// Nếu chưa, tạo ra key cur với giá trị là 0
		acc[cur] = 0;
	}
	// Bước 2: Tăng cur lên 1
	acc[cur]++;
	return acc;
}, {});

console.log(fruitsCount);
