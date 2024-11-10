import { useContext } from "react";
import { ProductSearch } from "../../context/ProductSearch";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import Image from "../atoms/Image";
import TableDataCell from "../atoms/TableDataCell";

const TableRow = ({ data, className }) => {
  const { cartItems, removeFromCart, addToCart } = useContext(ProductSearch);

  const moneyFormat = (number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(number);
  };

  return (
    <tr className={`border-b bg-white ${className}`}>
      <TableDataCell className="flex items-center gap-4 font-semibold">
        <div className="flex h-14 w-14 md:h-14 md:w-14">
          <Image
            src={data.image}
            alt={data.title}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <p className="whitespace-nowrap text-[8px] uppercase text-slate-400 md:text-xs">
            {data.category}
          </p>
          <p className="line-clamp-3 w-full max-w-sm text-ellipsis">
            {data.title}
          </p>
        </div>
      </TableDataCell>
      <TableDataCell>{moneyFormat(data.price)}</TableDataCell>
      <TableDataCell>
        <div className="flex items-center">
          <div className="whitespace-nowrap rounded-full border-2 px-2 py-1">
            <Button onClick={() => removeFromCart(data.id)} className="mr-2">
              <Icon icon="ri-subtract-line font-bold" />
            </Button>
            {cartItems[data.id]}
            <Button onClick={() => addToCart(data.id)} className="ml-2">
              <Icon icon="ri-add-line font-bold" />
            </Button>
          </div>
        </div>
      </TableDataCell>
      <TableDataCell className="font-bold">
        {moneyFormat(data.price * cartItems[data.id])}
      </TableDataCell>
    </tr>
  );
};

export default TableRow;
