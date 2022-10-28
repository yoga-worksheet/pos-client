import React, { useEffect, useState } from "react";
import { createSearchParams, NavLink, useNavigate } from "react-router-dom";
import { getAddresses, destroyAddress } from "../../api/address";
import Button from "../../component/Button";
import Table from "../../component/Table";
import Modal from "../../component/Modal";

const Addresses = () => {
	const navigate = useNavigate();
	const [modal, setModal] = useState("");
	const [addresses, setAddresses] = useState([]);

	const fetchAddresses = () =>
		getAddresses().then((result) => {
			setAddresses(result.data);
		});

	useEffect(() => {
		fetchAddresses();
		return () => {
			setAddresses([]);
		};
	}, []);

	const editHandler = ({
		_id,
		name,
		detail,
		provinsi,
		kabupaten,
		kecamatan,
		kelurahan,
	}) => {
		navigate({
			pathname: "/account/address-form/edit",
			search: createSearchParams({
				id: _id,
				name,
				detail,
				provinsi,
				kabupaten,
				kecamatan,
				kelurahan,
			}).toString(),
		});
	};

	const deleteHandler = (id) => {
		destroyAddress(id).then((result) => {
			if (!result.error) {
				setModal("Addres deleted!");
				fetchAddresses();
			} else {
				console.log(result);
			}
		});
	};

	const dataTable = {
		headData: ["Name", "Address", "Action"],
		bodyData: addresses.map((address, index) => [
			address.name,
			`${address.detail}, ${address.kelurahan}, ${address.kecamatan}, ${address.kabupaten}, ${address.provinsi}`,
			<div className="flex w-full space-x-2" key={index * 5}>
				<Button
					type="primary-outlined"
					text="Edit"
					onClick={() => editHandler(address)}
					additionalClass="px-3 py-1 text-xs"
				/>
				<Button
					type="warning-outlined"
					text="Delete"
					onClick={() => deleteHandler(address._id)}
					additionalClass="px-3 py-1 text-xs"
				/>
			</div>,
		]),
	};
	return (
		<div className="w-full lg:w-9/12 bg-white rounded-3xl shadow-lg px-10 py-8 text-slate-700">
			<Modal
				icon={<ion-icon name="checkmark-circle"></ion-icon>}
				message={modal}
				type="success"
				boolean={modal}
				onClick={() => setModal("")}
			/>
			<div className="border-b pb-4 mb-8 flex justify-between items-center">
				<h2 className="font-bold text-xl">Address List</h2>
				<NavLink to="/account/address-form/create">
					<Button type="primary-filled" text="Create new address" />
				</NavLink>
			</div>
			<Table data={dataTable} />
		</div>
	);
};

export default Addresses;
