import Navigo from "navigo";
import "./style.css";
import HomePage from "./src/pages/HomePage";
import LoginPage from "./src/pages/LoginPage";
import NotFoundPage from "./src/pages/NotFoundPage";
import RegisterPage from "./src/pages/RegisterPage";
import afterRegister from "./src/features/auths/afterRegister";

const app = document.querySelector("#app");

export const router = new Navigo("/", { linksSelector: "a" });

function render(content, beforHandler = null, afterHandler = null) {
	beforHandler && beforHandler();
	app.innerHTML = content();
	afterHandler && afterHandler();
}

router
	.on({
		"/": () =>
			render(
				HomePage,
				() => console.log("Logic truoc khi gan component Homepage"),
				() => console.log("Logic sau khi gan component Homepage")
			),
		"/login": () => render(LoginPage),
		"/register": () => render(RegisterPage, null, afterRegister),
	})
	.notFound(() => render(NotFoundPage));

// -> SPA = Single Page App >< MPA = Multi Page App
router.resolve();

// "/login" = http://localhost:5173/login
// "/register" = http://localhost:5173/register
