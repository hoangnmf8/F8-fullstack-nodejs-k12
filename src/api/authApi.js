import { url } from ".";

export const register = (user) => {
	fetch(`${url}/register`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	})
		.then((res) => res.json())
		.then((data) => data)
		.catch((err) => console.log(err));
};

export const login = (user) => {
	fetch(`${url}/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	})
		.then((res) => res.json())
		.then((data) => data)
		.catch((err) => console.log(err));
};

// export const post = (body, path) => {
// 	fetch(`${url}/${path}`, {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify(body),
// 	})
// 		.then((res) => res.json())
// 		.then((data) => data)
// 		.catch((err) => console.log(err));
// };
