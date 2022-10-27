import axios from "axios";

const getTags = async () => {
	const result = await axios.get(
		`${process.env.REACT_APP_API_HOST}/api/tags`
	);
	return result.data;
};

const storeTag = async (payload) => {
	const result = await axios.post(
		`${process.env.REACT_APP_API_HOST}/api/tag`,
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

const updateTag = async (payload, id) => {
	const result = await axios.put(
		`${process.env.REACT_APP_API_HOST}/api/tag/${id}`,
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

const destroyTag = async (id) => {
	const result = await axios.delete(
		`${process.env.REACT_APP_API_HOST}/api/tag/${id}`,
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

export { storeTag, getTags, updateTag, destroyTag };
