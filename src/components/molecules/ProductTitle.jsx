import Text from "../atoms/Text";

const ProductTitle = ({ title }) => {
  return (
    <Text className="font-marcellus text-2xl uppercase md:text-3xl">
      {title}
    </Text>
  );
};

export default ProductTitle;
