import { combineReducers } from "redux";
import authReducer from "./Auth/reducer";
import productReducer from "./Product/reducer";
import cartReducer from "./Cart/reducer";

const rootReducer = combineReducers({
	auth: authReducer,
	product: productReducer,
	cart: cartReducer,
});

export default rootReducer;
