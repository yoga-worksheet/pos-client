import axios from "axios";

const getProducts = async () => {
	const result = await axios.get(
		`${process.env.REACT_APP_API_HOST}/api/products`
	);
	return result.data;
};

const findProduct = async (id) => {
	const result = await axios.get(
		`${process.env.REACT_APP_API_HOST}/api/product/${id}`
	);
	return result.data;
};

const storeProduct = async (payload) => {
	const result = await axios.post(
		`${process.env.REACT_APP_API_HOST}/api/product`,
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

const updateProduct = async (payload, id) => {
	const result = await axios.put(
		`${process.env.REACT_APP_API_HOST}/api/product/${id}`,
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

const destroyProduct = async (id) => {
	const result = await axios.delete(
		`${process.env.REACT_APP_API_HOST}/api/product/${id}`,
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

export {
	storeProduct,
	getProducts,
	findProduct,
	updateProduct,
	destroyProduct,
};
