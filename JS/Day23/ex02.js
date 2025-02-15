// const myStudents = ["Minh", "Tue", "Vinh", "Toan", "Hoang"];

// const result = myStudents.splice(1, Infinity, "F8", "Học lập trình");
// console.log(result);
// console.log(myStudents);

/**
 * splice(start, deleteCount, item1...itemN)
 * - Thay đổi mảng gốc.
 * - Nếu không truyền tham số -> cắt được mảng rỗng.
 * - Start: Vị trí bắt đầu cắt (nếu start âm -> đếm từ cuối mảng).
 *  - Nếu start < -array.length thì start -> 0
 * - deleteCount: Số lượng phần tử bị cắt - nhận giá trị nguyên dương, nếu là âm -> 0, nếu muốn cắt đến cuối mảng thì truyền Infinity
 * - item1...itemN: Các phần tử được thêm vào mảng ban đầu (bắt đầu từ vị trí start).
 */
// const arr1 = ["A", "B", "C", "D"];
// const arr2 = arr1.splice(-100);
// console.log(arr2);

const data = ["F8", undefined, 0, "Hoang", "Tue", 100, NaN, "Dong", ""];

/** Loại bỏ falsy values khỏi data */
/**
 * Bước 1: Xây dựng vòng lặp.
 * Bước 2: Kiểm tra phần tử thứ i có phải falsy value hay không? -> splice.
 * Bước 3:
 */

for (let i = 0; i < data.length; i++) {
	if (!data[i]) {
		console.log(`index = ${i}; value = ${data[i]}`);
		data.splice(i, 1);
		console.log(data);
		i--;
	}
}
