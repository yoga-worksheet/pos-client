import React from "react";
import { NavLink, useParams } from "react-router-dom";
import Button from "../../../component/Button";

const ProductForm = () => {
	const { action } = useParams();
	const tags = [
		"Superman",
		"Spiderman",
		"Batman",
		"Naruto",
		"Luffy",
		"Baron",
	];
	return (
		<div className="w-full lg:w-9/12 bg-white rounded-3xl shadow-lg px-10 py-8 text-slate-700">
			<div className="border-b pb-4 mb-4 flex justify-between items-center">
				<h2 className="font-bold text-xl">
					{action === "create" ? "Add Product" : "Edit Product"}
				</h2>
				<NavLink to="/admin/products">
					<Button type="warning-filled" text="Back" />
				</NavLink>
			</div>
			<div className="space-y-4 py-4 mb-4">
				<div className="space-y-2">
					<label htmlFor="name" className="font-normal">
						Name
					</label>
					<input
						id="name"
						type="text"
						className="w-full bg-zinc-100 py-2 px-4 rounded-3xl font-semibold transition ease-in-out border-2 border-transparent invalid:border-pink-500 focus:border-blue-600 focus:outline-none"
					/>
				</div>
				<div className="space-y-2">
					<label htmlFor="description" className="font-normal">
						Description
					</label>
					<textarea
						name="description"
						id="description"
						cols="30"
						rows="5"
						className="block w-full bg-zinc-100 py-2 px-4 rounded-3xl font-semibold transition ease-in-out border-2 border-transparent resize-none invalid:border-pink-500 focus:border-blue-600 focus:outline-none"
					></textarea>
				</div>
				<div className="space-y-2">
					<label htmlFor="price" className="font-normal">
						Price
					</label>
					<input
						id="price"
						type="number"
						defaultValue={0}
						className="w-full bg-zinc-100 py-2 px-4 rounded-3xl font-semibold transition ease-in-out border-2 border-transparent focus:border-blue-600 focus:outline-none"
					/>
				</div>
				<div className="space-y-2">
					<label htmlFor="image" className="font-normal">
						Image
					</label>
					<input
						id="image"
						type="file"
						accept="image/*"
						className="w-full bg-zinc-100 py-2 px-4 rounded-3xl font-semibold transition ease-in-out border-2 border-transparent focus:border-blue-600 focus:outline-none"
					/>
				</div>
				<div className="space-y-2">
					<label htmlFor="category" className="font-normal">
						Category
					</label>
					<select
						name="category"
						id="category"
						defaultValue="select"
						className="block w-full bg-zinc-100 py-2 px-4 rounded-3xl font-semibold transition ease-in-out border-2 border-transparent resize-none invalid:border-pink-500 focus:border-blue-600 focus:outline-none"
					>
						<option
							disabled
							className="text-xs italic"
							value="select"
						>
							Select Category
						</option>
						<option value="Anime">Anime</option>
						<option value="DC">DC</option>
						<option value="Western Cartoon">Western Cartoon</option>
						<option value="Marvel">Marvel</option>
					</select>
				</div>
				<div className="space-y-2">
					<label htmlFor="tags" className="font-normal">
						Tags
					</label>
					<div className="grid grid-cols-6 gap-2">
						{tags.map((tag, index) => (
							<div className="flex items-center" key={index * 3}>
								<input id={tag} type="checkbox" value="" />
								<label
									for={tag}
									className="ml-2 text-sm font-normal text-gray-900 dark:text-gray-300"
								>
									{tag}
								</label>
							</div>
						))}
					</div>
				</div>
			</div>
			<Button
				text="Submit"
				type="primary-filled"
				additionalClass="lg:mr-4 mb-2 w-full md:mb-0"
			/>
		</div>
	);
};

export default ProductForm;
