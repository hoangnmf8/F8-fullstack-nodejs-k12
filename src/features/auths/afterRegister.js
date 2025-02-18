import { register } from "../../api/authApi";

function afterRegister() {
	// Buoc 1: Lay du lieu tu form
	const registerForm = document.getElementById("registerForm"); //null
	registerForm.addEventListener("submit", function (event) {
		event.preventDefault();
		const user = Object.fromEntries(new FormData(registerForm));
		console.log(user);
		// Buoc 2: Gui du lieu di server
		const data = register(user);
		if (data.accessToken) {
			router.navigate("/login");
		}
	});
}

export default afterRegister;
