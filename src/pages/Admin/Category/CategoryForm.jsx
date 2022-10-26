import React, { useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { store } from "../../../api/category";
import qs from "qs";
import Button from "../../../component/Button";
import Modal from "../../../component/Modal";

const CategoryForm = () => {
	const { action } = useParams();
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	const [modal, setModal] = useState(false);
	const navigate = useNavigate();
	const nameHandler = (name) => {
		if (name.length < 3) setMessage("Name must be more than 3 character");
		if (name.length === 20)
			setMessage("Name must be less than 20 character");
		if (name.length > 3 && name.length < 20) setMessage("");
		setName(name);
	};
	const submitHandler = () => {
		const payload = { name };
		console.log(qs.stringify(payload));
		store(qs.stringify(payload)).then((result) => {
			if (!result.error) {
				setModal(true);
			} else {
				console.log(result);
			}
		});
	};
	const moveToCategories = () => {
		setModal(false);
		return navigate("/admin/categories");
	};
	return (
		<div className="w-full lg:w-9/12 bg-white rounded-3xl shadow-lg px-10 py-8 text-slate-700">
			<Modal
				icon={<ion-icon name="checkmark-circle"></ion-icon>}
				message="Category created!"
				type="success"
				boolean={modal}
				onClick={() => moveToCategories()}
			/>
			<div className="border-b pb-4 mb-4 flex justify-between items-center">
				<h2 className="font-bold text-xl">
					{action === "create" ? "Add Category" : "Edit Category"}
				</h2>
				<NavLink to="/admin/categories">
					<Button type="warning-filled" text="Back" />
				</NavLink>
			</div>
			<div className="space-y-4 py-4 mb-4">
				<div className="space-y-2">
					<label htmlFor="name" className="font-normal">
						Name
					</label>
					<input
						required
						id="name"
						type="text"
						value={name}
						onChange={(event) => nameHandler(event.target.value)}
						minLength={3}
						maxLength={20}
						className="w-full bg-zinc-100 py-2 px-4 rounded-3xl font-semibold transition ease-in-out border-2 border-transparent invalid:border-pink-500 focus:border-blue-600 focus:outline-none"
					/>
				</div>
				{message ? (
					<span className="text-red-500 text-sm">{message}</span>
				) : (
					""
				)}
			</div>
			<Button
				text="Submit"
				type="primary-filled"
				additionalClass="lg:mr-4 mb-2 w-full md:mb-0"
				onClick={() => submitHandler()}
			/>
		</div>
	);
};

export default CategoryForm;
