import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterByCategory, filterByTag } from "../../features/Product/action";
import Button from "../Button";

const LeftSection = ({ tags, categories }) => {
	const dispatch = useDispatch();
	const [choosenCategory, setChoosenCategory] = useState({
		id: "",
		name: "",
	});
	const [choosenTags, setChoosenTags] = useState([]);

	useEffect(() => {
		dispatch(filterByCategory(choosenCategory.name));
	}, [choosenCategory]);

	useEffect(() => {
		dispatch(filterByTag(choosenTags.map((tag) => tag.name)));
	}, [choosenTags]);

	const categoryHandler = (category) => {
		if (!choosenCategory.id || choosenCategory.id !== category._id) {
			setChoosenCategory({ id: category._id, name: category.name });
		} else {
			setChoosenCategory({
				id: "",
				name: "",
			});
		}
	};
	const tagsHandler = (tag) => {
		if (
			choosenTags.length &&
			choosenTags.filter((tagItem) => tagItem.id === tag.id).length
		) {
			setChoosenTags((prevState) =>
				[...prevState].filter((tagItem) => tagItem.id !== tag.id)
			);
		} else {
			setChoosenTags((prevState) => [...prevState, tag]);
		}
	};
	return (
		<div className="bg-[#ffffff] text-slate-700 shadow-lg rounded-3xl w-full lg:w-3/12 h-fit px-6 py-10 mb-6 lg:mb-0 space-y-10">
			<div className="space-y-4">
				<h2 className="font-bold text-xl">Category</h2>
				<div className="flex flex-wrap gap-2">
					{categories.map((category, index) => (
						<Button
							type={
								choosenCategory.id === category._id
									? "primary-filled"
									: "primary-outlined"
							}
							key={index + 1}
							text={category.name}
							onClick={() => categoryHandler(category)}
							additionalClass="text-sm px-3 py-2"
						/>
					))}
				</div>
			</div>
			<div className="space-y-4">
				<h2 className="font-bold text-xl">Tags</h2>
				<div className="flex flex-wrap gap-2">
					{tags.map((tag, index) => (
						<Button
							type={
								choosenTags.filter(
									(tagItem) => tagItem.id === tag._id
								).length
									? "triary-filled"
									: "triary-outlined"
							}
							key={index + 1}
							text={tag.name}
							additionalClass="text-xs px-2 py-1"
							onClick={() =>
								tagsHandler({ id: tag._id, name: tag.name })
							}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default LeftSection;
