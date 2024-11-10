import Button from "../atoms/Button";

const AddToCart = ({ addToCart, productId, isClickedCart }) => {
  return (
    <Button
      onClick={() => addToCart(productId)}
      className={`flex-1 ${isClickedCart && "scale-75"} rounded-lg bg-primary py-3 text-xl font-light uppercase text-white transition-all hover:bg-opacity-90`}
    >
      Add To Cart
    </Button>
  );
};

export default AddToCart;
