import NavLink from "../atoms/NavLink";
import Logo from "../atoms/Logo";
import { useSelector } from "react-redux";

const NavItems = ({ showNavbar }) => {
  const categories = useSelector((state) => state.cartData.category);

  return (
    <div className="flex items-center gap-60">
      <ul
        className={`absolute right-0 top-full flex h-96 w-1/2 flex-col items-end justify-center gap-4 rounded-md bg-white pr-4 uppercase text-primary transition-all md:w-1/4 lg:static lg:h-0 lg:w-2/5 lg:translate-x-0 lg:flex-row lg:items-center lg:justify-normal lg:pr-0 ${showNavbar ? "translate-x-0" : "translate-x-full"}`}
      >
        {categories.map((navItem, i) => {
          return (
            <li key={i}>
              <NavLink
                to={`/category/${navItem}`}
                className="md:textbase text-nowrap text-sm"
              >
                {navItem}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <NavLink to="/">
        <Logo className="text-center font-marcellus text-2xl uppercase md:text-3xl">
          Dealio
        </Logo>
      </NavLink>
    </div>
  );
};

export default NavItems;
