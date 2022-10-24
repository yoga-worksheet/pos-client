import React from "react";
import ProductItem from "../ProductItem";
import deadpoolblade from '../../img/deadpool-blade.png'
import deadpool from '../../img/deadpool.jpg'
import spidermanironman from '../../img/spiderman-ironman.png'

const ProductList = () => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-slate-700 w-full lg:w-9/12 px-0 lg:pl-6">
            <ProductItem image={deadpool} name="Deadpool"/>
            <ProductItem image={deadpoolblade} name="Deadpool"/>
            <ProductItem image={deadpool} name="Deadpool"/>
            <ProductItem image={spidermanironman} name="Spiderman Ironman"/>
            <ProductItem image={deadpool} name="Deadpool"/>
        </div>
	);
};

export default ProductList;
