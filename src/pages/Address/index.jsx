import React from "react";
import Button from "../../component/Button";
import { NavLink } from "react-router-dom";

const Addresses = () => {
	return (
		<div className="w-full lg:w-9/12 bg-white rounded-3xl shadow-lg px-10 py-8 text-slate-700">
			<div className="border-b pb-4 mb-8 flex justify-between items-center">
				<h2 className="font-bold text-xl">Address List</h2>
				<NavLink to="/account/address-form/create">
					<Button type="primary-filled" text="Create new address" />
				</NavLink>
			</div>
			<table className="border-collapse w-full text-sm text-left mt-8">
				<thead className="border-b">
					<tr>
						<th className="px-4 py-2">Name</th>
						<th className="px-4 py-2">Address</th>
					</tr>
				</thead>
				<tbody>
					<tr className="border-b">
						<td className="px-4 py-2">Rumah</td>
						<td className="px-4 py-2">
							Kawasan wisata durian rt 20 rw 22 kampung fiksi
							kabupaten wonderland
						</td>
						<td className="px-4 py-2 flex space-x-2">
							<NavLink to="/account/address-form/edit">
								<Button
									type="primary-outlined"
									text="Edit"
									additionalClass="px-3 py-1 text-xs"
								/>
							</NavLink>
							<Button
								type="warning-outlined"
								text="Delete"
								additionalClass="px-3 py-1 text-xs"
							/>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Addresses;
