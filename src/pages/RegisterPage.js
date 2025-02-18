import { router } from "../../main";

function RegisterPage() {
	setTimeout(() => {}, 0);

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
