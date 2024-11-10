import { useEffect, useState } from "react";
import NavItems from "../molecules/NavItems";
import UtilityItems from "../molecules/UtilityItems";
import { useDispatch } from "react-redux";
import { setCategory } from "../../store/slice/cartSlice";
import axios from "axios";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await axios.get("/products/categories");
        dispatch(setCategory(response.data));
      } catch (error) {
        console.log(error);
      }
    };

    getCategory();
  }, [dispatch]);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 bg-white px-4 md:px-8">
        <nav className="flex items-center justify-between border-b border-secondary py-4">
          <NavItems showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
          <UtilityItems showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
