const PageLayout = ({ children }) => {
  return (
    <main>
      <section className="px-4 py-28 md:px-8 lg:min-h-screen">
        <div className="container mx-auto">{children}</div>
      </section>
    </main>
  );
};

export default PageLayout;
