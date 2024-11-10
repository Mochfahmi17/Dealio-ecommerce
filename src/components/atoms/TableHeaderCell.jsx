const TableHeaderCell = ({ children, className }) => (
  <th scope="col" className={`px-4 py-2 md:px-6 md:py-3 ${className}`}>
    {children}
  </th>
);

export default TableHeaderCell;
