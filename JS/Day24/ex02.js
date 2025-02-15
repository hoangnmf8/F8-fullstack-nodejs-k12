/**
 * includes() - done
 * concat() -
 * filter() - done
 * some() - done
 * every() - done
 * flat()
 *
 * ES6 với Array.
 *
 * sort()
 * reduce()
 */

const arr1 = [1, 2, 3, 4, ["F8"]];
const arr2 = ["a", "b", "c", "d"];

console.log(arr1.concat(arr2, [100], ["x", "y", "z"], { title: "F8" }));

console.log(arr1);

const arr1Copy1 = [].concat(arr1);
const arr1Copy2 = arr1.concat();

console.log(arr1Copy1 === arr1);
console.log(arr1Copy2 === arr1);
arr1Copy1.push("AAA");
arr1Copy2.push("BBB");
console.log(arr1);

arr1Copy1[4][0] = "F88";

console.log(arr1);
console.log(arr1 === arr1Copy1); // false -  đây là 2 mảng khác nhau nhưng chỉ là bản sao nông.
console.log(arr1[4] === arr1Copy1[4]); // true - vì cùng trỏ đến 1 địa chỉ ô nhớ

const arr1DeepCopy = structuredClone(arr1); // Deep copy

arr1DeepCopy[4][0] = "F99";
console.log(arr1); // "F88" - không bị thay đổi

/**
 * Shallow copy
 * - concat()
 * - spread
 * - slice()
 *
 * Deep copy
 * - JSON: nhược điểm là không xử lý được phương thức và các giá trị đặc biệt.
 * - Dùng thư viện: lodash.
 * - structuredClone()
 */
