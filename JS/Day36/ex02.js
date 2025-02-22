const fetch = () =>
	new Promise((resolve, reject) => {
		console.log("fetching data");
		setTimeout(() => {
			resolve("data fetched");
		}, 3000);
	});

const task2 = () =>
	new Promise((resolve, reject) => {
		console.log("chuyển đổi dữ liệu");
		setTimeout(() => {
			resolve("chuyển đổi dữ liệu xong");
		}, 2000);
	});

const task3 = () => console.log("show dữ liệu ra màn hình");

console.time("promise");
fetch()
	.then((result) => {
		console.log(result);
		return task2();
	})
	.then((result) => {
		console.log(result);
		task3();
	})
	.catch((error) => {
		console.log(error);
	})
	.finally(() => {
		console.log("Finally!");
		console.timeEnd("promise");
	});

// promise chaining

console.log({ Promise });
