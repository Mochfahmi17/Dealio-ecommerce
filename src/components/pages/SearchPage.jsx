import { useContext } from "react";
import PageLayout from "../templates/PageLayout";
import { ProductSearch } from "../../context/ProductSearch";
import Card from "../organism/Card";

const SearchPage = () => {
  const { filteredProducts } = useContext(ProductSearch);

  return (
    <PageLayout>
      <h1 className="mb-8 border-b-2 pb-2 text-2xl uppercase md:text-4xl">
        Search Result{" "}
        <span className="align-super text-lg font-medium">
          {filteredProducts.length}
        </span>
      </h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8">
        {filteredProducts.map((product, i) => {
          return <Card key={i} index={i} data={product} />;
        })}
      </div>
    </PageLayout>
  );
};

export default SearchPage;
