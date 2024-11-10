const TableDataCell = ({ children, className, colSpan }) => (
  <td colSpan={colSpan} className={`px-4 py-2 md:px-6 md:py-4 ${className}`}>
    {children}
  </td>
);

export default TableDataCell;
