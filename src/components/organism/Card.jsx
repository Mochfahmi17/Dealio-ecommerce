import CardContent from "../molecules/CardContent";
import CardHeader from "../molecules/CardHeader";
import { Link } from "react-router-dom";

const Card = ({ data, index = null }) => {
  const moneyFormat = (number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(number);
  };

  return (
    <Link
      data-aos="fade-up"
      data-aos-delay={index * 100}
      to={`/products/${data.id}`}
    >
      <div className="group flex flex-col justify-between overflow-hidden rounded-lg md:h-[400px]">
        <CardHeader src={data.image} alt={data.title} title={data.title} />
        <CardContent
          content={moneyFormat(data.price)}
          className="text-sm font-medium text-slate-500 md:text-base"
        />
      </div>
    </Link>
  );
};

export default Card;
