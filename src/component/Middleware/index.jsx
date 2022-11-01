import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Middleware = ({ children, role }) => {
	const auth = useSelector((state) => state.auth);

	if (localStorage.getItem("auth")) {
		if (auth.user.role !== role) {
			return <Navigate to="/forbidden" />;
		} else {
			return children;
		}
	} else {
		return <Navigate to="/forbidden" />;
	}
};

export default Middleware;
