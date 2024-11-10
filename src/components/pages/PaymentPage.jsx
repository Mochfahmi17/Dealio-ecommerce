import CardPayment from "../organism/CardPayment";
import PageLayout from "../templates/PageLayout";
import PaymentLayout from "../templates/PaymentLayout";
import payment from "../../assets/img/payment.png";

const PaymentPage = () => {
  return (
    <PageLayout>
      <PaymentLayout title="Card Information" src={payment} alt="Payment Image">
        <CardPayment />
      </PaymentLayout>
    </PageLayout>
  );
};

export default PaymentPage;
