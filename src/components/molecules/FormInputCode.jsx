import Label from "../atoms/Label";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

const FormInputCode = ({ htmlFor, label, type, name, id, placeholder }) => {
  return (
    <>
      <Label
        htmlFor={htmlFor}
        text={label}
        className="mb-1 block text-xs font-semibold uppercase text-slate-500"
      />
      <div className="flex items-center">
        <Input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          style="w-full md:py-2 py-3 px-4 text-xs md:text-base placeholder:opacity-50 transition-all ease-in-out text-primary border-2 focus:border-primary outline-none"
        />
        <Button className="w-1/2 border-2 border-primary bg-primary px-4 py-3 text-xs text-white md:py-2 md:text-base">
          Submit
        </Button>
      </div>
    </>
  );
};

export default FormInputCode;
