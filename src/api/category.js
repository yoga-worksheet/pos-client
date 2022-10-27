import axios from "axios";

const getCategories = async () => {
	const result = await axios.get(
		`${process.env.REACT_APP_API_HOST}/api/categories`
	);
	return result.data;
};

const storeCategory = async (payload) => {
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

const updateCategory = async (payload, id) => {
	const result = await axios.put(
		`${process.env.REACT_APP_API_HOST}/api/category/${id}`,
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

const destroyCategory = async (id) => {
	const result = await axios.delete(
		`${process.env.REACT_APP_API_HOST}/api/category/${id}`,
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

export { storeCategory, getCategories, updateCategory, destroyCategory };
