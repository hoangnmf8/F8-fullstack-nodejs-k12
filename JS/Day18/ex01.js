console.log(3 > 2 && true);

console.log(false && true);

console.log(false && false);

console.log(0 && "Hoang" && "");

// error
// falsy values: 0, -0, "", undefined, null, NaN (Not a Number), false.
// falsy values >< truthy

console.log("Hoang" && "F8" && "Oanh");

/**
 * Toán tử AND (&&):
 * - Kiểm tra các vế của biểu thức từ trái qua phải.
 * - Dừng lại khi tìm thấy falsy value và gán giá trị falsy value cho kết quả cuối cùng của biểu thức.
 * - Nếu kiểm tra đến vế cuối cùng mà các giá trị đều truthy value thì gán vế cuối cùng cho kết quả.
 */

console.log("F8" && 10 && "Hoang" / 2 && undefined);
console.log(10 % 3 === 0 && undefined / 2);

console.log("F8" || "Cong" || undefined); // 'F8', 'F8'

/**
 * Toán tử OR (||):
 * - Kiểm tra các vế của biểu thức từ trái qua phải.
 * - Dừng kiểm tra kkhi tìm thấy truthy và gán gía trị truthy value cho kết quả cuối cùng của biểu thức.
 * - Nếu kiểm tra đến vế cuối cùng mà các giá trị đều falsy thì nhận luôn vế cuối cùng cho kết quả.
 */

console.log(false || "" || 0 || -0 || null || NaN || undefined);

console.log(false || (undefined && 0 && "F8"));

console.log(!!false);

console.log(!0);

console.log(!!"F8");

console.log(!!100);
