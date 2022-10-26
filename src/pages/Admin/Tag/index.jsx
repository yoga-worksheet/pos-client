import React from "react";
import { NavLink } from "react-router-dom";
import Table from "../../../component/Table";
import Button from "../../../component/Button";

const Tags = () => {
	const data = {
		headData: ["Name", "Action"],
		bodyData: [
			[
				"Marvel",
				<div className="flex w-full space-x-2">
					<NavLink to="/admin/tag-form/edit">
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
				</div>,
			],
			[
				"Marvel",
				<div className="flex w-full space-x-2">
					<NavLink to="/admin/tag-form/edit">
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
				</div>,
			],
			[
				"Marvel",
				<div className="flex w-full space-x-2">
					<NavLink to="/admin/tag-form/edit">
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
				</div>,
			],
		],
	};
	return (
		<div className="w-full lg:w-9/12 bg-white rounded-3xl shadow-lg px-10 py-8 text-slate-700">
			<div className="border-b pb-4 mb-8 flex justify-between items-center">
				<NavLink to="/admin/category-form/create">
					<Button type="primary-filled" text="Add Tag" />
				</NavLink>
				<div className="flex items-center group border-2 border-blue-300 bg-[#ffffff] rounded-3xl mt-4 lg:mt-0 px-4 py-2 space-x-2 w-full lg:w-4/12">
					<div className="text-slate-500 flex items-center">
						<ion-icon name="search-outline"></ion-icon>
					</div>
					<input
						type="text"
						className="bg-transparent w-full font-bold focus:outline-none placeholder:font-light placeholder:italic"
						placeholder="Search marvel, spiderman, naruto ..."
					/>
				</div>
			</div>
			<Table data={data} />
		</div>
	);
};

export default Tags;
