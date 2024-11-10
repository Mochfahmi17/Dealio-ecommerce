import Text from "../atoms/Text";

const ProductPrice = ({ price }) => {
  const moneyFormat = (number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(number);
  };
  return (
    <Text className="my-1 text-lg font-medium text-slate-500 md:text-xl">
      {moneyFormat(price)}
    </Text>
  );
};

export default ProductPrice;
