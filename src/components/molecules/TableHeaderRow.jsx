import TableHeaderCell from "../atoms/TableHeaderCell";

const TableHeaderRow = () => {
  return (
    <tr>
      <TableHeaderCell>Product</TableHeaderCell>
      <TableHeaderCell>Price</TableHeaderCell>
      <TableHeaderCell>Quantity</TableHeaderCell>
      <TableHeaderCell>Total</TableHeaderCell>
    </tr>
  );
};

export default TableHeaderRow;
