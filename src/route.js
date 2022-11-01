import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "./component/Root";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Middleware from "./component/Middleware";
import { Login, Register } from "./pages/Auth/pages";
import { Account, Details } from "./pages/Account/pages";
import { Cart, ConfirmPage, ChooseAddress } from "./pages/Cart/pages";
import { Addresses, AddressForm } from "./pages/Address/pages";
import { Orders, Invoice } from "./pages/Order/pages";
import { NotFound, Forbidden } from "./pages/Error/pages";
import { Categories, CategoryForm } from "./pages/Admin/Category/pages";
import { Products, ProductForm } from "./pages/Admin/Product/pages";
import { Tags, TagForm } from "./pages/Admin/Tag/pages";
import { AdminOrders } from "./pages/Admin/Order/pages";

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
				path: "admin",
				element: (
					<Middleware role="admin">
						<Admin />
					</Middleware>
				),
				children: [
					{
						path: "products",
						element: <Products />,
					},
					{
						path: "product-form/:action",
						element: <ProductForm />,
					},
					{
						path: "categories",
						element: <Categories />,
					},
					{
						path: "category-form/:action",
						element: <CategoryForm />,
					},
					{
						path: "tags",
						element: <Tags />,
					},
					{
						path: "tag-form/:action",
						element: <TagForm />,
					},
					{
						path: "orders",
						element: <AdminOrders />,
					},
				],
			},
			{
				path: "account",
				element: (
					<Middleware role="user">
						<Account />
					</Middleware>
				),
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
				],
			},
			{
				path: "invoice",
				element: localStorage.getItem("auth") ? (
					<Middleware>
						<Invoice />
					</Middleware>
				) : (
					<Navigate to="/auth/login" />
				),
			},
			{
				path: "cart",
				element: localStorage.getItem("auth") ? (
					<Middleware>
						<Cart />
					</Middleware>
				) : (
					<Navigate to="/auth/login" />
				),
			},
			{
				path: "choose-address",
				element: localStorage.getItem("auth") ? (
					<Middleware>
						<ChooseAddress />
					</Middleware>
				) : (
					<Navigate to="/auth/login" />
				),
			},
			{
				path: "confirm-page",
				element: localStorage.getItem("auth") ? (
					<Middleware>
						<ConfirmPage />
					</Middleware>
				) : (
					<Navigate to="/auth/login" />
				),
			},
		],
	},
	{
		path: "/auth",
		children: [
			{
				path: "login",
				element: localStorage.getItem("auth") ? (
					<Navigate to="/" />
				) : (
					<Login />
				),
			},
			{
				path: "register",
				element: localStorage.getItem("auth") ? (
					<Navigate to="/" />
				) : (
					<Register />
				),
			},
		],
	},
	{
		path: "/forbidden",
		element: <Forbidden />,
	},
]);

export default router;
