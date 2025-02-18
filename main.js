import Navigo from "navigo";
import "./style.css";
import HomePage from "./src/pages/HomePage";
import LoginPage from "./src/pages/LoginPage";
import NotFoundPage from "./src/pages/NotFoundPage";
import RegisterPage from "./src/pages/RegisterPage";

const app = document.querySelector("#app");

export const router = new Navigo("/", { linksSelector: "a" });

function render(content) {
	app.innerHTML = content();
}

router
	.on({
		"/": () => render(HomePage),
		"/login": () => render(LoginPage),
		"/register": () => render(RegisterPage),
	})
	.notFound(() => render(NotFoundPage));

// -> SPA = Single Page App >< MPA = Multi Page App
router.resolve();

// "/login" = http://localhost:5173/login
// "/register" = http://localhost:5173/register
