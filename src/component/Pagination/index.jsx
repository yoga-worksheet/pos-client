import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../features/Product/action";

const Pagination = ({ count, currentPage, additionalClass, perPage = 8 }) => {
	const dispatch = useDispatch();
	const [position, setPosition] = useState(1);
	const [pages, setPages] = useState([]);

	useEffect(() => {
		setPosition(currentPage);
		if (count === 1) {
			setPages([1]);
		} else {
			setPages([]);
			for (let page = 1; page <= count; page++) {
				setPages((prevState) => [...prevState, page]);
			}
		}
	}, [count]);

	useEffect(() => {
		dispatch(
			setCurrentPage({
				page: position,
				skip: position * perPage - perPage,
			})
		);
	}, [position]);

	const pageHandler = (page) => {
		const valid =
			position !== page && page !== 0 && page !== pages.length + 1;
		if (valid) {
			setPosition(page);
		}
		if (page === 0 && position > 1) {
			setPosition((prevState) => prevState - 1);
		}
		if (page === pages.length + 1 && position < pages.length) {
			setPosition((prevState) => prevState + 1);
		}
	};

	return (
		<div className={"w-full flex justify-center ".concat(additionalClass)}>
			<button
				className="w-10 h-10 transition rounded-full text-slate-700 hover:text-blue-500"
				onClick={() => pageHandler(0)}
			>
				{`<`}
			</button>
			{pages.map((page, index) => (
				<button
					key={index * 3}
					className={
						position === page
							? "w-10 h-10 transition rounded-full bg-blue-900 text-white hover:text-slate-100"
							: "w-10 h-10 transition rounded-full text-slate-700 hover:text-blue-500"
					}
					onClick={() => pageHandler(page)}
				>
					{page}
				</button>
			))}
			<button
				className="w-10 h-10 transition rounded-full text-slate-700 hover:text-blue-500"
				onClick={() => pageHandler(pages.length + 1)}
			>
				{`>`}
			</button>
		</div>
	);
};

export default Pagination;
