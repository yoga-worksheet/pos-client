import { createBrowserRouter } from "react-router-dom";
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
				element: (
					<Middleware role="user">
						<Invoice />
					</Middleware>
				),
			},
			{
				path: "cart",
				element: (
					<Middleware role="user">
						<Cart />
					</Middleware>
				),
			},
			{
				path: "choose-address",
				element: (
					<Middleware role="user">
						<ChooseAddress />
					</Middleware>
				),
			},
			{
				path: "confirm-page",
				element: (
					<Middleware role="user">
						<ConfirmPage />
					</Middleware>
				),
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
	{
		path: "/forbidden",
		element: <Forbidden />,
	},
]);

export default router;
