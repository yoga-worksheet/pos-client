import axios from "axios";

const getOrders = async () => {
	const result = await axios.get(
		`${process.env.REACT_APP_API_HOST}/api/orders`,
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

const storeOrder = async (payload) => {
	const result = await axios.post(
		`${process.env.REACT_APP_API_HOST}/api/order`,
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

export { storeOrder, getOrders };
