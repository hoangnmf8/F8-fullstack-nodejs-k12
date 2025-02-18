import { login } from "../../api/authApi";

function afterLogin() {
	// Buoc 1: Lay du lieu tu form
	const loginForm = document.getElementById("loginForm");
	loginForm.addEventListener("submit", function (event) {
		event.preventDefault();
		const user = Object.fromEntries(new FormData(loginForm));
		// Buoc 2: Gui du lieu di server
		const data = login(user);
		if (data.accessToken) {
			localStorage.setItem("accessToken", data.accessToken);
			localStorage.setItem("user", JSON.stringify(data.user));
		} else {
			// Xu ly that bai
		}
	});
}

export default afterLogin;
