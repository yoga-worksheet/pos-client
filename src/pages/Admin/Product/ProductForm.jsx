import React, { useEffect, useState } from "react";
import {
	NavLink,
	useParams,
	useNavigate,
	useSearchParams,
} from "react-router-dom";
import { getTagsByCategory } from "../../../api/tag";
import { getCategories } from "../../../api/category";
import { storeProduct, updateProduct, findProduct } from "../../../api/product";
import Button from "../../../component/Button";
import Modal from "../../../component/Modal";

const ProductForm = () => {
	const { action } = useParams();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const [categories, setCategories] = useState([]);
	const [tags, setTags] = useState([]);
	const [modal, setModal] = useState("");
	const [product, setProduct] = useState({
		name: "",
		description: "",
		price: 0,
		image: null,
		category: "",
		tags: [],
	});

	useEffect(() => {
		getCategories().then((result) => setCategories(result));
		return () => {
			setCategories([]);
		};
	}, []);

	useEffect(() => {
		if (action === "edit") {
			findProduct(searchParams.get("id")).then((result) => {
				setProduct((prevState) => ({
					...prevState,
					name: result.name,
					description: result.description,
					price: parseInt(result.price),
					category: result.category.name,
					tags: [...result.tags.map((tag) => tag.name)],
				}));
				getTagsByCategory(result.category._id).then((res) =>
					setTags([...res])
				);
			});
		}
	}, [action, searchParams]);

	const nameHandler = (name) => {
		setProduct((prevState) => ({ ...prevState, name }));
	};

	const descriptionHandler = (description) => {
		setProduct((prevState) => ({ ...prevState, description }));
	};

	const priceHandler = (price) => {
		setProduct((prevState) => ({
			...prevState,
			price,
		}));
	};

	const imageHandler = (image) => {
		setProduct((prevState) => ({
			...prevState,
			image,
		}));
	};

	const categoryHandler = (category) => {
		const id = categories.filter((item) => item.name === category)[0]._id;
		setProduct((prevState) => ({
			...prevState,
			category,
		}));
		getTagsByCategory(id).then((result) => setTags([...result]));
	};

	const tagHandler = (tag) => {
		if (product.tags.includes(tag)) {
			setProduct((prevState) => ({
				...prevState,
				tags: product.tags.filter((oldTag) => oldTag !== tag),
			}));
		} else {
			setProduct((prevState) => ({
				...prevState,
				tags: [...product.tags, tag],
			}));
		}
	};

	const getPayload = () => {
		const payload = new FormData();
		payload.append("name", product.name);
		payload.append("description", product.description);
		payload.append("price", product.price);
		if (product.image) {
			payload.append("image", product.image, product.image.name);
		}
		payload.append("category", product.category);
		product.tags.forEach((tag) => payload.append("tags[]", tag));
		return payload;
	};

	const storeHandler = () => {
		storeProduct(getPayload()).then((result) => {
			if (!result.error) {
				setModal("Product Created!");
			} else {
				console.log(result);
			}
		});
	};

	const updateHandler = () => {
		updateProduct(getPayload(), searchParams.get("id")).then((result) => {
			if (!result.error) {
				setModal("Product Updated!");
			} else {
				console.log(result);
			}
		});
	};

	const moveToProducts = () => {
		setModal("");
		return navigate("/admin/products");
	};

	return (
		<div className="w-full lg:w-9/12 bg-white rounded-3xl shadow-lg px-10 py-8 text-slate-700">
			<Modal
				icon={<ion-icon name="checkmark-circle"></ion-icon>}
				message={modal}
				type="success"
				boolean={modal}
				onClick={() => moveToProducts()}
			/>
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
						required
						id="name"
						type="text"
						value={product.name}
						minLength={3}
						onChange={(event) => nameHandler(event.target.value)}
						className="w-full bg-zinc-100 py-2 px-4 rounded-3xl font-semibold transition ease-in-out border-2 border-transparent invalid:border-pink-500 focus:border-blue-600 focus:outline-none"
					/>
				</div>
				<div className="space-y-2">
					<label htmlFor="description" className="font-normal">
						Description
					</label>
					<textarea
						required
						name="description"
						id="description"
						cols="30"
						rows="5"
						value={product.description}
						onChange={(event) =>
							descriptionHandler(event.target.value)
						}
						maxLength={1000}
						className="block w-full bg-zinc-100 py-2 px-4 rounded-3xl font-semibold transition ease-in-out border-2 border-transparent resize-none invalid:border-pink-500 focus:border-blue-600 focus:outline-none"
					></textarea>
				</div>
				<div className="space-y-2">
					<label htmlFor="price" className="font-normal">
						Price
					</label>
					<input
						required
						id="price"
						type="number"
						value={product.price}
						onChange={(event) => priceHandler(event.target.value)}
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
						onChange={(event) =>
							imageHandler(event.target.files[0])
						}
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
						value={product.category || "select"}
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
							<option value={category.name} key={index * 3}>
								{category.name}
							</option>
						))}
					</select>
				</div>
				<div className="space-y-2">
					<label htmlFor="tags" className="font-normal">
						Tags
					</label>
					<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
						{tags.map((tag, index) => (
							<div className="flex items-center" key={index * 3}>
								<input
									checked={product.tags.includes(tag.name)}
									id={tag.name}
									type="checkbox"
									value={tag.name}
									onChange={(event) =>
										tagHandler(event.target.value)
									}
								/>
								<label
									htmlFor={tag.name}
									className="ml-2 text-sm font-normal text-gray-900 dark:text-gray-300"
								>
									{tag.name}
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
				onClick={() => {
					return action === "create"
						? storeHandler()
						: updateHandler();
				}}
			/>
		</div>
	);
};

export default ProductForm;
