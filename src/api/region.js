import axios from "axios";

const getProvinces = async () => {
	const result = await axios.get(
		`https://ibnux.github.io/data-indonesia/provinsi.json`
	);
	return result.data;
};

const getRegencies = async (province_id) => {
	const result = await axios.get(
		`https://ibnux.github.io/data-indonesia/kabupaten/${province_id}.json`
	);
	return result.data;
};

const getDistricts = async (regency_id) => {
	const result = await axios.get(
		`https://ibnux.github.io/data-indonesia/kecamatan/${regency_id}.json`
	);
	return result.data;
};

const getSubDistricts = async (district_id) => {
	const result = await axios.get(
		`https://ibnux.github.io/data-indonesia/kelurahan/${district_id}.json`
	);
	return result.data;
};

export { getProvinces, getRegencies, getDistricts, getSubDistricts };
