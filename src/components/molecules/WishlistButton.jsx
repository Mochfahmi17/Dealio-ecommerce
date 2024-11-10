import Button from "../atoms/Button";

const WishlistButton = ({ handleWishlist, product, isClicked, wishlist }) => {
  return (
    <Button
      onClick={() => handleWishlist(product)}
      className={`group ${isClicked && "scale-75"} rounded-lg border-2 border-primary px-8 py-2 text-2xl transition-all`}
      title="wishlist"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`h-8 w-8 fill-none ${wishlist.some((item) => item.id === product.id) ? "fill-red-700 stroke-red-700" : "fill-none stroke-primary"} stroke-2`}
      >
        <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z"></path>
      </svg>
    </Button>
  );
};

export default WishlistButton;
