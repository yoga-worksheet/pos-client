import React from "react";
import Button from "../../component/Button";
import { NavLink, useParams } from "react-router-dom";

const AddressForm = () => {
	const { action } = useParams();
	return (
		<div className="w-full lg:w-9/12 bg-white rounded-3xl shadow-lg px-10 py-8 text-slate-700">
			<div className="border-b pb-4 mb-8 flex justify-between items-center">
				<h2 className="font-bold text-xl">
					{action === "create"
						? "Create New Address"
						: "Edit Address"}
				</h2>
				<NavLink to="/account/addresses">
					<Button type="warning-filled" text="Back" />
				</NavLink>
			</div>
			<div className="flex flex-wrap justify-between gap-4 lg:gap-0">
				<div className="space-y-4 w-full lg:w-6/12 p-4">
					<div className="space-y-2">
						<label htmlFor="name" className="font-normal">
							Name
						</label>
						<input
							id="name"
							type="text"
							className="w-full bg-zinc-100 py-2 px-4 rounded-3xl font-semibold transition ease-in-out border-2 border-transparent invalid:border-pink-500 focus:border-blue-600 focus:outline-none"
						/>
					</div>
					<div className="space-y-2">
						<label htmlFor="detail" className="font-normal">
							Details
						</label>
						<textarea
							name="detail"
							id="detail"
							cols="30"
							rows="10"
							className="block w-full bg-zinc-100 py-2 px-4 rounded-3xl font-semibold transition ease-in-out border-2 border-transparent resize-none invalid:border-pink-500 focus:border-blue-600 focus:outline-none"
						></textarea>
					</div>
				</div>
				<div className="space-y-4 w-full lg:w-6/12 p-4">
					<div className="space-y-2">
						<label htmlFor="provinsi" className="font-normal">
							Provinsi
						</label>
						<select
							name="provinsi"
							id="provinsi"
							defaultValue="select"
							className="block w-full bg-zinc-100 py-2 px-4 rounded-3xl font-semibold transition ease-in-out border-2 border-transparent resize-none invalid:border-pink-500 focus:border-blue-600 focus:outline-none"
						>
							<option
								disabled
								className="text-xs italic"
								value="select"
							>
								Select Provinsi
							</option>
							<option value="Jawa Timur">Jawa Timur</option>
							<option value="Jawa Barat">Jawa Barat</option>
							<option value="Jawa Tengah">Jawa Tengah</option>
							<option value="DKI Jakarta">DKI Jakarta</option>
						</select>
					</div>
					<div className="space-y-2">
						<label htmlFor="provinsi" className="font-normal">
							Kota/Kabupaten
						</label>
						<select
							name="kabkot"
							id="kabkot"
							defaultValue="select"
							className="block w-full bg-zinc-100 py-2 px-4 rounded-3xl font-semibold transition ease-in-out border-2 border-transparent resize-none invalid:border-pink-500 focus:border-blue-600 focus:outline-none"
						>
							<option
								disabled
								value="select"
								className="text-xs italic"
							>
								Select Kabupaten/Kota
							</option>
							<option value="Surabaya">Surabaya</option>
							<option value="Semarang">Semarang</option>
							<option value="Jakarta">Jakarta</option>
							<option value="Bandung">Bandung</option>
						</select>
					</div>
					<div className="space-y-2">
						<label htmlFor="provinsi" className="font-normal">
							Kecamatan
						</label>
						<select
							name="kecamatan"
							id="kecamatan"
							defaultValue="select"
							className="block w-full bg-zinc-100 py-2 px-4 rounded-3xl font-semibold transition ease-in-out border-2 border-transparent resize-none invalid:border-pink-500 focus:border-blue-600 focus:outline-none"
						>
							<option
								disabled
								value="select"
								className="text-xs italic"
							>
								Select Kecamatan
							</option>
							<option value="Surabaya">Surabaya</option>
							<option value="Semarang">Semarang</option>
							<option value="Jakarta">Jakarta</option>
							<option value="Bandung">Bandung</option>
						</select>
					</div>
					<div className="space-y-2">
						<label htmlFor="provinsi" className="font-normal">
							Kelurahan
						</label>
						<select
							name="kelurahan"
							id="kelurahan"
							defaultValue="select"
							className="block w-full bg-zinc-100 py-2 px-4 rounded-3xl font-semibold transition ease-in-out border-2 border-transparent resize-none invalid:border-pink-500 focus:border-blue-600 focus:outline-none"
						>
							<option
								disabled
								value="select"
								className="text-xs italic"
							>
								Select Kelurahan
							</option>
							<option value="Surabaya">Surabaya</option>
							<option value="Semarang">Semarang</option>
							<option value="Jakarta">Jakarta</option>
							<option value="Bandung">Bandung</option>
						</select>
					</div>
					<Button
						type="primary-filled"
						text="Submit"
						additionalClass="w-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default AddressForm;
