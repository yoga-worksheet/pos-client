import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useScrollPosition } from "../../hooks";
import { logout } from "../../api/auth";
import { userLogout } from "../../features/Auth/action";
import Modal from "../Modal";

const Index = () => {
	const [popUp, setPopUp] = useState(false);
	const [menu, setMenu] = useState(false);
	const [modal, setModal] = useState(false);
	const scrollPosition = useScrollPosition();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);
	let popUpStyle =
		"absolute text-slate-700 transition ease-in-out -right-4 mt-2 ml-4 shadow-lg w-auto h-auto py-4 px-3 bg-[#ffffff] rounded-3xl";
	const togglePopUp = () => {
		if (popUp) setPopUp(false);
		else setPopUp(true);
	};
	const toggleMenu = () => {
		if (menu) setMenu(false);
		else setMenu(true);
	};
	const logoutHandler = () => {
		if (localStorage.getItem("auth")) {
			logout().then((result) => {
				if (!result.error) {
					localStorage.removeItem("auth");
					dispatch(userLogout());
					setModal(true);
				} else {
					console.log(result);
				}
			});
		}
	};
	const moveToHome = () => {
		setModal(false);
		navigate("/");
	};
	return (
		<div
			className={
				scrollPosition > 0
					? "z-10 w-full transition sticky top-0 mt-8 flex flex-col lg:flex-row justify-between lg:items-center px-20 py-4 bg-sky-900 shadow-lg "
					: "w-full transition sticky top-0 mt-8 flex flex-col lg:flex-row justify-between lg:items-center text-slate-700 px-20 py-4"
			}
		>
			{modal && (
				<Modal
					icon={<ion-icon name="checkmark-circle"></ion-icon>}
					message="Logout Successful!"
					type="success"
					boolean={modal}
					onClick={() => moveToHome()}
				/>
			)}
			<div className="flex justify-between">
				<h1
					className={
						scrollPosition > 0
							? "font-bold text-3xl transition ease-in-out hover:text-blue-500 text-white"
							: "font-bold text-3xl transition ease-in-out hover:text-blue-500"
					}
				>
					<NavLink to="/">Action Figure</NavLink>
				</h1>
				<button
					className="flex items-center transition ease-in-out lg:hidden text-3xl bg-indigo-100 p-3 rounded-full hover:shadow-lg"
					onClick={toggleMenu}
				>
					<ion-icon name="menu-outline"></ion-icon>
				</button>
			</div>
			<div
				className={
					menu
						? "flex items-center group border-2 border-transparent bg-[#ffffff] rounded-3xl mt-4 lg:mt-0 px-4 py-2 space-x-2 w-full lg:w-6/12"
						: "hidden lg:flex items-center group border-2 border-transparent bg-[#ffffff] rounded-3xl mt-4 lg:mt-0 px-4 py-2 space-x-2 w-full lg:w-6/12"
				}
			>
				<div className="text-slate-500 flex items-center">
					<ion-icon name="search-outline"></ion-icon>
				</div>
				<input
					type="text"
					className="bg-transparent w-full font-bold focus:outline-none placeholder:font-light placeholder:italic"
					placeholder="Search marvel, spiderman, naruto ..."
				/>
			</div>
			{menu ? (
				<div className="transition ease-in-out  mt-2 shadow-lg w-full h-auto py-4 px-3 bg-[#ffffff] rounded-3xl">
					<ul className="font-light text-normal space-y-2">
						{user ? (
							<>
								<li className="border-b py-2 px-6">
									<NavLink
										to="/account/details"
										className="hover:text-blue-500"
									>
										Account
									</NavLink>
								</li>
								<li className="py-2 px-6">
									<button
										className="hover:text-blue-500"
										onClick={() => logoutHandler()}
									>
										Logout
									</button>
								</li>
							</>
						) : (
							<>
								<li className=" py-2 px-6">
									<NavLink
										to="/auth/register"
										className="hover:text-blue-500"
									>
										Register
									</NavLink>
								</li>
								<li className=" py-2 px-6">
									<NavLink
										to="/auth/login"
										className="hover:text-blue-500"
									>
										Login
									</NavLink>
								</li>
							</>
						)}
					</ul>
				</div>
			) : (
				""
			)}
			<div className="flex items-center space-x-10">
				{user.role !== "admin" && (
					<NavLink
						to="/cart"
						className={
							scrollPosition > 0
								? "fixed right-0 bottom-0 mb-10 mr-10 bg-indigo-100 text-slate-700 lg:text-white rounded-full p-3 flex lg:relative lg:inset-0 lg:m-0 lg:bg-transparent lg:p-0 text-3xl items-center"
								: "fixed right-0 bottom-0 mb-10 mr-10 bg-indigo-100 text-slate-700 rounded-full p-3 flex lg:relative lg:inset-0 lg:m-0 lg:bg-transparent lg:p-0 text-3xl items-center"
						}
					>
						<ion-icon name="cart"></ion-icon>
						<span className="absolute right-0 top-0 rounded-full bg-red-500 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
							5
						</span>
					</NavLink>
				)}
				<div className="relative ml-0 w-auto">
					<button
						className={
							scrollPosition > 0
								? "invisible opacity-0 pointer-events-none lg:opacity-100 lg:visible lg:pointer-events-auto lg:text-white text-3xl flex items-center space-x-2"
								: "invisible opacity-0 pointer-events-none lg:opacity-100 lg:visible lg:pointer-events-auto text-3xl flex items-center space-x-2"
						}
						onClick={togglePopUp}
					>
						{user ? (
							<span className="text-sm">
								Hi, {user.full_name}
							</span>
						) : (
							<ion-icon name="person"></ion-icon>
						)}
						<div className="text-xs">
							<ion-icon name="caret-down-outline"></ion-icon>
						</div>
					</button>
					<div
						className={
							popUp
								? popUpStyle.concat(
										" visible opacity-100 pointer-events-auto"
								  )
								: popUpStyle.concat(
										" invisible opacity-0 pointer-events-none"
								  )
						}
					>
						<ul className="font-light text-normal space-y-2 text-slate-700">
							{user ? (
								<>
									<li className="border-b py-2 px-6">
										<NavLink
											to="/account/details"
											className="hover:text-blue-500"
										>
											Account
										</NavLink>
									</li>
									<li className="py-2 px-6">
										<button
											className="hover:text-blue-500"
											onClick={() => logoutHandler()}
										>
											Logout
										</button>
									</li>
								</>
							) : (
								<>
									<li className=" py-2 px-6">
										<NavLink
											to="/auth/register"
											className="hover:text-blue-500"
										>
											Register
										</NavLink>
									</li>
									<li className=" py-2 px-6">
										<NavLink
											to="/auth/login"
											className="hover:text-blue-500"
										>
											Login
										</NavLink>
									</li>
								</>
							)}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;
