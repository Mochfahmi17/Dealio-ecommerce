import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductSearch } from "../../context/ProductSearch";
import axios from "axios";
import Image from "../atoms/Image";
import ProductTitle from "../molecules/ProductTitle";
import ProductPrice from "../molecules/ProductPrice";
import AddToCart from "../molecules/AddToCart";
import WishlistButton from "../molecules/WishlistButton";

const ProductDetail = () => {
  const [detailProduct, setDetailProduct] = useState([]);
  const params = useParams();
  const { handleWishlist, wishlist, isClicked, addToCart, isClickedCart } =
    useContext(ProductSearch);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/${params.product}/${params.id}`);
        return setDetailProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [params.id, params.product, setDetailProduct]);

  return (
    <div className="animate__animated animate__fadeIn grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="h-[380px] md:h-[430px]">
        <Image
          src={detailProduct.image}
          alt={detailProduct.title}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="text-primary">
        <ProductTitle title={detailProduct.title} />
        <ProductPrice price={detailProduct.price} />
        <p className="my-5 text-sm text-slate-500 md:text-base">
          {detailProduct.description}
        </p>
        <div className="mt-12 flex items-center gap-4">
          <AddToCart
            addToCart={addToCart}
            productId={detailProduct.id}
            isClickedCart={isClickedCart}
          />
          <WishlistButton
            handleWishlist={handleWishlist}
            isClicked={isClicked}
            wishlist={wishlist}
            product={detailProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
