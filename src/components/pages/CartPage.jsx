import { useContext } from "react";
import PageLayout from "../templates/PageLayout";
import { ProductSearch } from "../../context/ProductSearch";
import PromoCodeForm from "../organism/PromoCodeForm";
import { useNavigate } from "react-router-dom";
import Table from "../organism/Table";
import Button from "../atoms/Button";
import Swal from "sweetalert2";

const CartPage = () => {
  const { getTotalCartAmount } = useContext(ProductSearch);
  const navigate = useNavigate();

  const moneyFormat = (number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(number);
  };

  const handleCheckout = () => {
    if (getTotalCartAmount() !== 0) {
      navigate("/shipping-information");
    } else {
      Swal.fire({
        title: "Empty",
        text: "Your shopping cart is currently empty. Please add products to proceed.",
        icon: "error",
      });
    }
  };

  return (
    <PageLayout>
      <div className="animate__animated animate__fadeIn flex flex-col justify-between gap-24 md:flex-row md:gap-4">
        <div className="relative w-full overflow-x-auto text-left">
          <Table />
        </div>
        <div className="w-full max-w-md justify-self-end px-4">
          <PromoCodeForm />
          <div className="mt-8 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs md:text-base">
              <p>Subtotal</p>
              <p>{moneyFormat(getTotalCartAmount())}</p>
            </div>
            <div className="flex items-center justify-between text-xs md:text-base">
              <p>Discount</p>
              <p>{moneyFormat(0)}</p>
            </div>
            <div className="flex items-center justify-between text-xs md:text-base">
              <p>Delivery fee</p>
              <p>{moneyFormat(getTotalCartAmount() === 0 ? 0 : 2)}</p>
            </div>
            <div className="mt-2 flex items-center justify-between text-lg font-semibold md:text-2xl">
              <p>Estimated total</p>
              <p className="">
                {moneyFormat(
                  getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2,
                )}
              </p>
            </div>
            <Button
              onClick={handleCheckout}
              className="mt-8 rounded border-primary bg-primary py-3 text-center text-white hover:bg-opacity-90 md:py-4"
            >
              Proceed to checkout
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CartPage;
