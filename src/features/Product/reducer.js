import {
	FILTER_CATEGORY,
	FILTER_TAG,
	FILTER_SEARCH,
	SET_PAGES,
	SET_CURRENT_PAGE,
} from "./constants";

const initialState = {
	category: "",
	tags: [],
	query: "",
	pages: 1,
	currentPage: 1,
	skip: 0,
};

const productReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case FILTER_CATEGORY:
			return { ...state, category: payload };
		case FILTER_TAG:
			return { ...state, tags: [payload] };
		case FILTER_SEARCH:
			return { ...state, query: payload };
		case SET_PAGES:
			return { ...state, pages: payload, currentPage: 1 };
		case SET_CURRENT_PAGE:
			return { ...state, currentPage: payload.page, skip: payload.skip };
		default:
			return state;
	}
};

export default productReducer;
