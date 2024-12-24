/**
 * find()
 * findLast()
 * findIndex()
 * findLastIndex()
 * forEach()
 * map()
 *
 * ES6 với Array.
 */

const arr1 = [1, 2, 3, 4, 5, "Hoang", 6, 7, 8];

// const evenElement = arr1.find((item) => item % 2 === 0);
// console.log(evenElement);

// const element = arr1.find((item) => item > 100);
// const element1 = arr1.findLast(function (item) {
// 	return item > 3;
// });

// console.log(element);
// console.log(element1);

/**
 * find(callback)
 * - Trả về phần tử đầu tiên tìm thấy thoả mãn điều kiện.
 * - Nếu không tìm thấy -> undefined
 *
 * findLast(callback): tương tự find() nhưng nhận phần tử cuối cùng tìm được thoả mãn điều kiện.
 *
 * findIndex(): Trả về index của phần tử đầu tiên thoả mãn điều kiện.
 *
 * findLastIndex(): Trả về index của phần tử cuối cùng thoả mãn điều kiện.
 *
 * - Nếu ko tìm thấy phần tử thoả mãn điều kiện thì finđIndex, findLastIndex trả về -1
 *
 * includes(searchElement, fromIndex): Trả về giá trị boolean theo giá trị tìm kiếm.
 *  - fromInfex [optional]: vị trí bắt đầu tìm kiếm, nếu không có thì tìm từ đầu mảng.
 */

const index1 = arr1.findIndex((item) => item === "Dong");
console.log(index1);

const includesValue = arr1.includes("Hoang", 6);
console.log(includesValue);
