// Wrapper Object:
// Auto boxing: cơ chế tự động bọc các biến bởi object để sử dụng phương thức có sẵn từ function constructor của kiểu dữ liệu đó. Sau khi JS thực hiện xong phương thức thì Wrapper object tự được phá bỏ để dữ liệu trở về trạng thái ban đầu.

const myStr = "F8 - Hoc lap trinh"; // String
console.log(myStr.toUpperCase());
console.log(myStr);

console.log(String.prototype);

// null có hàm tạo riêng không?

// null và undefined không có hàm tạo riêng, không có phương thức.
console.log(typeof null);

console.log(typeof undefined);

let myStr2 = new String("Hello");
console.log(myStr2);
