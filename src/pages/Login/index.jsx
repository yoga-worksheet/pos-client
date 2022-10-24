import React, { useState } from "react";
import Button from "../../component/Button";
import spiderman_ironman from "../../img/spiderman-ironman.png";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import qs from "qs";

const Index = () => {
	const [data, setData] = useState({
		email: "",
		password: "",
	});
	const navigate = useNavigate();
	const emailHandler = (event) => {
		setData((prevState) => ({ ...prevState, email: event.target.value }));
	};
	const passwordHandler = (event) => {
		setData((prevState) => ({
			...prevState,
			password: event.target.value,
		}));
	};
	const submitHandler = () => {
		const payload = {
			email: data.email,
			password: data.password,
		};
		login(qs.stringify(payload)).then((result) => {
			if (!result.error) {
				localStorage.setItem("auth", result.token);
				setTimeout(() => {
					return navigate("/");
				}, 3000);
			} else {
				console.log()
			}
		});
	};
	return (
		<div className="flex min-h-screen justify-center items-center font-Poppins text-zinc-800">
			<div className="2xl:container flex bg-[#ffffff] lg:max-h-96 w-8/12 shadow-lg rounded-2xl">
				<div
					hidden
					className="overflow-hidden lg:block rounded-tl-2xl rounded-bl-2xl flex-1"
				>
					<img
						src={spiderman_ironman}
						alt="Spiderman Ironman"
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="py-10 px-16 flex-1">
					<div className="border-b pb-4">
						<h2 className="font-bold text-xl">Login into app</h2>
					</div>
					<div className="space-y-4 py-4">
						<div className="space-y-2">
							<label htmlFor="email" className="font-normal">
								Email Address
							</label>
							<input
								id="email"
								type="email"
								value={data.email}
								onChange={(event) => emailHandler(event)}
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
								value={data.password}
								onChange={(event) => passwordHandler(event)}
								className="w-full bg-zinc-100 py-2 px-4 rounded-3xl font-semibold transition ease-in-out border-2 border-transparent focus:border-blue-600 focus:outline-none"
							/>
						</div>
						<div className="flex flex-wrap mt-6 space-x-2">
							<Button
								text="Login"
								type="primary-filled"
								additionalClass="mb-2 w-full md:w-auto md:mb-0"
								onClick={() => submitHandler()}
							/>
							<NavLink to="/auth/register">
								<Button
									text="Register"
									type="secondary-filled"
									additionalClass="mb-2 w-full md:w-auto md:mb-0"
								/>
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;
