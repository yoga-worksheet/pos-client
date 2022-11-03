import React, { useEffect, useState } from "react";
import {
	NavLink,
	useParams,
	useNavigate,
	useSearchParams,
} from "react-router-dom";
import { storeTag, updateTag } from "../../../api/tag";
import qs from "qs";
import Button from "../../../component/Button";
import Modal from "../../../component/Modal";
import { getCategories } from "../../../api/category";

const TagForm = () => {
	const { action } = useParams();
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const [categories, setCategories] = useState([]);
	const [message, setMessage] = useState("");
	const [modal, setModal] = useState("");
	const [error, setError] = useState("");
	const [payload, setPayload] = useState({
		name: "",
		category: "",
	});

	useEffect(() => {
		if (action === "edit") {
			setPayload({
				name: searchParams.get("name"),
				category: searchParams.get("category"),
			});
		}
	}, [action, searchParams]);

	useEffect(() => {
		getCategories().then((result) => setCategories(result));
	}, []);

	const nameHandler = (name) => {
		if (name.length < 3) setMessage("Name must be more than 3 character");
		if (name.length === 20)
			setMessage("Name must be less than 20 character");
		if (name.length > 3 && name.length < 20) setMessage("");
		setPayload((prevState) => ({ ...prevState, name }));
	};

	const categoryHandler = (category) => {
		setPayload((prevState) => ({
			...prevState,
			category,
		}));
	};

	const storeHandler = () => {
		storeTag(qs.stringify(payload)).then((result) => {
			if (!result.error) {
				setModal("Tag Created!");
			} else {
				setError(result.message);
			}
		});
	};

	const updateHandler = () => {
		updateTag(qs.stringify(payload), searchParams.get("id")).then(
			(result) => {
				if (!result.error) {
					setModal("Tag Updated!");
				} else {
					setError(result.message);
				}
			}
		);
	};

	const moveToTags = () => {
		setModal("");
		if (error) {
			setError("");
		} else {
			return navigate("/admin/tags");
		}
	};

	return (
		<div className="w-full lg:w-9/12 bg-white rounded-3xl shadow-lg px-10 py-8 text-slate-700">
			<Modal
				icon={<ion-icon name="checkmark-circle"></ion-icon>}
				message={modal || error}
				type={modal ? "success" : "warning"}
				boolean={modal || error}
				onClick={() => moveToTags()}
			/>
			<div className="border-b pb-4 mb-4 flex justify-between items-center">
				<h2 className="font-bold text-xl">
					{action === "create" ? "Add Tag" : "Edit Tag"}
				</h2>
				<NavLink to="/admin/tags">
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
						value={payload.name}
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
				<div className="space-y-2">
					<label htmlFor="category" className="font-normal">
						Category
					</label>
					<select
						name="category"
						id="category"
						value={payload.category || "select"}
						onChange={(event) =>
							categoryHandler(event.target.value)
						}
						className="block w-full bg-zinc-100 py-2 px-4 rounded-3xl font-semibold transition ease-in-out border-2 border-transparent resize-none invalid:border-pink-500 focus:border-blue-600 focus:outline-none"
					>
						<option
							disabled
							className="text-xs italic"
							value="select"
						>
							Select Category
						</option>
						{categories.map((category, index) => (
							<option value={category._id} key={index * 3}>
								{category.name}
							</option>
						))}
					</select>
				</div>
			</div>
			<Button
				text="Submit"
				type="primary-filled"
				additionalClass="lg:mr-4 mb-2 w-full md:mb-0"
				onClick={() => {
					return action === "create"
						? storeHandler()
						: updateHandler();
				}}
			/>
		</div>
	);
};

export default TagForm;
