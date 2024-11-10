import { Link } from "react-router-dom";

const Navlink = ({
  children,
  to,
  title = null,
  className = null,
  target = null,
}) => {
  return (
    <Link to={to} target={target} title={title} className={className}>
      {children}
    </Link>
  );
};

export default Navlink;
