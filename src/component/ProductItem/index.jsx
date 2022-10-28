import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/Cart/action";
import { idrFormatter } from "../../utils/formatter";

const ProductItem = ({ product }) => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const addToCartHandler = () => {
		const { _id, name, price, image_url } = product;
		const payload = {
			_id,
			name,
			price,
			image_url,
			qty: 1,
		};
		dispatch(addToCart(payload));
	};
	return (
		<div className="flex flex-col justify-between bg-[#ffffff] text-slate-600 rounded-3xl p-4 shadow-lg">
			<div className="overflow-hidden rounded-2xl mb-3">
				<img
					src={`${process.env.REACT_APP_API_HOST}/images/products/${product.image_url}`}
					alt={product.name}
					className="object-cover"
				/>
			</div>
			<div>
				<a
					href="#"
					className="text-base font-semibold transition ease-in-out hover:text-blue-500"
				>
					{product.name}
				</a>
				<p className="text-xs font-light mb-3">{product.description}</p>
			</div>
			<h2 className="font-bold text-lg mb-3">
				{idrFormatter(parseInt(product.price))}
			</h2>
			<button
				className="flex justify-center items-center transition ease-in-out bg-orange-500 text-white py-2 rounded-2xl text-sm font-medium hover:shadow-md hover:shadow-amber-300"
				onClick={() => addToCartHandler()}
			>
				<div className="flex items-center text-lg mr-1">
					<ion-icon name="cart-outline"></ion-icon>
				</div>
				Add to Cart
			</button>
		</div>
	);
};

export default ProductItem;
