import RegisterForm from "../organism/RegisterForm";
import AuthLayout from "../templates/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout
      title="Register"
      description="Register Now and Enjoy Easier Shopping!"
      type="register"
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
