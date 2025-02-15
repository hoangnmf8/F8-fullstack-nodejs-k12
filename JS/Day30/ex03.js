const products = [
	{ id: 1, title: "Samsung Galaxy 19", price: 2000, quantity: 2 },
	{ id: 2, title: "Oppo corolla X", price: 1200, quantity: 1 },
	{ id: 3, title: "Iphone 16 pro max", price: 2100, quantity: 3 },
];

/**
 * Xây dựng giao diện bảng sản phẩm với mỗi sản phẩm có thêm cột tổng giá trị theo từng sản phẩm.
 * Dòng cuối bảng tính tổng giá trị danh sách sản phẩm
 * Thực hiện tất cả bằng JavaScript
 */

let productListContent = "";
let total = 0;

products.forEach((item) => {
	productListContent += /*html*/ `
    <tr>
      <td>${item.id}</td>
      <td>${item.title}</td>
      <td>${item.price}</td>
      <td>${item.quantity}</td>
      <td>${item.price * item.quantity}</td>
    </tr>
`;
	total += item.price * item.quantity;
});

let content = /*html*/ `
<table>
  <thead>
    <tr key="">
      <td>ID</td>
      <td>Title</td>
      <td>Price</td>
      <td>Quantity</td>
      <td>Total cost</td>
    </tr>
  </thead>
  <tbody>
    ${productListContent}
  </tbody>
  <tfoot>
    <tr key="">
      <td colspan="4">Tong gia tri:</td>
      <td class="total">${total}</td>
    </tr>
  </tfoot>
</table>
`;

document.body.innerHTML = content;

document.getElementsByClassName("total")[0].style.backgroundColor = "red";
// border collapse

document.getElementsByTagName("table")[0].style.border = "2px solid blue";

let tdElements = document.querySelectorAll("td");

tdElements.forEach((item) => {
	item.style.border = "2px solid blue";
});

// borderCollapse
