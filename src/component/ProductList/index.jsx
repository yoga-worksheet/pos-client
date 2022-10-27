import React from "react";
import ProductItem from "../ProductItem";

const ProductList = ({ products }) => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-slate-700 w-full lg:w-9/12 px-0 lg:pl-6">
			{products.map((product, index) => (
				<ProductItem key={index * 3} product={product} />
			))}
		</div>
	);
};

export default ProductList;
