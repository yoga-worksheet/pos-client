import { combineReducers } from "redux";
import authReducer from "./Auth/reducer";
import productReducer from "./Product/reducer";

const rootReducer = combineReducers({
	auth: authReducer,
	product: productReducer,
});

export default rootReducer;
