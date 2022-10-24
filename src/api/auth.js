const register = async (payload) => {
	const response = await fetch(`${process.env.REACT_APP_API_HOST}/auth/register`, {
		headers: { "content-type": "application/x-www-form-urlencoded" },
		method: "POST",
		body: payload,
	});
	const result = await response.json();
	return result;
};

const login = async (payload) => {
	const response = await fetch(`${process.env.REACT_APP_API_HOST}/auth/login`, {
		headers: { "content-type": "application/x-www-form-urlencoded" },
		method: "POST",
		body: payload,
	});
	const result = await response.json();
	return result;
};

export { register, login };
