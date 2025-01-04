/**
 * Phương thức biến đổi chuỗi: toUpperCase(), toLowerCase(), trim(), replace(), replaceAll(), split().
 * Phương thức kiểm tra, duyệt chuỗi
 *  */

let str = "    F8 - Hoc code, code nhanh, code gioi    ";

console.log(str.toUpperCase());
console.log(str.toLowerCase());

/**
 * 1. Thay đổi để style
 * 2. Để tìm kiếm, duyệt mà không phân biệt hoa, thường
 *  */

console.log(str.trim()); // Bỏ khoảng trắng ở đầu và cuối.

console.log(str.replace("code", "lap trinh")); //thay thế keyword đầu tiên tìm thấy

console.log(str.replaceAll("code", "lap trinh"));

console.log(str.split()); // array co 1 phan tu duy nhat
console.log(str.split("")); // tach het.
console.log(str.length);

console.log(str.split(",", 2));
console.log(str.split(",", -100));
console.log(str.split(",", NaN));
console.log(str.split(",", "abc"));

/**
 * split(separator, limit)
 *
 * - separator: phần tử phân tách
 * - limit?: giới hạn số lượng phần tử của mảng kết quả.
 *  - Truyền 0 hoặc không hợp lệ -> mảng rỗng
 *  - Truyền số âm  -> default value
 */
