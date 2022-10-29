import React, { useState, useEffect } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { getAddresses } from "../../api/address";
import Button from "../../component/Button";
import Modal from "../../component/Modal";

const ChooseAddress = () => {
	const navigate = useNavigate();
	const [addresses, setAddresses] = useState([]);
	const [selected, setSelected] = useState("");
	const [modal, setModal] = useState(false);

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

	const checkboxHandler = (id) => {
		if (!selected || selected !== id) {
			setSelected(id);
		} else {
			setSelected("");
		}
	};
	const modalToggler = (status) => setModal(status);
	const checkAddress = () => {
		if (!selected) {
			modalToggler(true);
		} else {
			navigate({
				pathname: "/confirm-page",
				search: createSearchParams({
					id: selected,
				}).toString(),
			});
		}
	};

	return (
		<div className="mt-0 lg:mt-12 mb-12 px-20 py-10 w-full rounded-3xl bg-white shadow-lg text-slate-700">
			<Modal
				icon={<ion-icon name="warning"></ion-icon>}
				message="You must choose one address!"
				type="warning"
				boolean={modal}
				onClick={() => modalToggler()}
			/>
			<div className="border-b pb-4 mb-8 flex justify-between items-center">
				<h2 className="font-bold text-xl">Choose Address</h2>
			</div>
			<table className="border-collapse w-full text-sm text-left mt-8 mb-12">
				<thead className="border-b">
					<tr>
						<th className="px-4 py-2"></th>
						<th className="px-4 py-2">Name</th>
						<th className="px-4 py-2">Address</th>
					</tr>
				</thead>
				<tbody>
					{addresses.map((address) => (
						<tr
							className={
								selected === address._id
									? "transition border-b bg-sky-100 cursor-pointer"
									: "transition border-b cursor-pointer"
							}
							key={address._id}
							onClick={() => checkboxHandler(address._id)}
						>
							<td className="px-4 py-2 text-center">
								<input
									type="checkbox"
									checked={selected === address._id}
									className="w-5 h-5 cursor-pointer"
									readOnly
								/>
							</td>
							<td className="px-4 py-4">{address.name}</td>
							<td className="px-4 py-4">
								{`${address.kelurahan}, ${address.kecamatan}, ${address.kabupaten}, ${address.provinsi}`}{" "}
								<span className="font-semibold">({address.detail})</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<Button
				type="primary-filled"
				text="Continue"
				additionalClass="w-full"
				onClick={() => checkAddress()}
			/>
		</div>
	);
};

export default ChooseAddress;
