import React from "react";

const Categories = () => {
	const data = {
		headData: ["Image", "Name", "Description", "Price", "Action"],
		bodyData: [
			[
				"Deadpool",
				"lorem ipsum",
				"Rp. 1.200.000",
			],
			[
				"Deadpool",
				"lorem ipsum",
				"Rp. 1.200.000",
			],
		],
	};
	return (
		<div className="w-full lg:w-9/12 bg-white rounded-3xl shadow-lg px-10 py-8 text-slate-700">
			<div className="border-b pb-4 mb-8 flex justify-between items-center">
				<NavLink to="/admin/product-form/create">
					<Button type="primary-filled" text="Add Category" />
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

export default Categories;
