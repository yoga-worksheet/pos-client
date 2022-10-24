import React from "react";
import LeftSection from "../../component/LeftSection";
import ProductList from "../../component/ProductList";

const index = () => {
	const categories = ["Manga", "Marvel", "DC"];
	const tags = ["Superman", "Spiderman", "Batman", "Naruto", "Luffy"];
	return (
		<div className="mt-0 lg:mt-12 mb-12 px-6 lg:px-12 w-full h-auto flex flex-col lg:flex-row flex-wrap justify-between">
			<LeftSection categories={categories} tags={tags} />
			<ProductList />
		</div>
	);
};

export default index;
