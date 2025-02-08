const users = [
	{ id: 1, name: "Hoang" },
	{ id: 3, name: "Thang" },
	{ id: 2, name: "Dung" },
];

/**
 * Hiển thị danh sách người dùng sử dụng `ol`, `li` theo đúng thứ tự (thứ tự phụ thuộc vào id)
 */

users.sort((a, b) => a.id - b.id);

// Cach 1:
// let olElement = document.createElement("ol");

// users.forEach((item) => {
// 	let liElement = document.createElement("li");
// 	liElement.innerText = item.name;
// 	olElement.appendChild(liElement);
// });

// document.body.appendChild(olElement);

// Cach 2:
let content = `<ol>`;
users.forEach((item) => {
	content += `
    <li>${item.name}</li>
  `;
});
content += "</ol>";
document.body.innerHTML = content;
