import React, { useState } from "react";
import Button from "../../component/Button";
import { useNavigate } from "react-router-dom";

const ChooseAddress = () => {
	const dummy = [
		{
			id: "1",
			name: "rumah",
			details:
				"Kawasan wisata durian rt 20 rw 22 kampung fiksi kabupaten wonderland",
		},
		{
			id: "2",
			name: "kosan",
			details:
				"Kawasan wisata durian rt 20 rw 22 kampung fiksi kabupaten wonderland",
		},
	];

	const navigate = useNavigate();
	const [selected, setSelected] = useState("");
	const [modal, setModal] = useState(false);
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
			return navigate("/confirm-page");
		}
	};

	return (
		<>
			<div className="mt-0 lg:mt-12 mb-12 px-20 py-10 w-full rounded-3xl bg-white shadow-lg text-slate-700">
				<div className="border-b pb-4 mb-8 flex justify-between items-center">
					<h2 className="font-bold text-xl">Choose Address</h2>
				</div>
				<table className="border-collapse w-full text-sm text-left mt-8 mb-12">
					<thead className="border-b">
						<tr>
							<th className="px-4 py-2"></th>
							<th className="px-4 py-2">Name</th>
							<th className="px-4 py-2">Details</th>
						</tr>
					</thead>
					<tbody>
						{dummy.map((item) => (
							<tr
								className={
									selected === item.id
										? "border-b bg-sky-200"
										: "border-b"
								}
								key={item.id}
							>
								<td className="px-4 py-2 text-center">
									<input
										type="checkbox"
										checked={selected === item.id}
										className="w-5 h-5"
										onChange={() =>
											checkboxHandler(item.id)
										}
									/>
								</td>
								<td className="px-4 py-4">{item.name}</td>
								<td className="px-4 py-4">{item.details}</td>
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

			<div
				className={
					modal
						? "fixed block inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
						: "fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
				}
				onClick={() => modalToggler(false)}
			>
				<div className="relative top-20 mx-auto p-5 border w-96 shadow-3xl rounded-3xl bg-white">
					<div className="mt-3 text-center">
						<div className="text-9xl text-red-500">
							<ion-icon name="warning"></ion-icon>
						</div>
						<div className="px-7 py-3">
							<p className="text-xl font-bold text-red-500">
								You have to choose address!
							</p>
						</div>
						<div className="items-center px-4 py-3">
							<Button
								type="warning-filled"
								text="Ok"
								additionalClass="w-full"
								onClick={() => modalToggler(false)}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ChooseAddress;
