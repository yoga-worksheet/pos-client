import React, { useEffect, useState } from "react";
import {
	NavLink,
	useParams,
	useNavigate,
	useSearchParams,
} from "react-router-dom";
import { storeAddress, updateAddress } from "../../api/address";
import {
	getProvinces,
	getRegencies,
	getDistricts,
	getSubDistricts,
} from "../../api/region";
import qs from "qs";
import Button from "../../component/Button";
import Modal from "../../component/Modal";

const AddressForm = () => {
	const { action } = useParams();
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const [provinces, setProvinces] = useState([]);
	const [regencies, setRegencies] = useState([]);
	const [districts, setDistricts] = useState([]);
	const [subDistricts, setSubDistricts] = useState([]);
	const [modal, setModal] = useState("");
	const [payload, setPayload] = useState({
		name: "",
		detail: "",
		provinsi: "",
		kabupaten: "",
		kecamatan: "",
		kelurahan: "",
	});
	useEffect(() => {
		const fetchProvinces = async () => {
			const result = await getProvinces();
			setProvinces([...result]);
		};
		fetchProvinces();
		if (action === "edit")
			provinceHandler(payload.provinsi);
		return () => {
			setProvinces([]);
		};
	}, []);

	useEffect(() => {
		if (action === "edit") {
			setPayload((prevState) => ({
				...prevState,
				name: searchParams.get("name"),
				detail: searchParams.get("detail"),
				provinsi: searchParams.get("provinsi"),
				kabupaten: searchParams.get("kabupaten"),
				kecamatan: searchParams.get("kecamatan"),
				kelurahan: searchParams.get("kelurahan"),
			}));
		}
	}, [action, searchParams]);

	const nameHandler = (name) => {
		setPayload((prevState) => ({ ...prevState, name }));
	};

	const detailHandler = (detail) => {
		setPayload((prevState) => ({ ...prevState, detail }));
	};

	const provinceHandler = (name) => {
		const id = provinces.filter((province) => province.nama === name)[0].id;
		setPayload((prevState) => ({ ...prevState, provinsi: name }));
		getRegencies(id).then((result) => setRegencies(result));
	};

	const regencyHandler = (name) => {
		const id = regencies.filter((regency) => regency.nama === name)[0].id;
		setPayload((prevState) => ({ ...prevState, kabupaten: name }));
		getDistricts(id).then((result) => setDistricts(result));
	};

	const districtHandler = (name) => {
		const id = districts.filter((district) => district.nama === name)[0].id;
		setPayload((prevState) => ({ ...prevState, kecamatan: name }));
		getSubDistricts(id).then((result) => setSubDistricts(result));
	};

	const subDistrictHandler = (name) => {
		setPayload((prevState) => ({ ...prevState, kelurahan: name }));
	};

	const storeHandler = () => {
		storeAddress(qs.stringify(payload)).then((result) => {
			if (!result.error) {
				setModal("Address Created!");
			} else {
				console.log(result);
			}
		});
	};

	const updateHandler = () => {
		console.log("update nih");
		// updateAddress(payload).then((result) => {
		// 	if (!result.error) {
		// 		setModal("Address Created!");
		// 	} else {
		// 		console.log(result);
		// 	}
		// });
	};

	const moveToAddresses = () => {
		setModal("");
		return navigate("/account/addresses");
	};

	return (
		<div className="w-full lg:w-9/12 bg-white rounded-3xl shadow-lg px-10 py-8 text-slate-700">
			<Modal
				icon={<ion-icon name="checkmark-circle"></ion-icon>}
				message={modal}
				type="success"
				boolean={modal}
				onClick={() => moveToAddresses()}
			/>
			<div className="border-b pb-4 mb-8 flex justify-between items-center">
				<h2 className="font-bold text-xl">
					{action === "create"
						? "Create New Address"
						: "Edit Address"}
				</h2>
				<NavLink to="/account/addresses">
					<Button type="warning-filled" text="Back" />
				</NavLink>
			</div>
			<div className="flex flex-wrap justify-between gap-4 lg:gap-0">
				<div className="space-y-4 w-full lg:w-6/12 p-4">
					<div className="space-y-2">
						<label htmlFor="name" className="font-normal">
							Name
						</label>
						<input
							id="name"
							type="text"
							value={payload.name}
							onChange={(event) =>
								nameHandler(event.target.value)
							}
							className="w-full bg-zinc-100 py-2 px-4 rounded-3xl font-semibold transition ease-in-out border-2 border-transparent invalid:border-pink-500 focus:border-blue-600 focus:outline-none"
						/>
					</div>
					<div className="space-y-2">
						<label htmlFor="detail" className="font-normal">
							Details
						</label>
						<textarea
							name="detail"
							id="detail"
							cols="30"
							rows="5"
							value={payload.detail}
							onChange={(event) =>
								detailHandler(event.target.value)
							}
							className="block w-full bg-zinc-100 py-2 px-4 rounded-3xl font-semibold transition ease-in-out border-2 border-transparent resize-none invalid:border-pink-500 focus:border-blue-600 focus:outline-none"
						></textarea>
					</div>
				</div>
				<div className="space-y-4 w-full lg:w-6/12 p-4">
					<div className="space-y-2">
						<label htmlFor="provinsi" className="font-normal">
							Provinsi
						</label>
						<select
							name="provinsi"
							id="provinsi"
							value={
								payload.provinsi ? payload.provinsi : "select"
							}
							onChange={(event) =>
								provinceHandler(event.target.value)
							}
							className="block w-full bg-zinc-100 py-2 px-4 rounded-3xl font-semibold transition ease-in-out border-2 border-transparent resize-none invalid:border-pink-500 focus:border-blue-600 focus:outline-none"
						>
							<option
								disabled
								className="text-xs italic"
								value="select"
							>
								Select Provinsi
							</option>
							{provinces.map((province, index) => (
								<option value={province.nama} key={index * 2}>
									{province.nama}
								</option>
							))}
						</select>
					</div>
					<div className="space-y-2">
						<label htmlFor="provinsi" className="font-normal">
							Kota/Kabupaten
						</label>
						<select
							disabled={!payload.provinsi && action === "create"}
							name="kabkot"
							id="kabkot"
							value={
								payload.kabupaten ? payload.kabupaten : "select"
							}
							onChange={(event) =>
								regencyHandler(event.target.value)
							}
							className="block w-full bg-zinc-100 py-2 px-4 rounded-3xl font-semibold transition ease-in-out border-2 border-transparent resize-none invalid:border-pink-500 focus:border-blue-600 focus:outline-none disabled:text-slate-400"
						>
							<option
								disabled
								value="select"
								className="text-xs italic"
							>
								Select Kabupaten/Kota
							</option>
							{regencies.map((regency, index) => (
								<option value={regency.nama} key={index * 2}>
									{regency.nama}
								</option>
							))}
						</select>
					</div>
					<div className="space-y-2">
						<label htmlFor="provinsi" className="font-normal">
							Kecamatan
						</label>
						<select
							disabled={!payload.kabupaten}
							name="kecamatan"
							id="kecamatan"
							value={
								payload.kecamatan ? payload.kecamatan : "select"
							}
							onChange={(event) =>
								districtHandler(event.target.value)
							}
							className="block w-full bg-zinc-100 py-2 px-4 rounded-3xl font-semibold transition ease-in-out border-2 border-transparent resize-none invalid:border-pink-500 focus:border-blue-600 focus:outline-none disabled:text-slate-400"
						>
							<option
								disabled
								value="select"
								className="text-xs italic"
							>
								Select Kecamatan
							</option>
							{districts.map((district, index) => (
								<option value={district.nama} key={index * 2}>
									{district.nama}
								</option>
							))}
						</select>
					</div>
					<div className="space-y-2">
						<label htmlFor="provinsi" className="font-normal">
							Kelurahan
						</label>
						<select
							disabled={!payload.kecamatan}
							name="kelurahan"
							id="kelurahan"
							value={
								payload.kelurahan ? payload.kelurahan : "select"
							}
							onChange={(event) =>
								subDistrictHandler(event.target.value)
							}
							className="block w-full bg-zinc-100 py-2 px-4 rounded-3xl font-semibold transition ease-in-out border-2 border-transparent resize-none invalid:border-pink-500 focus:border-blue-600 focus:outline-none disabled:text-slate-400"
						>
							<option
								disabled
								value="select"
								className="text-xs italic"
							>
								Select Kelurahan
							</option>
							{subDistricts.map((subDistrict, index) => (
								<option
									value={subDistrict.nama}
									key={index * 2}
								>
									{subDistrict.nama}
								</option>
							))}
						</select>
					</div>
					<Button
						type="primary-filled"
						text="Submit"
						additionalClass="w-full"
						onClick={() => {
							return action === "create"
								? storeHandler()
								: updateHandler();
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default AddressForm;
