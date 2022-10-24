import React from "react";
import { NavLink } from "react-router-dom";

const Index = () => {
	return (
		<div className="bg-[#ffffff] text-slate-700 shadow-lg rounded-3xl w-full lg:w-2/12 h-fit px-6 py-8 mb-6 lg:mb-0">
			<ul className="text-center space-y-2">
				<li>
					<NavLink
						to="/account/details"
						className={({isActive}) =>
							isActive
								? "block transition ease-in-out py-2 border-b-2 hover:text-blue-500 text-blue-500"
								: "block transition ease-in-out py-2 border-b-2 hover:text-blue-500"
						}
					>
						Account
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/account/orders"
						className={({isActive}) =>
							isActive
								? "block transition ease-in-out py-2 border-b-2 hover:text-blue-500 text-blue-500"
								: "block transition ease-in-out py-2 border-b-2 hover:text-blue-500"
						}					>
						Orders
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/account/addresses"
						className={({isActive}) =>
							isActive
								? "block transition ease-in-out py-2 border-b-2 hover:text-blue-500 text-blue-500"
								: "block transition ease-in-out py-2 border-b-2 hover:text-blue-500"
						}					>
						Addresses
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Index;
