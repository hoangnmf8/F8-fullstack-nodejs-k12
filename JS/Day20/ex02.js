const users = ["Cong", "Minh", "Tue", "Son", "Thang", "Dung"];

/**
 * 1. Tạo mảng mới là mảng đảo ngược của mảng users
 */

const usersReverse = [];

for (let i = 0; i < users.length; i++) {
	usersReverse.unshift(users[i]);
}

const usersReverseC2 = [];
for (let i = users.length - 1; i >= 0; i--) {
	usersReverseC2.push(users[i]);
}

const lengthUsers = users.length;
const usersReverseC3 = [];
for (let i = 0; i < lengthUsers / 2; i++) {
	usersReverseC3[lengthUsers - i - 1] = users[i];
	usersReverseC3[i] = users[lengthUsers - i - 1];
}

console.log(usersReverse);
console.log(usersReverseC2);
console.log(usersReverseC3);
