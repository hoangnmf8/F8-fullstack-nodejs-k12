function calcBMI() {
	let weight = parseFloat(prompt("Nhap can nang (kg)"));
	let height = parseFloat(prompt("Nhap chieu cao (m)"));
	console.log(weight, height);
	if (weight !== weight || weight <= 0) {
		console.log("Can nang khong hop le!");
		return;
	}

	if (height !== height || height <= 0) {
		console.log("Chieu cao khong hop le!");
		return;
	}

	const BMI = weight / height ** 2;
	let content = "";
	// if (BMI < 18.5) {
	// 	content = "hoi gay";
	// } else if (BMI >= 18.5 && BMI < 23) {
	// 	content = "binh thuong";
	// } else if (BMI >= 23 && BMI < 25) {
	// 	content = "hoi beo";
	// } else {
	// 	content = "beo phi";
	// }

	switch (true) {
		case BMI < 18.5:
			content = "hoi gay";
			break;

		case BMI < 23:
			content = "binh thuong";
			break;

		case BMI < 25:
			content = "hoi beo";
			break;

		default:
			content = "beo phi";
	}

	console.log(`Chi so BMI cua ban la ${BMI}, ban ${content}`); // template string
}

// calcBMI();

let day = 1;

// day = 0 la ngay chu nhat, day = 1 thu 2
function printDay(day) {
	switch (day) {
		case 0:
			return "chu nhat";
		case 1:
			return "thu 2";
		case 2:
			return "thu 3";
		case 3:
			return "thu 4";
		case 4:
			return "thu 5";
		case 5:
			return "thu 6";
		default:
			return "thu 7";
	}
}

console.log(printDay(1));

/** Nhập vào tháng, in ra quý.
 * nhập vào 0 -> tháng 1 -> quý I
 * nhập vào 11 -> tháng 12 -> quý IV
 * nhập vào abc, 12, -1... không hợp lệ
 */

function printMonth(month) {
	switch (month) {
		case 0:
		case 1:
		case 2:
			return "Quy I";

		case 3:
		case 4:
		case 5:
			return "Quy II";

		case 6:
		case 7:
		case 8:
			return "Quy III";

		case 9:
		case 10:
		case 11:
			return "Quy I";

		default:
			return "Invalid!";
	}
}

const now = new Date();
console.log(now.getMonth());
console.log(now.getDay());
