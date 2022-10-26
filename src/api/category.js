import axios from "axios";

const store = async (payload) => {
	const result = await axios.post(
		`${process.env.REACT_APP_API_HOST}/api/category`,
		payload,
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

export { store };
