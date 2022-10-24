import React from "react";
import Button from "../../component/Button";
import { NavLink } from "react-router-dom";

const ConfirmPage = () => {
	return (
		<div className="mt-0 lg:mt-12 mb-12 px-20 py-10 w-full rounded-3xl bg-white shadow-lg text-slate-700">
			<div className="border-b pb-4 mb-8 flex justify-between items-center">
				<h2 className="font-bold text-xl">Confirmation Page</h2>
			</div>
			<table className="table-fix border-collapse w-full text-sm text-left">
				<tbody>
					<tr className="border-b">
						<td className="px-4 py-2">Address</td>
						<td className="px-4 py-2">
							Kawasan wisata durian rt 20 rw 22 kampung fiksi
							kabupaten wonderland
						</td>
					</tr>
					<tr className="border-b">
						<td className="px-4 py-2">Sub total</td>
						<td className="px-4 py-2">Rp. 2.400.000</td>
					</tr>
					<tr className="border-b">
						<td className="px-4 py-2">Ongkir</td>
						<td className="px-4 py-2">Rp. 25.000</td>
					</tr>
				</tbody>
				<tfoot>
					<tr className="border-b font-bold">
						<td className="px-4 py-2">Total</td>
						<td className="px-4 py-2">Rp. 2.425.000</td>
					</tr>
				</tfoot>
			</table>
			<div className="flex justify-between mt-12">
				<NavLink to="/cart">
					<Button type="warning-outlined" text="Back to cart" />
				</NavLink>
				<NavLink to="/invoice">
					<Button type="primary-filled" text="Confirm" />
				</NavLink>
			</div>
		</div>
	);
};

export default ConfirmPage;
