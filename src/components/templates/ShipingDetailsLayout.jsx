import Image from "../atoms/Image";

const ShipingDetailsLayout = ({ children, image }) => {
  return (
    <div className="animate__animated animate__fadeIn grid grid-cols-1 md:grid-cols-2">
      <div className="mx-auto hidden w-[550px] self-center md:block">
        <Image src={image} alt="box" className="w-full object-contain" />
      </div>
      <div className="mx-auto w-full max-w-md">
        <h2 className="mb-12 text-2xl font-bold uppercase md:text-3xl">
          Shipping Details
        </h2>
        {children}
      </div>
    </div>
  );
};

export default ShipingDetailsLayout;
