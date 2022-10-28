import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { idrFormatter } from "../../utils/formatter";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../features/Cart/action";
import { getCarts } from "../../api/cart";
import Table from "../../component/Table";
import Button from "../../component/Button";

const Cart = () => {
	const carts = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	useEffect(() => {
		getCarts().then((result) => console.log(result));
	}, []);
	const cartsMapping = carts.map((cart) => [
		<img
			src={`${process.env.REACT_APP_API_HOST}/images/products/${cart.image_url}`}
			className=" max-h-24"
			alt={cart.name}
		/>,
		cart.name,
		idrFormatter(cart.price),
		<div className="flex w-full space-x-2">
			<div className="flex items-center gap-2">
				<Button
					type="primary-filled"
					text="-"
					onClick={() => dispatch(removeFromCart(cart))}
					additionalClass="py-0 px-0 w-8 h-8 rounded-all text-lg inline-block"
				/>
				<span>{cart.qty}</span>
				<Button
					type="primary-filled"
					text="+"
					onClick={() => dispatch(addToCart(cart))}
					additionalClass="py-0 px-0 w-8 h-8 rounded-all text-lg inline-block"
				/>
			</div>
		</div>,
	]);

	const dataTable = {
		headData: ["Image", "Name", "Price", "Qty"],
		bodyData: cartsMapping,
	};
	return (
		<div className="mt-0 lg:mt-12 mb-12 px-20 py-10 w-full rounded-3xl bg-white shadow-lg text-slate-700">
			<div className="border-b pb-4 mb-8 flex justify-between items-center">
				<h2 className="font-bold text-xl">Cart</h2>
			</div>
			<Table data={dataTable} />
			<h1 className="text-2xl font-bold text-right my-10">
				Subtotal : Rp. 2.400.000
			</h1>
			<NavLink to="/choose-address">
				<Button
					type="primary-filled"
					text="Checkout"
					additionalClass="w-full"
				/>
			</NavLink>
		</div>
	);
};

export default Cart;
