import { USER_LOGIN, USER_LOGOUT } from "./constants";

const initialState = localStorage.getItem("auth")
	? JSON.parse(localStorage.getItem("auth"))
	: {};

const authReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case USER_LOGIN:
			return { user: payload.user, token: payload.token };
		case USER_LOGOUT:
			return { user: null, token: null };
		default:
			return state;
	}
};

export default authReducer;
