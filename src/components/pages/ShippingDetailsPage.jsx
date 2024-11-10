import ShipingDetailsForm from "../organism/ShipingDetailsForm";
import PageLayout from "../templates/PageLayout";
import ShipingDetailsLayout from "../templates/ShipingDetailsLayout";
import boxImage from "../../assets/img/box.png";

const ShippingDetailsPage = () => {
  return (
    <PageLayout>
      <ShipingDetailsLayout image={boxImage}>
        <ShipingDetailsForm />
      </ShipingDetailsLayout>
    </PageLayout>
  );
};

export default ShippingDetailsPage;
