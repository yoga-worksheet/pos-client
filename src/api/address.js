import axios from "axios";

const getAddresses = async () => {
	const result = await axios.get(
		`${process.env.REACT_APP_API_HOST}/api/delivery-addresses`,
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

const storeAddress = async (payload) => {
	const result = await axios.post(
		`${process.env.REACT_APP_API_HOST}/api/delivery-address`,
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

const updateAddress = async (payload, id) => {
	const result = await axios.put(
		`${process.env.REACT_APP_API_HOST}/api/delivery-address/${id}`,
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

const destroyAddress = async (id) => {
	const result = await axios.delete(
		`${process.env.REACT_APP_API_HOST}/api/delivery-address/${id}`,
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

export { storeAddress, getAddresses, updateAddress, destroyAddress };
