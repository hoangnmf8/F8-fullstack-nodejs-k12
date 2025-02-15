let username = "hoangf8";
let age = 32;
let email = "hoangnm@fullstack.edu.vn";
let isMarried = true; // boolean: true, false.

console.log(typeof username);
console.log(typeof age);
console.log(typeof isMarried);
const myBigInt = 10000000000000000000n;
console.log(typeof myBigInt); // Số nguyên lớn.

const myInfor = {
	username: "hoangf8",
	age: 32,
	email,
	isMarried,
	phoneNumber: "034567890",
};

console.log(myInfor);
console.table(myInfor);
console.log(typeof myInfor);

myInfor.major = "Dev";
myInfor.major = "Teacher";
console.log(myInfor);

console.log(myInfor.phoneNumber.length);

let paragraph = "hello, minh la giang vien o F8";
console.log(paragraph.length);
