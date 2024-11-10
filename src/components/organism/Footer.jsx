import { useSelector } from "react-redux";
import Icon from "../atoms/Icon";
import Logo from "../atoms/Logo";
import NavLink from "../atoms/NavLink";
import Text from "../atoms/Text";
import Navlink from "../atoms/NavLink";

const Footer = () => {
  const categories = useSelector((state) => state.cartData.category);

  return (
    <footer className="px-4 pb-14 text-primary md:px-8">
      <div className="flex flex-col justify-between gap-4 border-t border-secondary pt-3 md:flex-row md:gap-6">
        <div className="flex flex-col gap-3 md:gap-4">
          <Navlink to="/">
            <Logo className="font-marcellus text-3xl uppercase">Dealio</Logo>
          </Navlink>
          <Text className="max-w-lg text-sm text-slate-500 lg:text-base">
            This store, which sells various products ranging from clothing,
            electronics, to jewelry, was established in Indonesia in 2024.
            Dealio focuses on selling quality and branded goods, as well as
            limited edition collections.
          </Text>
          <div className="mt-2 flex items-center gap-2">
            <NavLink
              to="https://web.facebook.com/ppi.fahmi/"
              target="_blank"
              title="facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black transition-all hover:bg-opacity-80"
            >
              <Icon icon="ri-facebook-fill text-white text-2xl" />
            </NavLink>
            <NavLink
              to="https://instagram.com/fahmi_art17"
              target="_blank"
              title="instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black transition-all hover:bg-opacity-80"
            >
              <Icon icon="ri-instagram-line text-white text-2xl" />
            </NavLink>
            <NavLink
              to="https://www.linkedin.com/in/mochammad-fahmi-kurnia-sandi-ba39b2227"
              target="_blank"
              title="linkedin"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black transition-all hover:bg-opacity-80"
            >
              <Icon icon="ri-linkedin-fill text-white text-2xl" />
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col gap-3 uppercase lg:gap-4">
          <h3 className="text-lg font-medium">Navigation</h3>
          <ul className="text-slate-500">
            {categories.map((navItem, i) => {
              return (
                <li key={i} className="mb-2">
                  <NavLink
                    to={`/category/${navItem}`}
                    className="text-sm hover:text-primary lg:text-base"
                  >
                    {navItem}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-3 uppercase lg:gap-4">
          <h3 className="text-lg font-medium">Customers</h3>
          <ul className="text-slate-500">
            <li className="mb-2">
              <NavLink className="text-sm hover:text-primary lg:text-base">
                Promotions
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink className="text-sm hover:text-primary lg:text-base">
                Delivery
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink className="text-sm hover:text-primary lg:text-base">
                Payment
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink className="text-sm hover:text-primary lg:text-base">
                Gift Card
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 uppercase lg:gap-4">
          <h3 className="text-lg font-medium">About</h3>
          <ul className="text-slate-500">
            <li className="mb-2">
              <NavLink className="text-sm hover:text-primary lg:text-base">
                News
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink className="text-sm hover:text-primary lg:text-base">
                Public Offer
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink className="text-sm hover:text-primary lg:text-base">
                User Agreement
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink className="text-sm hover:text-primary lg:text-base">
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
