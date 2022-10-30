import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	EMPTY_CART,
	FETCH_CART,
} from "./constants";
import { getCarts } from "../../api/cart";

export const addToCart = (payload) => {
	return { type: ADD_TO_CART, payload };
};

export const removeFromCart = (payload) => {
	return { type: REMOVE_FROM_CART, payload };
};

export const emptyCart = () => {
	return { type: EMPTY_CART };
};

const fetchCart = (payload) => {
	return { type: FETCH_CART, payload };
};

export const fetchAPI = () => (dispatch) => {
	getCarts()
		.then((result) => {
			const payload = result.map((item) => ({
				_id: item.product._id,
				name: item.name,
				price: item.price,
				image_url: item.image_url,
				qty: item.qty,
			}));
			dispatch(fetchCart(payload));
			localStorage.setItem("cart", JSON.stringify(payload));
		})
		.catch((error) => {
			console.log(error);
		});
};
