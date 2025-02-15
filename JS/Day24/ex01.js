/**
 * includes()
 * concat()
 * filter()
 * some()
 * every()
 *
 * ES6 với Array.
 *
 * flat()
 * sort()
 * reduce()
 */

const arr1 = [1, -9, 3, 4, 5, "Hoang", "F8", NaN];

console.log(arr1.includes(NaN));
console.log(arr1.find((item) => item === NaN));
console.log(arr1.findIndex((item) => item === "Hoang"));

const arrFilter = arr1.filter((item) => {
	return item % 2 === 1;
});

console.log(arrFilter);

const students = [
	{ id: 1, fullname: "Le Van Minh", age: 28, address: "NgheAn" },
	{ id: 2, fullname: "Hoang Quang Thang", age: 18, address: "VinhPhuc" },
	{ id: 3, fullname: "Kieu Minh Tue", age: 21, address: "VinhPhuc" },
	{ id: 4, fullname: "Nguyen Van Cong", age: 18, address: "HaNoi" },
];

/**
 * 1. Tạo mảng mới chỉ bao gồm những học viên > 18 tuổi
 *
 */

const filterResult = students.filter((item) => item.age > 18);
console.log(filterResult);

const someResult = students.some((item) => item.age > 20);
const someResultWithNaN = students.some((item) => item.age === NaN);
const everyResult = students.every((item) => item.age >= 18);
console.log(someResult);
console.log(someResultWithNaN);
console.log(everyResult);
console.log(NaN === NaN);
console.log(typeof NaN);
