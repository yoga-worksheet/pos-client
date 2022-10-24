import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="flex justify-center items-center w-screen h-screen">
			<div className="text-slate-600 text-center">
                <div className="text-9xl mb-4">
                <ion-icon name="footsteps-outline"></ion-icon>
                </div>
				<h2 className="text-4xl font-bold mb-4">404 Not Found</h2>
				<p className="text-sm">
					Click here to{" "}
					<NavLink to="/" className="transition ease-in-out text-blue-300 hover:text-blue-500">
						Back to Home
					</NavLink>
				</p>
			</div>
		</div>
	);
};

export default NotFound;
