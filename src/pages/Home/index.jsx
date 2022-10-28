import React, { useEffect, useState } from "react";
import { getCategories } from "../../api/category";
import { getTags } from "../../api/tag";
import { getProducts } from "../../api/product";
import { useDispatch, useSelector } from "react-redux";
import { setPages } from "../../features/Product/action";
import LeftSection from "../../component/LeftSection";
import ProductList from "../../component/ProductList";
import Pagination from "../../component/Pagination";

const Home = () => {
	const queries = useSelector((state) => state.product);
	const dispatch = useDispatch();
	const { currentPage, query, category, tag, skip } = queries;
	const [categories, setCategories] = useState([]);
	const [tags, setTags] = useState([]);
	const [products, setProducts] = useState([]);
	const [count, setCount] = useState(0);
	useEffect(() => {
		getCategories().then((result) => setCategories(result));
		getTags().then((result) => setTags(result));
		return () => {
			setCategories([]);
			setTags([]);
		};
	}, []);
	useEffect(() => {
		getProducts({
			query,
			category,
			skip,
			tags: tag,
			limit: 8,
		}).then((result) => {
			setProducts(result.data);
			setCount(result.count < 8 ? 1 : Math.ceil(result.count / 8));
			dispatch(
				setPages(result.count < 8 ? 1 : Math.ceil(result.count / 8))
			);
		});
		return () => {
			setProducts([]);
		};
	}, [skip, currentPage]);

	return (
		<div>
			<div className="mt-0 lg:mt-12 mb-12 px-6 lg:px-12 w-full h-auto flex flex-col lg:flex-row flex-wrap justify-between">
				<LeftSection tags={tags} categories={categories} />
				<ProductList products={products} />
			</div>
			<Pagination count={count} currentPage={queries.currentPage} />
		</div>
	);
};

export default Home;
