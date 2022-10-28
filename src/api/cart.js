import axios from "axios";

const getCarts = async () => {
	const result = await axios.get(
		`${process.env.REACT_APP_API_HOST}/api/carts`,
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

const updateCart = async (payload) => {
	const result = await axios.put(
		`${process.env.REACT_APP_API_HOST}/api/cart`,
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

export { updateCart, getCarts };
