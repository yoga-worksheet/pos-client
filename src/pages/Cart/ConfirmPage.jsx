import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	createSearchParams,
	NavLink,
	useNavigate,
	useSearchParams,
} from "react-router-dom";
import { getAddresses } from "../../api/address";
import { idrFormatter } from "../../utils/formatter";
import { storeOrder } from "../../api/order";
import { fetchAPI } from "../../features/Cart/action";
import qs from "qs";
import Button from "../../component/Button";
import Modal from "../../component/Modal";

const ConfirmPage = () => {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const { user } = useSelector((state) => state.auth);
	const carts = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const [address, setAddress] = useState(null);
	const [modal, setModal] = useState("");
	const [orderId, setOrderId] = useState("");

	const subtotal = carts
		.map((cart) => ({
			price: cart.price,
			qty: cart.qty,
		}))
		.reduce((sub, item) => (sub += item.price * item.qty), 0);

	useEffect(() => {
		getAddresses().then((result) => {
			setAddress(
				result.data.filter(
					(item) => item._id === searchParams.get("id")
				)[0]
			);
		});
	}, [searchParams]);

	const submitHandler = () => {
		const payload = {
			delivery_fee: 25000,
			delivery_address: address._id,
		};
		storeOrder(qs.stringify(payload)).then((result) => {
			if (!result.error) {
				setOrderId(result._id);
				setModal("Checkout success!");
			} else {
				console.log(result);
			}
		});
	};

	const moveToInvoice = () => {
		setModal("");
		dispatch(fetchAPI());
		navigate({
			pathname: "/invoice",
			search: createSearchParams({
				id: orderId,
			}).toString(),
		});
	};

	return (
		<div className="mt-0 lg:mt-12 mb-12 px-20 py-10 w-full rounded-3xl bg-white shadow-lg text-slate-700">
			<Modal
				icon={<ion-icon name="checkmark-circle"></ion-icon>}
				message={modal}
				type="success"
				boolean={modal}
				onClick={() => moveToInvoice()}
			/>
			<div className="border-b pb-4 mb-8 flex justify-between items-center">
				<h2 className="font-bold text-xl">Confirmation Page</h2>
			</div>
			{address ? (
				<table className="table-fix border-collapse w-full text-sm text-left">
					<tbody>
						<tr className="border-b">
							<td className="px-4 py-2">Address</td>
							<td className="px-4 py-2">
								<span className=" block">{user.full_name}</span>
								<span className="block font-semibold">
									{address.name} ({address.detail})
								</span>
								{`${address.kelurahan}, ${address.kecamatan}, ${address.kabupaten}, ${address.provinsi}`}
							</td>
						</tr>
						<tr className="border-b">
							<td className="px-4 py-2">Sub total</td>
							<td className="px-4 py-2">
								{idrFormatter(subtotal)}
							</td>
						</tr>
						<tr className="border-b">
							<td className="px-4 py-2">Ongkir</td>
							<td className="px-4 py-2">Rp. 25.000</td>
						</tr>
					</tbody>
					<tfoot>
						<tr className="border-b font-bold">
							<td className="px-4 py-2">Total</td>
							<td className="px-4 py-2">
								{idrFormatter(subtotal + 25000)}
							</td>
						</tr>
					</tfoot>
				</table>
			) : (
				"Loading"
			)}
			<div className="flex justify-between mt-12">
				<NavLink to="/choose-address">
					<Button type="warning-outlined" text="Back" />
				</NavLink>
				<Button
					type="primary-filled"
					text="Confirm"
					onClick={() => submitHandler()}
				/>
			</div>
		</div>
	);
};

export default ConfirmPage;
