import React from "react";
import ReactDOM from "react-dom/client";
import router from "./routes/index.jsx";
import { RouterProvider } from "react-router-dom";
import ProductSearchProvider from "./context/ProductSearch.jsx";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";

// Icon
import "./index.css";
import "remixicon/fonts/remixicon.css";

// aos css animation
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

// animate css
import "animate.css";

// Setup Axios
axios.defaults.baseURL = "https://fakestoreapi.com";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ProductSearchProvider>
        <RouterProvider router={router} />
      </ProductSearchProvider>
    </Provider>
  </React.StrictMode>,
);
