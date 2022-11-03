import React, { useEffect, useState } from "react";
import { getProducts } from "../../api/product";
import { useDispatch, useSelector } from "react-redux";
import { setPages } from "../../features/Product/action";
import LeftSection from "../../component/LeftSection";
import ProductList from "../../component/ProductList";
import Pagination from "../../component/Pagination";

const Home = () => {
	const queries = useSelector((state) => state.product);
	const dispatch = useDispatch();
	const { currentPage, query: q, category, tags, skip, pages } = queries;
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts({
			q,
			category: category.name,
			skip,
			tags,
			limit: 8,
		}).then((result) => {
			setProducts(result.data);
			dispatch(
				setPages(result.count < 8 ? 1 : Math.ceil(result.count / 8))
			);
		});
		return () => {
			setProducts([]);
		};
	}, [skip, currentPage, category, tags, q]);

	return (
		<div>
			<div className="mt-0 lg:mt-12 mb-12 px-6 lg:px-12 w-full h-auto flex flex-col lg:flex-row flex-wrap justify-between">
				<LeftSection  />
				<ProductList products={products} />
			</div>
			<Pagination
				count={pages}
				currentPage={queries.currentPage}
				additionalClass="mb-12"
			/>
		</div>
	);
};

export default Home;
