function afterRegister() {
	// Buoc 1: Lay du lieu tu form
	const registerForm = document.getElementById("registerForm"); //null
	registerForm.addEventListener("submit", function (event) {
		event.preventDefault();
		const user = Object.fromEntries(new FormData(registerForm));
		console.log(user);
		// Buoc 2: Gui du lieu di server
		fetch("http://localhost:3000/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.accessToken) {
					router.navigate("/login");
				}
			})
			.catch((err) => console.log(err));
	});
}

export default afterRegister;
