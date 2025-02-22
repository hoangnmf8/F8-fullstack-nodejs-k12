import { url } from ".";

// export const register = (user) => {
// 	fetch(`${url}/register`, {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify(user),
// 	})
// 		.then((res) => res.json())
// 		.then((data) => data)
// 		.catch((err) => console.log(err));
// };

export const register = async (user) => {
	try {
		const res = await fetch(`${url}/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});
		const data = await res.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

// export const login = (user) => {
// 	fetch(`${url}/login`, {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify(user),
// 	})
// 		.then((res) => res.json())
// 		.then((data) => data)
// 		.catch((err) => console.log(err));
// };

export const login = async (user) => {
	try {
		const res = await fetch(`${url}/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});
		const data = await res.json();
		return data;
	} catch (error) {
		console.log(error);
	}
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
