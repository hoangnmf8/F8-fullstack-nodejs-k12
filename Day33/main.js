/**
 * POST - Create
 * GET - Read
 * PUT - Update
 * DELETE - Delete
 *
 * = CRUD
 */

const registerForm = document.querySelector("#registerForm");
registerForm.addEventListener("submit", function (event) {
	// Bước 1: Lấy thông tin từ form
	event.preventDefault();
	const formData = new FormData(registerForm);
	const userInfor = Object.fromEntries(formData);
	console.log(userInfor);

	// Bước 2: Validation
	// Bước 3: Gửi dữ liệu lên server
	fetch("http://localhost:3000/register", {
		headers: {
			"Content-Type": "application/json",
		},
		method: "POST",
		body: JSON.stringify(userInfor),
	})
		.then((res) => res.json())
		.then((data) => {
			if (data.accessToken) {
				// Thong bao thanh cong
				// Chuyen sang trang dang nhap
				if (confirm("Dang ky thanh cong, dang nhap ngay?")) {
					location.href = "./login.html";
				}
			} else {
				alert(data);
				registerForm.reset();
				return;
			}
		})
		.catch((err) => console.log(err));
});

/**
 * Đăng ký: /register
 * Đăng nhập: /login
 *
 *
 */
