function User(email, name, address) {
	this.email = email;
	this.name = name;
	this.address = address;

	this.hello = function () {
		console.log(`Xin chao, minh la ${this.name}, minh den tu ${this.address}`);
	};
}

User.prototype.getInfor = function () {
	console.log(`name: ${this.name}, address: ${this.address}, email: ${this.email}`);
};

const hoang = new User("hoang@gmail.com", "Hoang Nguyen", "Bac Giang");
const thang = new User("thang@gmail.com", "Hoang Quang Thang", "Vinh Phuc");
// thang.hello = function( ) {}
console.log(hoang);
hoang.hello();
hoang.getInfor();

console.log(hoang.hello === thang.hello); // false
console.log(hoang.getInfor === thang.getInfor); // true

/**
 * Dùng prototype khi nào:
 * - Khi muốn tạo ra những phương thức, thuộc tính dùng chung.
 * - Dễ dàng kiểm soát hàng loạt
 * - Tối ưu bộ nhớ
 *
 * Khai báo phương thức, thuộc tính trong constructor function khi nào:
 * - Dùng khi muốn tách biệt các đối tượng tạo ra.
 * - Có thể ghi đè thuộc tính, phương thức mới cho từng đối tượng cụ thể.
 * - Tốn bộ nhớ.
 */
