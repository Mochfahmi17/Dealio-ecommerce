const ErrorPage = () => {
  return (
    <div className="animate__animated animate__fadeIn flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="flex flex-wrap items-center justify-center text-center">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-primary md:text-4xl">
            Oops! Page Not Found
          </h1>
          <p className="text-sm font-medium text-slate-500 md:text-base">
            It seems like this page doesn&apos;t exist.
          </p>
        </div>
        <img
          src="https://media.tenor.com/GTb_Hh2z_qcAAAAi/capsulland-animation.gif"
          alt="Cote Lovely"
          className="mt-4 w-52"
        />
      </div>
    </div>
  );
};

export default ErrorPage;
