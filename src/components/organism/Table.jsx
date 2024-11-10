import { useContext } from "react";
import { ProductSearch } from "../../context/ProductSearch";
import TableHeaderRow from "../molecules/TableHeaderRow";
import TableRow from "../molecules/TableRow";
import TableDataCell from "../atoms/TableDataCell";

const Table = ({ className }) => {
  const { cartItems, products } = useContext(ProductSearch);
  return (
    <table className={`w-full text-xs md:text-sm ${className}`}>
      <thead className="bg-gray-50">
        <TableHeaderRow />
      </thead>
      <tbody>
        {Object.keys(cartItems).length > 0 ? (
          products.map((item, i) => {
            if (cartItems[item.id] > 0) {
              return <TableRow key={i} data={item} />;
            }
          })
        ) : (
          <tr className="border-b">
            <TableDataCell
              colSpan="4"
              className="text-center font-bold text-slate-500"
            >
              Empty!
            </TableDataCell>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
