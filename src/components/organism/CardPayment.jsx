import { useContext, useRef } from "react";
import FormInput from "../molecules/FormInput";
import Button from "../atoms/Button";
import { ProductSearch } from "../../context/ProductSearch";

const CardPayment = ({ action, method }) => {
  const { getTotalCartAmount } = useContext(ProductSearch);
  const inputRef = useRef(null);
  const expiredRef = useRef(null);
  const cvvRef = useRef(null);

  const formatInput = () => {
    let value = inputRef.current.value.replace(/\D/g, "");
    value = value.slice(0, 16);

    let formattedValue = "";
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += " ";
      }
      formattedValue += value[i];
    }

    inputRef.current.value = formattedValue;
  };

  const formatExpiredDate = () => {
    let value = expiredRef.current.value.replace(/\D/g, "");

    let formatValue = "";
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 2 === 0) {
        formatValue += "/";
      }
      formatValue += value[i];
    }

    expiredRef.current.value = formatValue;
  };

  const formatCvv = () => {
    cvvRef.current.value.replace(/\D/g, "");
  };

  const moneyFormat = (number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(number);
  };

  return (
    <form action={action} method={method}>
      <FormInput
        htmlFor="cardholder"
        label="Card Holder"
        id="cardholder"
        name="cardholder"
        placeholder="Name"
      />
      <FormInput
        htmlFor="cardnumber"
        label="Card Number"
        ref={inputRef}
        id="cardnumber"
        name="cardnumber"
        maxLength="19"
        onChange={formatInput}
        placeholder="0000 0000 0000 0000"
      />
      <div className="mb-4 flex items-center justify-between gap-12">
        <FormInput
          htmlFor="expiredDate"
          label="Expired date"
          ref={expiredRef}
          id="expiredDate"
          name="expiredDate"
          maxLength="5"
          onChange={formatExpiredDate}
          placeholder="MM/YY"
        />
        <FormInput
          htmlFor="cvv"
          label="CVV"
          ref={cvvRef}
          id="cvv"
          name="cvv"
          maxLength="3"
          onChange={formatCvv}
          placeholder="CVV"
        />
      </div>
      <Button className="w-full rounded bg-primary py-2 text-center text-white transition-all hover:bg-opacity-90">
        PAY {moneyFormat(getTotalCartAmount() + 2)}
      </Button>
    </form>
  );
};

export default CardPayment;
