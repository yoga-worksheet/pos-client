import axios from "axios";

const register = async (payload) => {
	const result = await axios.post(
		`${process.env.REACT_APP_API_HOST}/auth/register`,
		payload
	);
	return result.data;
};

const login = async (payload) => {
	const result = await axios.post(
		`${process.env.REACT_APP_API_HOST}/auth/login`,
		payload
	);
	return result.data;
};

const logout = async () => {
	const result = await axios.post(
		`${process.env.REACT_APP_API_HOST}/auth/logout`,
		{},
		{
			headers: {
				Authorization: `Bearer ${
					JSON.parse(localStorage.getItem("auth")).token
				}`,
			},
		}
	);
	return result.data;
};

export { register, login, logout };
