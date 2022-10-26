import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../component/Button";
import Table from "../../../component/Table";

const AdminOrders = () => {
	const data = {
		headData: ["Order", "Customer Name", "Total", "Status", "Action"],
		bodyData: [
			[
				"Deadpool",
				"lorem ipsum",
				"Rp. 1.200.000",
				"waiting payment",
				<div className="flex w-full space-x-2">
					<NavLink to="/invoice">
						<Button
							type="primary-outlined"
							text="Invoice"
							additionalClass="px-3 py-1 text-xs"
						/>
					</NavLink>
					<Button
						type="success-outlined"
						text="Confirm Payment"
						additionalClass="px-3 py-1 text-xs"
					/>
				</div>,
			],
			[
				"Deadpool",
				"lorem ipsum",
				"Rp. 1.200.000",
				"waiting payment",
				<div className="flex w-full space-x-2">
					<NavLink to="/invoice">
						<Button
							type="primary-outlined"
							text="Invoice"
							additionalClass="px-3 py-1 text-xs"
						/>
					</NavLink>
					<Button
						type="success-outlined"
						text="Confirm Payment"
						additionalClass="px-3 py-1 text-xs"
					/>
				</div>,
			],
		],
	};
	const [filter, setFilter] = useState("");
	const filterHandler = (status) => {
		if (!filter || filter !== status) {
			setFilter(status);
		} else {
			setFilter("");
		}
	};
	return (
		<div className="w-full lg:w-9/12 bg-white rounded-3xl shadow-lg px-10 py-8 text-slate-700">
			<div className="border-b pb-4 mb-8 flex justify-between items-center">
				<div className="flex items-center space-x-2">
					<span>Filter by : </span>
					<Button
						type="primary-filled"
						additionalClass="text-sm px-3 py-1"
						text="All"
						onClick={() => filterHandler("")}
						disabled={filter === ""}
					/>
					<Button
						type="success-filled"
						additionalClass="text-sm px-3 py-1"
						text="Paid"
						onClick={() => filterHandler("paid")}
						disabled={filter === "paid"}
					/>
					<Button
						type="warning-filled"
						additionalClass="text-sm px-3 py-1"
						text="Waiting payment"
						onClick={() => filterHandler("waiting payment")}
						disabled={filter === "waiting payment"}
					/>
				</div>
				<div className="flex items-center group border-2 border-blue-300 bg-[#ffffff] rounded-3xl mt-4 lg:mt-0 px-4 py-2 space-x-2 w-full lg:w-4/12">
					<div className="text-slate-500 flex items-center">
						<ion-icon name="search-outline"></ion-icon>
					</div>
					<input
						type="text"
						className="bg-transparent w-full font-bold focus:outline-none placeholder:font-light placeholder:italic"
						placeholder="Customer name ..."
					/>
				</div>
			</div>
			<Table data={data} />
		</div>
	);
};

export default AdminOrders;
