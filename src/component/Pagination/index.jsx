import React, { useState } from "react";

const Pagination = () => {
	const [position, setPosition] = useState(1);
	const pages = ["<", "1", "2", "3", "4", "5", ">"];

	const pageHandler = (index) => {
		const valid =
			position !== index && index !== 0 && index !== pages.length - 1;
		if (valid) {
			return setPosition(index);
		}
		if (index === 0 && position > 1) {
			return setPosition((prevState) => prevState - 1);
		}
		if (index === pages.length - 1 && position < pages.length - 2) {
			return setPosition((prevState) => prevState + 1);
		}
	};

	return (
		<div className="w-full flex justify-center mb-12">
			{pages.map((page, index) => (
				<button
					key={index * 3}
					className={
						position === index
							? "w-10 h-10 transition rounded-full bg-blue-900 text-white hover:text-slate-100"
							: "w-10 h-10 transition rounded-full text-slate-700 hover:text-blue-500"
					}
					onClick={() => pageHandler(index)}
				>
					{page}
				</button>
			))}
		</div>
	);
};

export default Pagination;
