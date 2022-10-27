import React from "react";
import { useSelector } from "react-redux";

const Details = () => {
	const { user } = useSelector((state) => state.auth);
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
						value={user.full_name}
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
						value={user.email}
						className="w-full bg-zinc-100 py-2 px-4 rounded-3xl font-semibold transition ease-in-out border-2 border-transparent invalid:border-pink-500 focus:border-blue-600 focus:outline-none"
					/>
				</div>
			</div>
		</div>
	);
};

export default Details;
