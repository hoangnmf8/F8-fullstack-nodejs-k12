/**
 * ES6 (2015) for array
 * destructuring
 *
 * rest:
 * - Phần còn lại của array là array, phần còn lại của object là object.
 * - rest luôn đứng ở cuối khai báo trong destructuring hoặc parameter khi sử dụng trong hàm.
 *
 * spread:
 * - Rải những phần tử của mảng cũ vào một khai báo mảng mới.
 * - Dùng khi nối mảng, thêm phần tử vào mảng copy, copy mảng (shallow copy).
 *
 */

const arr1 = [1, 2, 3, "F8"];
const arr2 = [4, 5, 6];

const [first, second, ...rest] = arr1;
console.log(first);
console.log(second);
console.log(rest);

const newArr = [...arr1, "Hoang", ...arr2];
const arr1Copy = [...arr1];

// next gen JavaScript
