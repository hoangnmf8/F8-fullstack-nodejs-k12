function LoginPage() {
	return /*html */ `
    <form id="loginForm">
			<h1>LOGIN</h1>
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

export default LoginPage;
