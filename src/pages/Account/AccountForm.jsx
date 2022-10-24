import React from "react";
import Button from "../../component/Button";
import { NavLink } from "react-router-dom";

const AccountForm = () => {
	return (
		<>
			<div className="w-full lg:w-9/12 bg-white rounded-3xl shadow-lg px-10 py-8 text-slate-700">
				<div className="border-b pb-4 mb-8 flex justify-between items-center">
					<h2 className="font-bold text-xl">Personal Information</h2>
					<NavLink to="/account/details">
						<Button type="warning-filled" text="Back" />
					</NavLink>
				</div>
				<div className="space-y-4 py-4">
					<div className="space-y-2">
						<label htmlFor="fullname" className="font-normal">
							Full Name
						</label>
						<input
							id="fullname"
							type="text"
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
							className="w-full bg-zinc-100 py-2 px-4 rounded-3xl font-semibold transition ease-in-out border-2 border-transparent invalid:border-pink-500 focus:border-blue-600 focus:outline-none"
						/>
					</div>
					<div className="space-y-2">
						<label htmlFor="password" className="font-normal">
							Password
						</label>
						<input
							id="password"
							type="password"
							className="w-full bg-zinc-100 py-2 px-4 rounded-3xl font-semibold transition ease-in-out border-2 border-transparent focus:border-blue-600 focus:outline-none"
						/>
					</div>
					<div className="space-y-2">
						<label htmlFor="password" className="font-normal">
							Password Confirmation
						</label>
						<input
							id="password"
							type="password"
							className="w-full bg-zinc-100 py-2 px-4 rounded-3xl font-semibold transition ease-in-out border-2 border-transparent focus:border-blue-600 focus:outline-none"
						/>
					</div>
					<Button
						text="Save"
						type="primary-filled"
						additionalClass="lg:mr-4 mb-2 w-full md:w-auto md:mb-0"
					/>
				</div>
			</div>
		</>
	);
};

export default AccountForm;
