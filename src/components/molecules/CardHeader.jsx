import Image from "../atoms/Image";
import Text from "../atoms/Text";

const CardHeader = ({ src, alt, title }) => {
  return (
    <div className="mb-1">
      <div className="mb-4 h-[200px] w-full overflow-hidden rounded-t-lg bg-slate-50 md:h-[300px]">
        <Image
          src={src}
          alt={alt}
          className="h-full w-full object-contain mix-blend-multiply transition-all group-hover:scale-110"
        />
      </div>
      <Text className="line-clamp-2 text-ellipsis text-base uppercase text-primary md:text-lg">
        {title}
      </Text>
    </div>
  );
};

export default CardHeader;
