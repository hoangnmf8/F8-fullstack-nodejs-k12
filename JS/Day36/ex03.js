const task1 = () =>
	new Promise((resolve, reject) => {
		console.log("task1 doing");
		setTimeout(() => {
			resolve("task1 done");
		}, 3000);
	});

const task2 = () =>
	new Promise((resolve, reject) => {
		console.log("task2 doing");
		setTimeout(() => {
			resolve("task2 done");
		}, 2000);
	});

const task3 = () =>
	new Promise((resolve, reject) => {
		console.log("task3 doing");
		setTimeout(() => {
			resolve("task3 done");
			// reject(new Error("task3 failed"));
		}, 1000);
	});

console.time("promise-all");
Promise.all([task1(), task2(), task3()])
	.then((result) => {
		console.log(result);
		console.log("All done");
		console.timeEnd("promise-all");
	})
	.catch((error) => {
		console.log(error);
		console.log(typeof error);
		console.log({ error });
		console.timeEnd("promise-all");
	});

console.time("promise-race");
Promise.race([task1(), task2(), task3()])
	.then((result) => {
		console.log(result);
		console.log("One of them done");
		console.timeEnd("promise-race");
	})
	.catch((error) => {
		console.log(error);
		console.timeEnd("promise-race");
	});
