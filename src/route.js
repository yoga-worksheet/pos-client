import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Root from "./component/Root";
import Home from "./pages/Home";
import Account from "./pages/Account";
import AccountForm from "./pages/Account/AccountForm";
import Details from "./pages/Account/Details";
import Orders from "./pages/Order";
import Addresses from "./pages/Address";
import AddressForm from "./pages/Address/AddressForm";
import NotFound from "./pages/Error/NotFound";
import Invoice from "./pages/Order/Invoice";
import Cart from "./pages/Cart";
import ChooseAddress from "./pages/Cart/ChooseAddress";
import ConfirmPage from "./pages/Cart/ConfirmPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "account",
				element: <Account />,
				children: [
					{
						path: "details",
						element: <Details />,
					},
					{
						path: "orders",
						element: <Orders />,
					},
					{
						path: "addresses",
						element: <Addresses />,
					},
					{
						path: "address-form/:action",
						element: <AddressForm />,
					},
					{
						path: "account-form",
						element: <AccountForm />,
					},
				],
			},
			{
				path: "invoice",
				element: <Invoice />,
			},
			{
				path: "cart",
				element: <Cart />,
			},
			{
				path: "choose-address",
				element: <ChooseAddress />,
			},
			{
				path: "confirm-page",
				element: <ConfirmPage />,
			},
		],
	},
	{
		path: "/auth",
		children: [
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "register",
				element: <Register />,
			},
		],
	},
]);

export default router;
