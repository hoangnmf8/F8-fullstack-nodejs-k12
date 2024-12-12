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
	if (BMI < 18.5) {
		content = "hoi gay";
	} else if (BMI >= 18.5 && BMI < 23) {
		content = "binh thuong";
	} else if (BMI >= 23 && BMI < 25) {
		content = "hoi beo";
	} else {
		content = "beo phi";
	}

	console.log(`Chi so BMI cua ban la ${BMI}, ban ${content}`);
}

calcBMI();
