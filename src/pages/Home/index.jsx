import React, { useEffect, useState } from "react";
import { getCategories } from "../../api/category";
import { getTags } from "../../api/tag";
import { getProducts } from "../../api/product";
import LeftSection from "../../component/LeftSection";
import ProductList from "../../component/ProductList";
import Pagination from "../../component/Pagination";

const Home = () => {
	const [categories, setCategories] = useState([]);
	const [tags, setTags] = useState([]);
	const [products, setProducts] = useState([]);
	useEffect(() => {
		getCategories().then((result) => setCategories(result));
		getTags().then((result) => setTags(result));
		getProducts().then((result) => setProducts(result.data));
		return () => {
			setCategories([]);
			setTags([]);
			setProducts([]);
		};
	}, []);
	return (
		<div>
			<div className="mt-0 lg:mt-12 mb-12 px-6 lg:px-12 w-full h-auto flex flex-col lg:flex-row flex-wrap justify-between">
				<LeftSection tags={tags} categories={categories} />
				<ProductList products={products} />
			</div>
			<Pagination />
		</div>
	);
};

export default Home;
