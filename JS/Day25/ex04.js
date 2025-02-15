// constructor function (hàm khởi tạo)

/**
 * String -> string
 * Number -> number
 * Boolean -> boolean
 * Array -> array
 * Object -> Object
 * Date -> Datetime
 * ...
 */

let myStr = new String("Alo");
console.log(myStr);
console.log(typeof myStr);
console.log(typeof myStr.valueOf());

// template
function BookA(title, author, year) {
	this.title = title;
	this.author = author;
	this.year = year;
}

class BookB {
	constructor(title, author, year) {
		this.title = title;
		this.author = author;
		this.year = year;
	}
}

const myBook1 = new BookA("Hoc JS khong kho", "hoangnm", 2025);
const myBook2 = new BookB("Hoc JS khong kho", "hoangnm", 2025);

console.log(myBook1);
console.log(myBook2);

/**
 * Không lạm dụng built-in function constructor vì:
 * - Không phản ánh đúng kiểu dữ liệu.
 * - Dài dòng không cần thiết
 * - Lãng phí bộ nhớ
 * - Giảm hiệu suất
 */
