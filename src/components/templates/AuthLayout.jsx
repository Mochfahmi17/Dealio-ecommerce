import { Link } from "react-router-dom";

const AuthLayout = ({ children, title, description, type }) => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="animate__animated animate__fadeIn w-full max-w-sm px-4 md:max-w-md md:p-0">
        <h2 className="mb-2 text-4xl font-bold">{title}</h2>
        <p className="mb-8 text-sm font-medium text-slate-500">{description}</p>
        {children}
        {type === "login" ? (
          <p className="mt-4 text-center text-xs md:text-sm">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="font-semibold transition-all ease-in-out hover:text-blue-500"
            >
              Sign Up
            </Link>
          </p>
        ) : (
          <p className="mt-4 text-center text-xs md:text-sm">
            Already have account?{" "}
            <Link
              to="/login"
              className="font-semibold transition-all ease-in-out hover:text-blue-500"
            >
              Sign In
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthLayout;
