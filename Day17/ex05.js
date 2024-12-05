// console.log(10 % 3);
// console.log(10 % 5);

let a = 10;

console.log(a++);
a = a + 1;
console.log(a);

/**
 * Tiền tố: thay đổi giá trị trước sau đó thực hiện gán.
 * Hậu tố: gán trước sau đó thực hiện thay đổi giá trị.
 */

let x = 5;
console.log(--x);
console.log(x);

let b = 100;
console.log(b--);

let i = 20;
console.log(i++ + ++i - i-- - --i);
console.log(a + a * 2 - a / 3);

/**
 * Thứ tự thực hiện:
 * 1. Thực hiện tiền tố trước
 * 2. Thực hiện gán giá trị
 * 3. Thực hiện hậu tố
 * 4. Thực hiện luỹ thừa.
 * 5. Xử lý ngoặc
 * 5. Nhân, chia
 * 6. Cộng, trừ
 */
