import React from "react";
import Button from "../../component/Button";

const Modal = ({ icon, message, type, boolean, onClick }) => {
	let color = {};
	switch (type) {
		case "primary":
			color.text = "text-blue-500";
			color.button = "primary-filled";
			break;
		case "warning":
			color.text = "text-red-500";
			color.button = "warning-filled";
			break;
		case "success":
			color.text = "text-green-500";
			color.button = "success-filled";
			break;
		default:
			break;
	}
	return (
		<div
			className={
				boolean
					? "fixed block inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
					: "fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
			}
			onClick={onClick}
		>
			<div className="relative top-20 mx-auto p-5 border w-96 shadow-3xl rounded-3xl bg-white">
				<div className="mt-3 text-center">
					<div className={"text-9xl ".concat(color.text)}>{icon}</div>
					<div className="px-7 py-3">
						<p className={"text-xl font-bold ".concat(color.text)}>
							{message}
						</p>
					</div>
					<div className="items-center px-4 py-3">
						<Button
							type={color.button}
							text="Ok"
							additionalClass="w-full"
							onClick={onClick}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
