const arr = [1, 2, 3, , , [4, , , , 5, [6, , , , 7, [8, , , 9]]]];

console.log(arr.flat(Infinity)); // default 1 level
console.log(arr.flat(2)); // default 1 level

console.log(arr.flat(0)); // Shallow copy
console.log(arr.flat("abc"));
console.log(arr.flat(0) === arr);

console.log(arr);

/**
 * flat(depth): làm phẳng mảng
 * - không thay đổi mảng ban đầu.
 * - depth: nhận giá trị nguyên dương, là cấp độ làm phẳng.
 * - depth default: Khi không truyền tham số thì sẽ làm phẳng ở cấp độ đầu tiên, depth = 1.
 * - Khi muốn làm phẳng hết toàn bộ, dùng value `Infinity`
 * - depth không hợp lệ (số âm, các kiểu dữ liệu không phải số) thì bị convert về 0.
 * - Muốn xoá bỏ phần tử empty ở mảng thưa thì có thể dùng flat.
 */
