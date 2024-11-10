import PageLayout from "../templates/PageLayout";
import Card from "../organism/Card";
import { useContext } from "react";
import { ProductSearch } from "../../context/ProductSearch";

const HomePage = () => {
  const { products } = useContext(ProductSearch);

  return (
    <PageLayout>
      <h1 className="animate__animated animate__fadeIn mb-8 border-b-2 pb-2 text-2xl uppercase md:text-4xl">
        Welcome to Dealio
      </h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8">
        {products.map((data, i) => {
          return <Card key={i} index={i} data={data} />;
        })}
      </div>
    </PageLayout>
  );
};

export default HomePage;
