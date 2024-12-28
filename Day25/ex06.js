class User {
	constructor(email, name, address) {
		this.email = email;
		this.name = name;
		this.address = address;

		this.hello = function () {
			console.log(`Xin chao, minh la ${this.name}, minh den tu ${this.address}`);
		};
	}
}

class Admin extends User {}
