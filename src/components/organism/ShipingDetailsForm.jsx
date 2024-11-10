import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import FormInput from "../molecules/FormInput";

const ShipingDetailsForm = ({ action, method }) => {
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    navigate("/payment");
  };
  return (
    <form action={action} method={method} onSubmit={handlePayment}>
      <div className="grid grid-cols-2 gap-6">
        <FormInput
          htmlFor="name"
          label="NAME"
          id="name"
          name="name"
          placeholder="Name"
        />
        <FormInput
          htmlFor="lastName"
          label="LAST NAME"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
        />
      </div>
      <div className="grid grid-cols-1 gap-6">
        <FormInput
          htmlFor="address"
          label="STREET ADDRESS"
          id="address"
          name="address"
          placeholder="Address"
        />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <FormInput
          htmlFor="city"
          label="CITY"
          id="city"
          name="city"
          placeholder="City"
        />
        <FormInput
          htmlFor="state"
          label="STATE"
          id="state"
          name="state"
          placeholder="State"
        />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <FormInput
          htmlFor="zipcode"
          label="ZIP CODE"
          id="zipcode"
          name="zipcode"
          placeholder="Zip Code"
        />
        <FormInput
          htmlFor="phone"
          label="PHONE NUMBER"
          id="phone"
          name="phone"
          placeholder="Phone Number"
        />
      </div>
      <div className="flex justify-end">
        <Button
          type="submit"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-light uppercase text-white transition-all hover:bg-opacity-90 md:text-base"
        >
          Continue to payment
        </Button>
      </div>
    </form>
  );
};

export default ShipingDetailsForm;
