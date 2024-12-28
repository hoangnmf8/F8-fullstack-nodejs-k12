function User(email, name, address) {
	this.email = email;
	this.name = name;
	this.address = address;

	this.hello1 = function () {
		console.log(`Xin chao, minh la ${this.name}, minh den tu ${this.address}`);
	};
}

User.prototype.hello2 = function () {
	console.log(`Xin chao lan 2, minh la ${this.name}, minh den tu ${this.address}`);
};

User.prototype.getInfor = function () {
	console.log("alo");
};

const hoang = new User("hoang@gmail.com", "Hoang Nguyen", "BG");

console.log(Object.getPrototypeOf(hoang)); // Nên dùng để kiểm tra
console.log(hoang.__proto__); // Không khuyến khích sử dụng

console.log(hoang.hasOwnProperty("name"));
console.log(hoang.hasOwnProperty("email"));
console.log(hoang.hasOwnProperty("hello1"));
console.log(hoang.hasOwnProperty("hello2"));
hoang.hello2();
console.log(Object.keys(hoang));
console.log(Object.values(hoang));
