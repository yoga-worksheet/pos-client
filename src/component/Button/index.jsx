import React from "react";

const index = ({ text, type, additionalClass, onClick, ...additionalProp }) => {
	const defaultStyle =
		"py-2 px-8 block rounded-3xl transition ease-in-out font-medium disabled:bg-blue-300";
	let style = "";
	switch (type) {
		case "primary-filled":
			style =
				"border-2 border-transparent text-[#ffffff] bg-sky-600 hover:outline hover:outline-2 hover:outline-indigo-300";
			break;
		case "primary-outlined":
			style =
				"border-2 border-sky-600 text-sky-600 bg-transparent hover:outline hover:outline-2 hover:outline-indigo-300";
			break;
		case "secondary-filled":
			style = "bg-indigo-100 hover:shadow-md";
			break;
		case "triary-filled":
			style =
				"border-2 border-transparent text-[#ffffff] bg-orange-500 hover:outline hover:outline-2 hover:outline-amber-300";
			break;
		case "triary-outlined":
			style =
				"text-orange-500 bg-transparent border-2 border-orange-500 hover:outline hover:outline-2 hover:outline-amber-300";
			break;
		case "warning-filled":
			style =
				"border-2 border-transparent text-[#ffffff] bg-red-500 hover:outline hover:outline-2 hover:outline-red-300";
			break;
		case "warning-outlined":
			style =
				"text-red-500 bg-transparent border-2 border-red-500 hover:outline hover:outline-2 hover:outline-red-300";
			break;
		case "success-filled":
			style =
				"border-2 border-transparent text-[#ffffff] bg-green-500 hover:outline hover:outline-2 hover:outline-green-300";
			break;
		case "success-outlined":
			style =
				"text-green-500 bg-transparent border-2 border-green-500 hover:outline hover:outline-2 hover:outline-green-300";
			break;
		default:
			break;
	}
	return (
		<button
			className={defaultStyle.concat(" ", style, " ", additionalClass)}
			onClick={onClick}
			{...additionalProp}
		>
			{text}
		</button>
	);
};

export default index;
