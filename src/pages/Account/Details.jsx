import React from "react";
import { NavLink } from "react-router-dom";

const Details = () => {
	return (
		<div className="w-full lg:w-9/12 bg-white rounded-3xl shadow-lg px-10 py-8 text-slate-700">
			<div className="border-b pb-4">
				<h2 className="font-bold text-xl">Account Details</h2>
			</div>
			<div className="space-y-4 py-4">
				<div className="space-y-2">
					<label htmlFor="fullname" className="font-normal">
						Full Name
					</label>
					<input
						id="fullname"
						type="text"
						disabled
						value="Fulan bin Fulan"
						className="w-full bg-zinc-100 py-2 px-4 rounded-3xl font-semibold transition ease-in-out border-2 border-transparent invalid:border-pink-500 focus:border-blue-600 focus:outline-none"
					/>
				</div>
				<div className="space-y-2">
					<label htmlFor="email" className="font-normal">
						Email Address
					</label>
					<input
						id="email"
						type="email"
						disabled
						value="fulan.mail@company.com"
						className="w-full bg-zinc-100 py-2 px-4 rounded-3xl font-semibold transition ease-in-out border-2 border-transparent invalid:border-pink-500 focus:border-blue-600 focus:outline-none"
					/>
				</div>
			</div>
			<p className="text-sm font-light mt-4">
				Click here to{" "}
				<NavLink
					to="/account/account-form"
					className="transition ease-in-out text-blue-500 hover:text-blue-700"
				>
					Edit your Account
				</NavLink>
			</p>
		</div>
	);
};

export default Details;
