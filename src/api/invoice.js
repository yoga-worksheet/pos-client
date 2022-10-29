import axios from "axios";

const getInvoice = async (order_id) => {
	const result = await axios.get(
		`${process.env.REACT_APP_API_HOST}/api/invoice/${order_id}`,
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

export { getInvoice };
