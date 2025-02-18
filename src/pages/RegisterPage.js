function RegisterPage() {
	// Buoc 1: Lay du lieu tu form
	const registerForm = document.getElementById("registerForm");
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
					location.href = "./login.html";
				}
			})
			.catch((err) => console.log(err));
	});

	return /*html*/ `
    <form id="registerForm">
			<div class="mb-3">
				<label class="form-label" for="email">Email</label>
				<input class="form-control" type="email" name="email" />
			</div>

			<div class="mb-3">
				<label class="form-label" for="password">Password</label>
				<input class="form-control" type="password" name="password" />
			</div>

			<div class="mb-3">
				<button class="btn btn-primary w-100">Register</button>
			</div>
		</form>
`;
}

export default RegisterPage;
