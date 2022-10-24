import React from "react";

const ProductItem = ({ image, name }) => {
	return (
		<div className="flex flex-col bg-[#ffffff] text-slate-600 rounded-3xl p-4 shadow-lg">
			<div className="overflow-hidden rounded-2xl mb-3">
				<img src={image} alt="" className="object-cover" />
			</div>
			<a
				href="#"
				className="text-base font-semibold transition ease-in-out hover:text-blue-500"
			>
				{name}
			</a>
			<p className="text-xs font-light mb-3">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</p>
			<h2 className="font-bold text-lg mb-3">Rp. 1.690.000</h2>
			<button className="flex justify-center items-center transition ease-in-out bg-orange-500 text-white py-2 rounded-2xl text-sm font-medium hover:shadow-md hover:shadow-amber-300">
				<div className="flex items-center text-lg mr-1">
                <ion-icon name="cart-outline"></ion-icon>
                </div>
				Add to Cart
			</button>
		</div>
	);
};

export default ProductItem;
