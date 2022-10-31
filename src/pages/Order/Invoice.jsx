import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getInvoice } from "../../api/invoice";
import { idrFormatter } from "../../utils/formatter";

const Invoice = () => {
	const [searchParams] = useSearchParams();
	const [invoice, setInvoice] = useState(null);
	useEffect(() => {
		getInvoice(searchParams.get("id")).then((result) => {
			if (!result.error) {
				setInvoice(result);
			} else {
				console.log(result);
			}
		});
	}, [searchParams]);
	return (
		<div className="mt-0 lg:mt-12 mb-12 md:mx-10 lg:mx-20 px-20 py-10 rounded-3xl bg-white shadow-lg text-slate-700">
			<div className="border-b pb-4 mb-8 flex justify-between items-center">
				<h2 className="font-bold text-xl">Invoice</h2>
			</div>
			{invoice ? (
				<table className="table-fix border-collapse w-full text-sm text-left">
					<tbody>
						<tr className="border-b">
							<td className="px-4 py-2">status</td>
							<td className="px-4 py-2">
								{invoice.payment_status}
							</td>
						</tr>
						<tr className="border-b">
							<td className="px-4 py-2">Order</td>
							<td className="px-4 py-2">
								# {invoice.order.order_number}
							</td>
						</tr>
						<tr className="border-b">
							<td className="px-4 py-2">Total Amount</td>
							<td className="px-4 py-2">
								{idrFormatter(invoice.total)}
							</td>
						</tr>
						<tr className="border-b">
							<td className="px-4 py-2">Billed to</td>
							<td className="px-4 py-2">
								<p>
									{invoice.user.full_name} <br />
									{invoice.user.email}
								</p>
								<p>
									<span className="font-semibold block">
										({invoice.delivery_address.detail})
									</span>
									{`${invoice.delivery_address.kelurahan}, ${invoice.delivery_address.kecamatan}, ${invoice.delivery_address.kabupaten}, ${invoice.delivery_address.provinsi}`}
								</p>
							</td>
						</tr>
						<tr className="border-b">
							<td className="px-4 py-2">Payment to</td>
							<td className="px-4 py-2">
								<p>Bank BCA</p>
								<p>No Rek. 122001282128 a/n Fulan bin Fulan</p>
							</td>
						</tr>
					</tbody>
				</table>
			) : (
				"Loading"
			)}
		</div>
	);
};

export default Invoice;
