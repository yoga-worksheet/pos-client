import React from "react";
import Button from "../../component/Button";
import { NavLink } from "react-router-dom";
import deadpool from "../../img/deadpool.jpg";
import spidermanironman from "../../img/spiderman-ironman.png";

const Cart = () => {
	return (
		<div className="mt-0 lg:mt-12 mb-12 px-20 py-10 w-full rounded-3xl bg-white shadow-lg text-slate-700">
			<div className="border-b pb-4 mb-8 flex justify-between items-center">
				<h2 className="font-bold text-xl">Cart</h2>
			</div>
			<table className="border-collapse w-full text-sm text-left mt-8">
				<thead className="border-b">
					<tr>
						<th className="px-4 py-2">Pict</th>
						<th className="px-4 py-2">Product</th>
						<th className="px-4 py-2">Price</th>
						<th className="px-4 py-2">Qty</th>
					</tr>
				</thead>
				<tbody>
					<tr className="border-b">
						<td className="px-4 py-2">
							<img src={deadpool} className=" max-h-24" alt="" />
						</td>
						<td className="px-4 py-2">
							Kawasan wisata durian rt 20 rw 22 kampung fiksi
							kabupaten wonderland
						</td>
						<td className="px-4 py-2">Rp. 1.200.000</td>
						<td className="px-4 py-2">
							<div className="flex items-center gap-2">
								<Button
									type="primary-filled"
									text="+"
									additionalClass="py-0 px-0 w-8 h-8 rounded-all text-lg inline-block"
								/>
								<span>3</span>
								<Button
									type="primary-filled"
									text="-"
									additionalClass="py-0 px-0 w-8 h-8 rounded-all text-lg inline-block"
								/>
							</div>
						</td>
					</tr>
					<tr className="border-b">
						<td className="px-4 py-2">
							<img
								src={spidermanironman}
								className=" max-h-24"
								alt=""
							/>
						</td>
						<td className="px-4 py-2">
							Kawasan wisata durian rt 20 rw 22 kampung fiksi
							kabupaten wonderland
						</td>
						<td className="px-4 py-2">Rp. 1.200.000</td>
						<td className="px-4 py-2">
							<div className="flex items-center gap-2">
								<Button
									type="primary-filled"
									text="+"
									additionalClass="py-0 px-0 w-8 h-8 rounded-all text-lg inline-block"
								/>
								<span>3</span>
								<Button
									type="primary-filled"
									text="-"
									additionalClass="py-0 px-0 w-8 h-8 rounded-all text-lg inline-block"
								/>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			<h1 className="text-2xl font-bold text-right my-10">Subtotal : Rp. 2.400.000</h1>
			<NavLink to="/choose-address" ><Button
				type="primary-filled"
				text="Checkout"
				additionalClass="w-full"
			/></NavLink>
		</div>
	);
};

export default Cart;
