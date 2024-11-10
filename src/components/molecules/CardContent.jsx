import Text from "../atoms/Text";

const CardContent = ({ content, className }) => {
  return <Text className={className}>{content}</Text>;
};

export default CardContent;
