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
	email: { value: "hoang@gmail.com", enumerable: true },
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
 *  */

// const nullObj = Object.create(null);
// const normalObj = {};
// console.log(nullObj);
// console.log(normalObj);

Object.defineProperty(client, "name", {
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
