let str = "F8 - Hoc lap trinh de di lam!";

console.log(str.charAt(0));
console.log(str.charAt(-1)); // ""
console.log(str.charAt(100)); // ""

console.log(str.indexOf("F")); // 0
console.log(str.indexOf("f")); // -1
console.log(str.indexOf("l", 10));
console.log(str[25]);
/**
 * indexOf("keyword", positionStart)
 * - Trả về vị trí của character tìm thấy khi và chỉ khi vị trí tìm thấy nằm trong khoảng từ positionStart đến length-1
 */

console.log(str.lastIndexOf("l"));
console.log(str.lastIndexOf("F8"));

/**
 * indexOf("keyword", positionEnd)
 * - Trả về vị trí của character tìm thấy khi và chỉ khi vị trí tìm thấy nằm trong khoảng từ 0 đến positionEnd
 */

console.log(str.includes("F8", 3));

let url = "https://fullstack.edu.vn/course/js-pro";

console.log(url.startsWith("https://fullstack.edu.vn"));
console.log(url.startsWith("https://fullstack.edu.vn", 10));

let str2 = "Hom nay ban the nao?";
console.log(str2.endsWith("?"));
