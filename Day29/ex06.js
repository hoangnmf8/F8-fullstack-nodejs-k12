// setTimeout(function () {
// 	console.log("Alo 1");
// }, 4000);

// setTimeout(function () {
// 	console.log("Alo 2");
// }, 0);

// setTimeout(function () {
// 	console.log("Alo 3");
// });

// console.log("Alo 4");

// setTimeout(() => {
// 	document.write("quang cao");
// }, 3000);

// setInterval(() => {
// 	console.log("hello");
// }, 1000);

/**
 * Xây dựng giao diện đồng hồ đếm ngược thời gian từ thời điểm hiện tại đến tết dương lịch 2026.
 */

setInterval(() => {
	// logic tinh toan thoi gian

	let dates;
	let hours;
	let minutes;
	let seconds;
	let content = `còn ${dates} ngày ${hours} giờ ${minutes} phút ${seconds} giây là đến tết 2026`;
	document.write(content);
	document.close();
}, 1000);

/**
 * Giải thuật 1: sau mỗi giây thì trừ content second--
 * Giải thuật 2: sau mỗi giây, tính toán lại toàn bộ dữ liệu thời gian
 */
