import React, { useState } from "react";
import { useEffect } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { getOrders } from "../../api/order";
import Button from "../../component/Button";
import Table from "../../component/Table";
import { idrFormatter } from "../../utils/formatter";

const Orders = () => {
	const navigate = useNavigate();
	const [orders, setOrders] = useState([]);

	const countTotal = (itemList) => {
		return itemList.reduce(
			(total, item) => (total += item.price * item.qty),
			0
		);
	};

	const ordersMapping = orders.map((order) => [
		`# ${order.order_number}`,
		idrFormatter(countTotal(order.order_items)),
		order.status,
		<Button
			type="primary-filled"
			text="Invoice"
			additionalClass="px-3 py-1 text-xs"
			onClick={() => invoiceHandler(order._id)}
		/>,
	]);

	const invoiceHandler = (orderId) => {
		navigate({
			pathname: "/invoice",
			search: createSearchParams({
				id: orderId,
			}).toString(),
		});
	};

	useEffect(() => {
		getOrders().then((result) => {
			if (!result.error) {
				setOrders(result.data);
			} else {
				console.log(result);
			}
		});
	}, []);

	const dataTable = {
		headData: ["Order Number", "Total", "Status", "Invoice"],
		bodyData: ordersMapping,
	};
	return (
		<div className="w-full lg:w-9/12 bg-white rounded-3xl shadow-lg px-10 py-8 text-slate-700">
			{/* <Table data={dataTable} /> */}
			<table className="border-collapse w-full text-sm text-left">
				<thead className="border-b">
					<tr>
						<th className="px-4 py-2">Order Number</th>
						<th className="px-4 py-2">Total</th>
						<th className="px-4 py-2">Status</th>
						<th className="px-4 py-2">Invoice</th>
					</tr>
				</thead>
				<tbody>
					{orders &&
						orders.map((order, index) => (
							<tr className="border-b" key={index + 3}>
								<td className="px-4 py-2">
									# {order.order_number}
								</td>
								<td className="px-4 py-2">
									{idrFormatter(
										countTotal(order.order_items)
									)}
								</td>
								<td className="px-4 py-2">{order.status}</td>
								<td className="px-4 py-2">
									<Button
										type="primary-filled"
										text="Invoice"
										additionalClass="px-3 py-1 text-xs"
										onClick={() =>
											invoiceHandler(order._id)
										}
									/>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
};

export default Orders;
