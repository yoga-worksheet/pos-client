import { createBrowserRouter } from "react-router-dom";
import Root from "./component/Root";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { Login, Register } from "./pages/Auth/pages";
import { Account, AccountForm, Details } from "./pages/Account/pages";
import { Cart, ConfirmPage, ChooseAddress } from "./pages/Cart/pages";
import { Addresses, AddressForm } from "./pages/Address/pages";
import { Orders, Invoice } from "./pages/Order/pages";
import { NotFound } from "./pages/Error/pages";
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
				element: <Admin />,
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
