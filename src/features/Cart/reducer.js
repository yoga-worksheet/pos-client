import { updateCart } from "../../api/cart";
import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	EMPTY_CART,
	FETCH_CART,
} from "./constants";

const initialState = localStorage.getItem("cart")
	? JSON.parse(localStorage.getItem("cart"))
	: [];

const cartReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_TO_CART:
			const isExist = state.filter(
				(cartItem) => cartItem._id === payload._id
			).length;
			let newCart = [];
			if (isExist) {
				newCart = state.map((cartItem) => {
					if (cartItem._id === payload._id)
						return { ...cartItem, qty: cartItem.qty + 1 };
					return cartItem;
				});
			} else {
				newCart = [...state, payload];
			}
			updateCart({ items: newCart });
			localStorage.setItem("cart", JSON.stringify(newCart));
			return newCart;
		case REMOVE_FROM_CART:
			const carts = state
				.map((cartItem) => {
					if (cartItem._id === payload._id) {
						return { ...cartItem, qty: cartItem.qty - 1 };
					}
					return cartItem;
				})
				.filter((cartItem) => cartItem.qty > 0);
			updateCart({ items: carts });
			localStorage.setItem("cart", JSON.stringify(carts));
			return carts;
		case EMPTY_CART:
			return [];
		case FETCH_CART:
			return [...payload];
		default:
			return state;
	}
};

export default cartReducer;
