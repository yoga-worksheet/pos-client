import {
	FILTER_CATEGORY,
	FILTER_SEARCH,
	FILTER_TAG,
	SET_PAGES,
	SET_CURRENT_PAGE,
} from "./constants";

export const filterByCategory = (payload) => {
	return { type: FILTER_CATEGORY, payload };
};

export const filterByTag = (payload) => {
	return { type: FILTER_TAG, payload };
};

export const filterBySearch = (payload) => {
	return { type: FILTER_SEARCH, payload };
};

export const setPages = (payload) => {
	return { type: SET_PAGES, payload };
};

export const setCurrentPage = (payload) => {
	return { type: SET_CURRENT_PAGE, payload };
};
