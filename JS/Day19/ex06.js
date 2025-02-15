const students = [{ name: "Minh", age: 18 }, { name: "Thang", age: 20 }, , { name: "Son", age: 24 }];

// console.log(`xin chao ban ${students[0]}`);
// console.log(`xin chao ban ${students[1]}`);
// console.log(`xin chao ban ${students[2]}`);
// console.log(`xin chao ban ${students[3]}`);
// console.log(`xin chao ban ${students[4]}`);

// for (let i = 0; i < students.length; i++) {
// 	console.log(`xin chao ban ${students[i]}`);
// }

// for (let i = 0; i < students.length; i++) {
// 	console.log(students[i]);
// }

// In ra infor bạn dưới 20 tuổi.

for (value of students) {
	if (value?.age < 20) {
		console.log(value);
	}
}
