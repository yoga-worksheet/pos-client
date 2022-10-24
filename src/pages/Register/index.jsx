import React from "react";
import Button from "../../component/Button";
import deadpool from "../../img/deadpool.jpg";
import { useState } from "react";
import { register } from "../../api/auth";
import Modal from "../../component/Modal";
import { useNavigate, NavLink } from "react-router-dom";
import qs from "qs";

const Index = () => {
	const [data, setData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [modal, setModal] = useState(false);
	const navigate = useNavigate();

	const modalToggler = (status) => setModal(status);
	const nameHandler = (event) => {
		setData((prevState) => ({ ...prevState, name: event.target.value }));
	};
	const emailHandler = (event) => {
		setData((prevState) => ({ ...prevState, email: event.target.value }));
	};
	const passwordHandler = (event) => {
		setData((prevState) => ({
			...prevState,
			password: event.target.value,
		}));
	};
	const confirmPasswordHandler = (event) => {
		setData((prevState) => ({
			...prevState,
			confirmPassword: event.target.value,
		}));
	};
	const reset = () => {
		setData({
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		});
	};
	const dataChecker = (data) => {
		if (
			!data.name ||
			!data.email ||
			!data.password ||
			!data.confirmPassword ||
			data.password !== data.confirmPassword
		) {
			return true;
		}
		return false;
	};
	const submitHandler = () => {
		const payload = {
			full_name: data.name,
			email: data.email,
			password: data.password,
		};
		register(qs.stringify(payload))
			.then((result) => {
				if (!result.error) {
					setModal(true);
					reset();
					setTimeout(() => {
						return navigate("/auth/login");
					}, 3000);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<>
			<Modal
				icon={<ion-icon name="checkmark-circle"></ion-icon>}
				message="Register Successful!"
				type="success"
				boolean={modal}
				onClick={() => modalToggler(false)}
			/>
			<div className="flex min-h-screen justify-center items-center font-Poppins text-zinc-800">
				<div className="2xl:container flex bg-[#ffffff] lg:max-h-fit w-8/12 shadow-lg rounded-2xl">
					<div
						hidden
						className="overflow-hidden lg:block rounded-tl-2xl rounded-bl-2xl flex-1"
					>
						<img
							src={deadpool}
							alt="Spiderman Ironman"
							className="object-cover w-full h-full"
						/>
					</div>
					<div className="py-10 px-16 flex-1">
						<div className="border-b pb-4">
							<h2 className="font-bold text-xl">
								Register your account
							</h2>
						</div>
						<div className="space-y-4 py-4">
							<div className="space-y-2">
								<label
									htmlFor="fullname"
									className="font-normal"
								>
									Full Name
								</label>
								<input
									id="fullname"
									type="text"
									value={data.name}
									onChange={(event) => nameHandler(event)}
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
									value={data.email}
									onChange={(event) => emailHandler(event)}
									className="w-full bg-zinc-100 py-2 px-4 rounded-3xl font-semibold transition ease-in-out border-2 border-transparent invalid:border-pink-500 focus:border-blue-600 focus:outline-none"
								/>
							</div>
							<div className="space-y-2">
								<label
									htmlFor="password"
									className="font-normal"
								>
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
							<div className="space-y-2">
								<label
									htmlFor="password"
									className="font-normal"
								>
									Password Confirmation
								</label>
								<input
									id="password"
									type="password"
									value={data.confirmPassword}
									onChange={(event) =>
										confirmPasswordHandler(event)
									}
									className="w-full bg-zinc-100 py-2 px-4 rounded-3xl font-semibold transition ease-in-out border-2 border-transparent focus:border-blue-600 focus:outline-none"
								/>
								{data.password !== data.confirmPassword ? (
									<span className="text-red-500 text-sm block">
										* Password doesnt match
									</span>
								) : (
									""
								)}
								{data.password.length < 8 ? (
									<span className="text-red-500 text-sm">
										* Password minimum 8 character
									</span>
								) : (
									""
								)}
							</div>
							<div className="flex flex-wrap mt-6 space-x-2">
								<Button
									text="Register"
									type="primary-filled"
									additionalClass="mb-2 w-full md:w-auto md:mb-0"
									disabled={dataChecker(data)}
									onClick={() => submitHandler()}
								/>
								<NavLink to="/auth/login" ><Button
									text="Login"
									type="secondary-filled"
									additionalClass="mb-2 w-full md:w-auto md:mb-0"
								/></NavLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Index;
