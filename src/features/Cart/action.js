import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constants";

export const addToCart = (payload) => {
	return { type: ADD_TO_CART, payload };
};

export const removeFromCart = (payload) => {
	return { type: REMOVE_FROM_CART, payload };
};

export const emptyCart = (payload) => {
	return { type: EMPTY_CART, payload };
};
