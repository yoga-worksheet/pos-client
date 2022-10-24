import React from "react";

const Invoice = () => {
	return (
		<div className="mt-0 lg:mt-12 mb-12 px-20 py-10 w-full rounded-3xl bg-white shadow-lg text-slate-700">
			<div className="border-b pb-4 mb-8 flex justify-between items-center">
				<h2 className="font-bold text-xl">Invoice</h2>
			</div>
			<table className="table-fix border-collapse w-full text-sm text-left">
				<tbody>
					<tr className="border-b">
						<td className="px-4 py-2">status</td>
						<td className="px-4 py-2">waiting_payment</td>
					</tr>
                    <tr className="border-b">
						<td className="px-4 py-2">Order Id</td>
						<td className="px-4 py-2"># 4</td>
					</tr>
                    <tr className="border-b">
						<td className="px-4 py-2">Total Amount</td>
						<td className="px-4 py-2">Rp. 1.200.000</td>
					</tr>
                    <tr className="border-b">
						<td className="px-4 py-2">Billed to</td>
						<td className="px-4 py-2">
                            <p>Fulan bin Fulan <br />fulan.mail@company.com</p>
                            <p>fantasy wonderland 2 <br />Jakarta</p>
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
		</div>
	);
};

export default Invoice;
