import { forwardRef } from "react";
import Input from "../atoms/Input";
import Label from "../atoms/Label";

const FormInput = forwardRef(
  (
    {
      htmlFor,
      label,
      type,
      name,
      id,
      placeholder,
      maxLength = null,
      onChange = null,
    },
    ref,
  ) => {
    return (
      <div className="mb-6">
        <Label
          htmlFor={htmlFor}
          text={label}
          className="block text-xs font-medium"
        />
        <Input
          type={type}
          name={name}
          id={id}
          ref={ref}
          maxLength={maxLength}
          onChange={onChange}
          placeholder={placeholder}
          style="w-full py-2 placeholder:opacity-50 transition-all ease-in-out text-primary border-b-2 focus:border-primary outline-none md:text-base text-sm"
        />
      </div>
    );
  },
);

FormInput.displayName = "FormInput";

export default FormInput;
