import React, { useEffect, useState } from "react";
import { NavLink, createSearchParams, useNavigate } from "react-router-dom";
import { getTags, destroyTag } from "../../../api/tag";
import Table from "../../../component/Table";
import Button from "../../../component/Button";
import Modal from "../../../component/Modal";

const Tags = () => {
	const [tags, setTags] = useState([]);
	const [keyword, setKeyword] = useState("");
	const [modal, setModal] = useState("");
	const navigate = useNavigate();
	const tagsMapping = tags.map((tag, index) => [
		tag.name,
		<div className="flex w-full space-x-2" key={index * 5}>
			<Button
				type="primary-outlined"
				text="Edit"
				onClick={() => editHandler(tag)}
				additionalClass="px-3 py-1 text-xs"
			/>
			<Button
				type="warning-outlined"
				text="Delete"
				onClick={() => deleteHandler(tag._id)}
				additionalClass="px-3 py-1 text-xs"
			/>
		</div>,
	]);

	const fetchTags = () =>
		getTags().then((result) => {
			setTags(result);
		});

	useEffect(() => {
		fetchTags();
		return () => {
			setTags([]);
		};
	}, []);

	const searchHandler = (keyword) => {
		setTimeout(() => {
			setKeyword(keyword);
		}, 250);
	};

	const editHandler = ({ _id, name }) => {
		navigate({
			pathname: "/admin/tag-form/edit",
			search: createSearchParams({
				id: _id,
				name,
			}).toString(),
		});
	};

	const deleteHandler = (id) => {
		destroyTag(id).then((result) => {
			if (!result.error) {
				setModal("Tag deleted!");
				fetchTags();
			} else {
				console.log(result);
			}
		});
	};

	const dataTable = {
		headData: ["Name", "Action"],
		bodyData: !keyword
			? tagsMapping
			: tagsMapping.filter((tag) =>
					tag[0].toLowerCase().includes(keyword)
			  ),
	};
	return (
		<div className="w-full lg:w-9/12 bg-white rounded-3xl shadow-lg px-10 py-8 text-slate-700">
			<Modal
				icon={<ion-icon name="checkmark-circle"></ion-icon>}
				message={modal}
				type="success"
				boolean={modal}
				onClick={() => setModal("")}
			/>
			<div className="border-b pb-4 mb-8 flex flex-col lg:flex-row justify-between items-center">
				<NavLink to="/admin/tag-form/create">
					<Button type="primary-filled" text="Add Tag" />
				</NavLink>
				<div className="flex items-center group border-2 border-blue-300 bg-[#ffffff] rounded-3xl mt-4 lg:mt-0 px-4 py-2 space-x-2 w-full lg:w-4/12">
					<div className="text-slate-500 flex items-center">
						<ion-icon name="search-outline"></ion-icon>
					</div>
					<input
						type="text"
						onChange={(event) => searchHandler(event.target.value)}
						className="bg-transparent w-full font-bold focus:outline-none placeholder:font-light placeholder:italic"
						placeholder="Search marvel, spiderman, naruto ..."
					/>
				</div>
			</div>
			<Table data={dataTable} />
		</div>
	);
};

export default Tags;
