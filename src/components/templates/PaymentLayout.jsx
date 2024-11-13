import Image from "../atoms/Image";
import visa from "../../assets/img/visa.png";
import mastercard from "../../assets/img/mastercard.png";

const PaymentLayout = ({ src, alt, title, children }) => {
  return (
    <div className="animate__animated animate__fadeIn grid grid-cols-1 text-primary md:grid-cols-2">
      <div className="mx-auto hidden w-[400px] self-center md:block">
        <Image src={src} alt={alt} className="w-full object-contain" />
      </div>
      <div className="relative mx-auto w-full max-w-md rounded-xl p-6 shadow-md">
        <div className="absolute right-12 top-3 flex w-8 items-center gap-1">
          <Image src={visa} alt="Visa" className="w-full" />
          <Image src={mastercard} alt="MasterCard" className="w-full" />
        </div>
        <h2 className="mb-2 text-2xl font-semibold">{title}</h2>
        <p className="mb-4 text-xs text-slate-500">
          Pay easily and quickly using your ATM card. Enter your card number and
          other information to complete the transaction.
        </p>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default PaymentLayout;
