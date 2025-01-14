// const time1 = new Date();

// console.log(time1);
// console.log(typeof time1);
// let time2 = new Date("2024-01-01 00:00:00");
// console.log(time2);
// console.log(Date.now()); // Millisecond tính từ thời điểm 1/1/1970
// console.log(time2.getFullYear());
// console.log(time2.getMonth()); // 0-11
// console.log(time2.getDate());
// console.log(time2.getDay()); // 0-6
// console.log(time2.getHours());
// console.log(time2.getMinutes());
// console.log(time2.getSeconds());
// console.log(time2.getMilliseconds());
// console.log(time2.getTime() / (1000 * 60 * 60 * 24 * 365));
// console.log(time2.getUTCHours());

/**
 * 1. Tính số ngày bạn đã sống
 * 2. Tính số phút tính từ 00:00:00 ngày thứ 2 của tuần đến thời điểm hiện tại.
 * 3. Tính số giờ từ thời điểm hiện tại đến tết dương lịch 2026 (2026/01/01 00:00:00)
 *  */

/**
 * 1. Tính số ngày bạn đã sống
 * Bước 1: Tạo ra thời điểm sinh birthTime
 * Bước 2: Tạo ra thời điểm hiện tại currentTime
 * Bước 3: (currentTime - birthTime)/(1000*60*60*24)
 */

function printMinutes() {
	let time1 = Date.now();
	let time2 = new Date().setHours(0, 0, 0);
	let time3 = time1 - time2;
	console.log(time3);
	let getDay = new Date().getDay();
	let time4;
	if (getDay !== 0) {
		time4 = (getDay - 1) * 24 * 60 * 60 * 1000;
	} else {
		time4 = 7 * 24 * 60 * 60 * 1000;
	}
	let minutes = (time3 + time4) / (1000 * 60);
	console.log(minutes.toFixed());
}

printMinutes();
