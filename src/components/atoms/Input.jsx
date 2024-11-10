import { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      type,
      placeholder = null,
      id = null,
      name = null,
      style,
      value,
      onChange,
      maxLength = null,
    },
    ref,
  ) => (
    <input
      ref={ref}
      type={type || "text"}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      className={style}
      onChange={onChange}
      maxLength={maxLength}
      required
    />
  ),
);

Input.displayName = "Input";

export default Input;
