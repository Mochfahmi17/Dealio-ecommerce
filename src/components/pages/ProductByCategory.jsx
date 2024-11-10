import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageLayout from "../templates/PageLayout";
import Card from "../organism/Card";

const ProductByCategory = () => {
  const [productByCategory, setProductByCategory] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (params.category) {
      const getByCategory = async () => {
        try {
          const response = await axios.get(
            `/products/category/${params.category}`,
          );
          setProductByCategory(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      getByCategory();
    }
  }, [params]);
  return (
    <PageLayout>
      <h1 className="animate__animated animate__fadeIn mb-8 border-b-2 pb-2 text-2xl uppercase md:text-4xl">
        Category by {params.category}{" "}
        <span className="align-super text-lg font-medium">
          {productByCategory.length}
        </span>
      </h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8">
        {productByCategory.map((productByCategory, i) => {
          return <Card key={i} index={i} data={productByCategory} />;
        })}
      </div>
    </PageLayout>
  );
};

export default ProductByCategory;
