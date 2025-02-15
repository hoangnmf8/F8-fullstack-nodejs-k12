const arr1 = [1, 2, 3, 4, 5];

let total = 0;
for (let i = 0; i < arr1.length; i++) {
	total += arr1[i];
}
console.log(total);

let total2 = arr1.reduce((accumulator, currentValue, index, arr) => {
	console.log(`accumulator: ${accumulator}`);
	console.log(`currentValue: ${currentValue}`);
	console.log(`index: ${index}`);
	console.log(`arr: ${arr}`);
	accumulator += currentValue;
	return accumulator;
}, 100);

// Lan 1:  0 + 1 =  1
// Lan 2: 1 + 2 = 3
// Lan 3: 3 + 3 = 6
// Lan 4: 6 + 4 = 10
// Lan 5: 10 + 5 = 15
console.log(total2);

/**
 * Cho mảng các số nguyên dương, tính tích các phần tử là số nguyên tố trong mảng.
 */

const arr2 = [2, 3, 4, 5, 6, 7, 8, 9, 11];

function checkPrimeNumber(n) {
	for (let i = 2; i < Math.sqrt(n); i++) {
		if (n % i === 0) return false;
		return true;
	}
	// neu n la so nguyen to = true
}

let result = arr2.reduce((acc, cur) => {
	// Bước 1: Kiểm tra xem cur có phải số nguyên tố không.

	if (checkPrimeNumber(cur)) {
	}
	// Bước 2: Nếu nó là số nguyên tố thì acc *= cur
	// Nếu không phải số nguyên tố thì bỏ qua
	// Bước 3: return acc
}, 1);
