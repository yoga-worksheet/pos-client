import React, { useEffect, useState } from "react";
import { NavLink, createSearchParams, useNavigate } from "react-router-dom";
import { getProducts, destroyProduct } from "../../../api/product";
import { idrFormatter } from "../../../utils/formatter";
import Table from "../../../component/Table";
import Button from "../../../component/Button";
import Modal from "../../../component/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setPages } from "../../../features/Product/action";
import Pagination from "../../../component/Pagination";

const Products = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const queries = useSelector((state) => state.product);
	const { currentPage, skip, pages } = queries;
	const [products, setProducts] = useState([]);
	const [keyword, setKeyword] = useState("");
	const [modal, setModal] = useState("");
	const productsMapping = products.map((product) => [
		<img
			src={`${process.env.REACT_APP_API_HOST}/images/products/${product.image_url}`}
			className=" max-h-24"
			alt={product.name}
		/>,
		product.name,
		product.description,
		idrFormatter(product.price),
		<div className="flex w-full space-x-2">
			<Button
				type="primary-outlined"
				text="Edit"
				onClick={() => editHandler(product._id)}
				additionalClass="px-3 py-1 text-xs"
			/>
			<Button
				type="warning-outlined"
				text="Delete"
				onClick={() => deleteHandler(product._id)}
				additionalClass="px-3 py-1 text-xs"
			/>
		</div>,
	]);

	const fetchProducts = () =>
		getProducts().then((result) => {
			setProducts(result.data);
		});

	useEffect(() => {
		getProducts({
			skip,
			limit: 5,
		}).then((result) => {
			setProducts(result.data);
			dispatch(
				setPages(result.count < 5 ? 1 : Math.ceil(result.count / 5))
			);
		});
		return () => {
			setProducts([]);
		};
	}, [skip, currentPage]);

	const searchHandler = (keyword) => {
		setTimeout(() => {
			setKeyword(keyword);
		}, 250);
	};

	const editHandler = (id) => {
		navigate({
			pathname: "/admin/product-form/edit",
			search: createSearchParams({
				id,
			}).toString(),
		});
	};

	const deleteHandler = (id) => {
		destroyProduct(id).then((result) => {
			if (!result.error) {
				setModal("Product deleted!");
				fetchProducts();
			} else {
				console.log(result);
			}
		});
	};

	const dataTable = {
		headData: ["Image", "Name", "Description", "Price", "Action"],
		bodyData: !keyword
			? productsMapping
			: productsMapping.filter((product) =>
					product[1].toLowerCase().includes(keyword)
			  ),
	};
	return (
		<div className="w-full lg:w-9/12 bg-white rounded-3xl shadow-lg px-10 py-8 text-slate-700">
			<Modal
				icon={<ion-icon name="checkmark-circle"></ion-icon>}
				message={modal}
				type="success"
				boolean={modal}
				onClick={() => setModal("")}
			/>
			<div className="border-b pb-4 mb-8 flex flex-col lg:flex-row justify-between items-center">
				<NavLink to="/admin/product-form/create">
					<Button type="primary-filled" text="Add Product" />
				</NavLink>
				<div className="flex items-center group border-2 border-blue-300 bg-[#ffffff] rounded-3xl mt-4 lg:mt-0 px-4 py-2 space-x-2 w-full lg:w-4/12">
					<div className="text-slate-500 flex items-center">
						<ion-icon name="search-outline"></ion-icon>
					</div>
					<input
						type="text"
						onChange={(event) => searchHandler(event.target.value)}
						className="bg-transparent w-full font-bold focus:outline-none placeholder:font-light placeholder:italic"
						placeholder="Search marvel, spiderman, naruto ..."
					/>
				</div>
			</div>
			<Table data={dataTable} />
			<Pagination
				count={pages}
				currentPage={queries.currentPage}
				perPage={5}
				additionalClass="mt-6"
			/>
		</div>
	);
};

export default Products;
