import React from "react";
import Button from "../../component/Button";
import { NavLink } from "react-router-dom";

const Orders = () => {
	return (
		<div className="w-full lg:w-9/12 bg-white rounded-3xl shadow-lg px-10 py-8 text-slate-700">
			<table className="border-collapse w-full text-sm text-left">
				<thead className="border-b">
					<tr>
						<th className="px-4 py-2">Order Id</th>
						<th className="px-4 py-2">Total</th>
						<th className="px-4 py-2">Status</th>
						<th className="px-4 py-2">Invoice</th>
					</tr>
				</thead>
				<tbody>
					<tr className="border-b">
						<td className="px-4 py-2">#4</td>
						<td className="px-4 py-2">Rp. 1.200.000</td>
						<td className="px-4 py-2">Waiting Payment</td>
						<td className="px-4 py-2">
							<NavLink to="/invoice">
								<Button
									type="primary-filled"
									text="Invoice"
									additionalClass="px-3 py-1 text-xs"
								/>
							</NavLink>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Orders;
