import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/organism/Navbar";
import Footer from "./components/organism/Footer";
import ScrollToTop from "./components/atoms/ScrollToTop";

const App = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Navbar />
      )}
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
