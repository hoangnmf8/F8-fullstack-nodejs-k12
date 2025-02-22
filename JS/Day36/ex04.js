console.time("Nhanh nhat");
console.time("time-products");
console.time("time-category-list");
const fetch1 = () => {
	return fetch("https://dummyjson.com/products")
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			console.timeEnd("time-products");
		});
};

const fetch2 = () => {
	return fetch("https://dummyjson.com/products/category-list")
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			console.timeEnd("time-category-list");
		});
};

// Đua xem API nào trong số 2 API trên trả về nhanh hơn

Promise.race([fetch1(), fetch2()])
	.then(() => {
		console.timeEnd("Nhanh nhat");
	})
	.catch((error) => {
		console.log(error);
		console.timeEnd("Nhanh nhat");
	});
