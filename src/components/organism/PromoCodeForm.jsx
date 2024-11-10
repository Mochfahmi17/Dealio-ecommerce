import FormInputCode from "../molecules/FormInputCode";

const PromoCodeForm = ({ action, method }) => {
  return (
    <form action={action} method={method}>
      <FormInputCode
        htmlFor="promo"
        label="Enter Promo code"
        type="text"
        name="promo"
        id="promo"
        placeholder="Promo code"
      />
    </form>
  );
};

export default PromoCodeForm;
