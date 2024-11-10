import LoginForm from "../organism/LoginForm";
import AuthLayout from "../templates/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout
      title="Login"
      description="Enter your email and password to order."
      type="login"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
