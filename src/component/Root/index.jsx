import React from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
	return (
		<div className="w-full mx-auto">
			<Navbar />
			<Outlet />
		</div>
	);
};

export default Root;
