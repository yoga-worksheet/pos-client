import React from "react";
import { Outlet } from "react-router-dom";
import LeftNav from "../../component/LeftNav";

const Index = () => {
	const linkData = [
		{
			name: "Account",
			href: "/account/details",
		},
		{
			name: "Orders",
			href: "/account/orders",
		},
		{
			name: "Addresses",
			href: "/account/addresses",
		},
	];
	return (
		<div className="mt-0 lg:mt-12 mb-12 px-6 lg:px-0 w-full h-auto flex flex-col lg:flex-row flex-wrap justify-around">
			<LeftNav linkData={linkData} />
			<Outlet />
		</div>
	);
};

export default Index;
