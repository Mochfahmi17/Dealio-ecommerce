import { NavLink, useNavigate } from "react-router-dom";
import Icon from "../atoms/Icon";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { useContext, useEffect, useRef, useState } from "react";
import { ProductSearch } from "../../context/ProductSearch";

const UtilityItems = ({ showNavbar, setShowNavbar }) => {
  const [showSearch, setShowSearch] = useState(false);
  const { searchQuery, setSearchQuery, cartItems } = useContext(ProductSearch);
  const searchRef = useRef();
  const navigate = useNavigate();

  const handleSearch = () => {
    setShowSearch(!showSearch);
    setShowNavbar(false);
  };

  const handleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    if (searchQuery) {
      navigate(`/search?q=${searchQuery}`);
    } else {
      navigate("/");
    }
  }, [navigate, searchQuery]);

  useEffect(() => {
    if (showSearch) {
      searchRef.current.focus();
    }
  }, [showSearch]);

  return (
    <div className="flex items-center gap-4 text-primary md:gap-6">
      <div className="group relative flex items-center">
        <Input
          ref={searchRef}
          type={"text"}
          placeholder={"Search here..."}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={` absolute text-sm transition-all focus:outline-none ${showSearch ? "w-48 opacity-100 right-8 py-1 px-3" : "opacity-0 w-0 right-0"}`}
        />
        <Button
          onClick={handleSearch}
          className="z-10 w-full text-lg text-black md:text-xl"
          title="Search"
        >
          <Icon icon={"ri-search-line"} />
        </Button>
      </div>
      <NavLink className="text-lg md:text-xl" to="login" title="Login">
        <Icon icon={"ri-user-line"} />
      </NavLink>
      <NavLink to="/wishlist" className="text-lg md:text-xl" title="wishlist">
        <Icon icon={"ri-heart-3-line"} />
      </NavLink>
      <NavLink to="/cart" className="relative text-lg md:text-xl" title="cart">
        <Icon icon={"ri-shopping-bag-line"} />
        {Object.keys(cartItems).length > 0 &&
        Object.values(cartItems).some((item) => item) ? (
          <div className="animate__animated animate__bounceIn absolute -right-3 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600">
            <p className="text-xs text-white">
              {Object.keys(cartItems).length}
            </p>
          </div>
        ) : null}
      </NavLink>
      <Button
        onClick={handleNavbar}
        className="flex h-3 w-[15px] flex-col justify-between lg:hidden"
      >
        <span
          className={`h-[2px] w-1/2 origin-right self-end rounded-full bg-primary transition-all ${showNavbar ? "w-full -rotate-45" : "rotate-0"}`}
        ></span>
        <span
          className={`h-[2px] w-full rounded-full bg-primary transition-all ${showNavbar ? "scale-x-0" : "scale-x-100"}`}
        ></span>
        <span
          className={`h-[2px] w-1/2 origin-right self-end rounded-full bg-primary transition-all ${showNavbar ? "w-full rotate-45" : "rotate-0"}`}
        ></span>
      </Button>
    </div>
  );
};

export default UtilityItems;
