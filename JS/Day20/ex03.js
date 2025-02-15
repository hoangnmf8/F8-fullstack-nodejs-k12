// Input:

const users = [
	{ id: 1, username: "Minh", address: "NgheAn" },
	{ id: 2, username: "Tue", address: "VinhPhuc" },
	{ id: 3, username: "Son", address: "HaNoi" },
	{ id: 4, username: "Cong", address: "HaNoi" },
	{ id: 5, username: "Toan", address: "HaNam" },
	{ id: 6, username: "Giang", address: "HaNoi" },
];

// Output:

// const usersGroupByAddress = {
// 	NgheAn: [{ id: 1, username: "Minh", address: "NgheAn" }],
// 	VinhPhuc: [{ id: 2, username: "Tue", address: "VinhPhuc" }],
// 	HaNoi: [
// 		{ id: 3, username: "Son", address: "HaNoi" },
// 		{ id: 4, username: "Cong", address: "HaNoi" },
// 		{ id: 6, username: "Giang", address: "HaNoi" },
// 	],
// 	HaNam: [{ id: 5, username: "Toan", address: "HaNam" }],
// };

const usersGroupByAddress = {};

for (value of users) {
	if (!usersGroupByAddress[value.address]) {
		usersGroupByAddress[value.address] = [];
	}
	usersGroupByAddress[value.address].push(value);
}

console.log(usersGroupByAddress);

const students = [
	{ id: 1, username: "Son", score: 8 },
	{ id: 2, username: "Dung", score: 5 },
	{ id: 3, username: "Minh", score: 2 },
];

/**
 * - Tìm bạn cao điểm nhất
 * - Tìm bạn thấp điểm nhất
 * - Tính điểm trung bình cả lớp
 */

let highest = students[0];
let lowest = students[0];
let total = students[0].score;
for (let i = 1; i < students.length; i++) {
	if (students[i].score > highest.score) {
		highest = students[i];
	}
	if (students[i].score < lowest.score) {
		lowest = students[i];
	}
	total += students[i].score;
}

let avgScore = total / students.length;

console.log(`nguoi diem cao nhat: ${highest.username}`);
console.log(`nguoi diem thap nhat: ${lowest.username}`);
console.log(`diem trung binh: ${avgScore}`);

/**
 * Bước 1: Khởi tạo biến caoNhat = 0,
 * Bước 2: Tạo vòng lặp
 * Bước 3: Ông nào điểm cao hơn ông điểm cao nhất thì gán thành caoNhat.
 */
