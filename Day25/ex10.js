// const obj1 = {};
// const obj2 = new Object();

const user = {
	name: "Hoang",
	sayHello() {
		console.log("Hello");
	},
};

const client = Object.create(user, {
	name: { value: "Nguyen Hoang", writable: true, enumerable: true, configurable: true },
	age: { value: 33, writable: false, enumerable: false, configurable: false },
	address: { value: "BG", enumerable: true },
	email: { value: "hoang@gmail.com" },
	sayGoodbye: {
		value: function () {
			console.log("Goodbye");
		},
	},
});
console.log(client);

console.log(client.name);
client.sayHello();
client.name = "F8";
client.age = 3;
console.log(client);
client.sayGoodbye();

client.email = "1@gmail.com";

for (let key in client) {
	console.log(`${key}: ${client[key]}`);
}

/**
 * Object.create(proto, propertiesObject)
 * proto:
 *   - proto là object muốn kế thừa thuộc tính, phương thức.
 *   - null: Tạo ra object không kế thừa gì cả, không có properties.
 *
 * propertiesObject:
 *   - một object chứa những thuộc tính, phương thức thêm vào cho object.create
 *   - value: giá trị của property (có thể là bất cứ kiểu dữ liệu nào)
 *   - writable: default value = false, có thể ghi lại được hay không.
 *   - enumerable: default value = false, có xuất hiện trong for...in không
 *   - configurable: default value = false, có thể đặt lại các thiết lập cho proprety đó hay không.
 *  */

// const nullObj = Object.create(null);
// const normalObj = {};
// console.log(nullObj);
// console.log(normalObj);

Object.defineProperty(client, "email", {
	writable: false,
	enumerable: false,
	configurable: true,
	value: "Tran Duy Hung",
});
console.log(client);

Object.defineProperties(client, {
	address: {
		// Cac thuoc tinh can thay doi
	},
	age: {
		// Cac thuoc tinh can thay doi
	},
});
