import { useContext } from "react";
import PageLayout from "../templates/PageLayout";
import { ProductSearch } from "../../context/ProductSearch";
import Card from "../organism/Card";
import wishlistImage from "../../assets/img/favorite_cart.png";
import Image from "../atoms/Image";

const WishlistPage = () => {
  const { wishlist } = useContext(ProductSearch);

  return (
    <PageLayout>
      <h1 className="animate__animated animate__fadeIn mb-8 border-b-2 pb-2 text-2xl uppercase md:text-4xl">
        Wishlist
      </h1>
      <div
        className={`grid ${wishlist.length === 0 ? "grid-cols-1" : "grid-cols-2 md:grid-cols-3"} gap-4 md:gap-8`}
      >
        {wishlist.length === 0 ? (
          <div className="animate__animated animate__fadeIn w-full max-w-xs place-self-center">
            <Image
              src={wishlistImage}
              className="mb-4 h-full w-full object-contain"
            />
            <h2 className="text-center text-xl font-semibold text-slate-400">
              Item not found!
            </h2>
          </div>
        ) : (
          wishlist.map((data, i) => {
            return <Card key={i} index={i} data={data} />;
          })
        )}
      </div>
    </PageLayout>
  );
};

export default WishlistPage;
