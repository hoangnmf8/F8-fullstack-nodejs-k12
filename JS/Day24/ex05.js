/**
 * sort()
 * 2 cách dùng: có callback hoặc không có callback.
 * Cách dùng 1: sort()
 * - Trước khi sắp xếp thì chuyển đổi sang chuỗi và sắp xếp theo chuỗi.
 *
 * Cách dùng 2: sort(compareFn)
 *
 * - a - b < 0: sắp xếp tăng dần
 * - a - b > 0: sắp xếp giảm dần
 * - a - b = 0 hoặc giá trị không so sánh được thì giữ nguyên.
 * - Khi cần đổi chỗ thì return ra 1 số < 0.
 *
 */

// const arr1 = [5, 100, 3];
// const arr2 = ["Hoang", "Dung", "Duy", "Minh"];

// console.log(arr1.sort());
// console.log(arr1);
// console.log(arr2.sort());

// console.log(arr1.sort((a, b) => a - b));
// console.log(arr1.sort((a, b) => b - a));

// arr1.sort(function (a, b) {
// 	console.log(`gia tri cua a: ${a}, gia tri cua b: ${b}`);
// 	return a - b;
// });

const students = [
	{ id: 1, fullname: "Le Van Minh", age: 28, address: "NgheAn" },
	{ id: 2, fullname: "Hoang Quang Thang", age: 18, address: "VinhPhuc" },
	{ id: 6, fullname: "Nguyen Van Anh Cong", age: 22, address: "HaNoi" },
	{ id: 3, fullname: "Kieu Minh Tue", age: 21, address: "VinhPhuc" },
	{ id: 4, fullname: "Nguyen Van Cong", age: 18, address: "HaNoi" },
	{ id: 7, fullname: "Cong", age: 18, address: "HaNoi" },
	{ id: 5, fullname: "Nguyen Minh Cong", age: 18, address: "HaNoi" },
];

/**
 * 1. Sắp xếp danh sách học viên theo tuổi học viên tăng dần.
 * 2. Sắp xếp danh sách học viên theo tên, nếu tên trùng nhau, sắp xếp theo họ và tên đệm.
 *
 */

// Bài 2:
function sortbyName(data) {
	data.sort((a, b) => {
		let aFullnameArr = a.fullname.split(" ");
		let bFullnameArr = b.fullname.split(" ");
		// console.log(aFullnameArr, bFullnameArr);
		let aFirstName = aFullnameArr.pop();
		let bFirstName = bFullnameArr.pop();
		// console.log(aFirstName, bFirstName);

		// So sánh 2 firstName
		if (aFirstName < bFirstName) return -1;
		if (aFirstName > bFirstName) return 1;

		// Nếu firstName giống hệt nhau thì kiểm tra họ và tên đệm
		// console.log(aFullnameArr.join(" "));
		// console.log(bFullnameArr.join(" "));
		if (aFullnameArr.join(" ") < bFullnameArr.join(" ")) return -1;
	});
}

sortbyName(students);
console.table(students);
