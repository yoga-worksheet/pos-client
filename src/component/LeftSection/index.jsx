import React, { useState } from "react";
import Button from "../Button";

const LeftSection = ({ tags, categories }) => {
	const [choosenCategory, setChoosenCategory] = useState("");
	const [choosenTags, setChoosenTags] = useState([]);
	const categoryHandler = (category) => {
		if (!choosenCategory || choosenCategory !== category) {
			setChoosenCategory(category);
		} else {
			setChoosenCategory("");
		}
	};
	const tagsHandler = (tag) => {
		if (choosenTags.includes(tag)) {
			setChoosenTags((prevState) =>
				[...prevState].filter((tagItem) => tagItem !== tag)
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
								choosenCategory === category
									? "primary-filled"
									: "primary-outlined"
							}
							key={index + 1}
							text={category}
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
								choosenTags.includes(tag)
									? "triary-filled"
									: "triary-outlined"
							}
							key={index + 1}
							text={tag}
							additionalClass="text-sm px-3 py-2"
							onClick={() => tagsHandler(tag)}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default LeftSection;
