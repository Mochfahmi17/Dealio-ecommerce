import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../components/pages/HomePage";
import ProductByCategory from "../components/pages/ProductByCategory";
import SearchPage from "../components/pages/SearchPage";
import LoginPage from "../components/pages/LoginPage";
import RegisterPage from "../components/pages/RegisterPage";
import WishlistPage from "../components/pages/WishlistPage";
import ErrorPage from "../components/pages/404";
import CartPage from "../components/pages/CartPage";
import DetailProductPage from "../components/pages/DetailProductPage";
import ShippingDetailsPage from "../components/pages/ShippingDetailsPage";
import PaymentPage from "../components/pages/PaymentPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: ":product/:id",
        element: <DetailProductPage />,
      },
      {
        path: "/category/:category",
        element: <ProductByCategory />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/wishlist",
        element: <WishlistPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/shipping-information",
        element: <ShippingDetailsPage />,
      },
      {
        path: "/payment",
        element: <PaymentPage />,
      },
    ],
  },
]);

export default router;
