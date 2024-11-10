import Button from "../atoms/Button";
import FormInput from "../molecules/FormInput";

const RegisterForm = ({ action, method }) => {
  return (
    <form action={action} method={method}>
      <FormInput
        htmlFor="name"
        label="Name"
        name="name"
        id="name"
        placeholder="John Doe"
      />
      <FormInput
        htmlFor="email"
        label="Email"
        type="email"
        name="email"
        id="email"
        placeholder="name@example.com"
      />
      <FormInput
        htmlFor="password"
        label="Password"
        type="password"
        name="password"
        id="password"
        placeholder="********"
      />
      <FormInput
        htmlFor="repassword"
        label="Re-Password"
        type="password"
        name="repassword"
        id="repassword"
        placeholder="********"
      />
      <Button
        type="submit"
        className="w-full rounded bg-primary py-2 text-center text-white transition-all hover:bg-opacity-90"
      >
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
