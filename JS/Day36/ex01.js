// Xử lý bất đồng bộ -> đồng bộ.

/**
 * 1. Callback.
 * 2. Promise.
 * 3. Async/await.
 */

function task1(callback) {
	console.log("task1 doing");
	setTimeout(() => {
		console.log("task1 done");
		callback();
	}, 3000);
}

function task2(callback) {
	console.log("task2 doing");
	setTimeout(() => {
		console.log("task2 done");
		callback();
	}, 2000);
}

function task3(callback) {
	console.log("task3 doing");
	setTimeout(() => {
		console.log("task3 done");
		callback();
	}, 2000);
}

task1(() =>
	task2(() =>
		task3(() => {
			console.log("All done"); // hell
		})
	)
);

const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr2 = newArr.map((item) => item * 2);

console.log(newArr2);
