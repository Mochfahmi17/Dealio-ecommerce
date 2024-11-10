const Button = ({
  onClick = null,
  type = null,
  className = null,
  children,
  title = null,
}) => {
  return (
    <button onClick={onClick} type={type} className={className} title={title}>
      {children}
    </button>
  );
};

export default Button;
