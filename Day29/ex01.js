"use strict";

/**
 * Common JS = CJS
 * Module JS = MJS
 *  */

import { a, myInfor as data } from "./ex02.js";
import abc from "./ex02.js";

// a = 20; // Biến từ module không thay đổi.
console.log(a);
console.log(data);
abc();

for (let i = 0; i < 10; i++) {
	console.log(i);
}
