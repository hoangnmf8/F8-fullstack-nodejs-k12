/**
 * Viết hàm vẽ tam giác vuông cân với ký tự character và có cạnh góc vuông là n ký tự  */

function printTriangle(n, character) {
	let text = "";
	for (let i = 1; i <= n; i++) {
		text += character;
		console.log(text);
	}
}

printTriangle(5, "#");

/**
 * $
 * $$
 * $$$
 * $$$$
 * $$$$$
 */
