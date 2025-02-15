const obj1 = {
	username: "hoangnm",
};

// Object literal
/**
 * Key: value
 * Key: là string hoặc symbol
 * Value: có thể nhận mọi loại dữ liệu: number, string, array, object, function, null,...
 * Value là function thì gọi là phương thức.
 * Có thể thêm, sửa, xoá các thuộc tính của object.
 * Có thể tạo mới 1 object với `new Object()`
 */

const userInfor = {
	fullname: "Nguyen Minh Hoang",
	address: "Bac Giang",
	learn: function (lesson, time) {
		console.log(`Toi hoc ${lesson} vao luc ${time}`);
	},
};

console.log(userInfor.fullname);
userInfor.learn("JS", "12h trưa nay");

const obj2 = new Object();
const obj3 = new Object({ title: "F8" });

console.log(obj2);

userInfor.age = 33;

console.log(userInfor);

userInfor.age = 34;

console.log(userInfor);

delete userInfor.age;

console.log(userInfor);

const newKey = "email";

userInfor[newKey] = "hoang@gmail.com";
console.log(userInfor);

userInfor["Sở thích"] = ["coding", "reading book"];
console.log(userInfor);

/**
 * Trong object: sử dụng dấu [] để khai báo key là chuỗi đặc biệt hoặc tham chiếu đến 1 biến.
 */

let title = "Tivi Samsung 64inch";
let price = 3000;
let year = 2021;

const product = { title, price, year };

// shorthand property: enhance object literal

console.log(product);
