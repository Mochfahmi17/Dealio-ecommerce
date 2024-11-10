import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import Swal from "sweetalert2";

const ProductSearchContext = createContext();

const ProductSearchProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || [],
  );
  const [isClicked, setIsClicked] = useState(false);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || {},
  );
  const [isClickedCart, setIsClickedCart] = useState(false);

  const addToCart = (id) => {
    setIsClickedCart(true);
    setTimeout(() => {
      setIsClickedCart(false);
    }, 100);

    if (!cartItems[id]) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Success add to cart!",
      });
      setCartItems((prev) => ({ ...prev, [id]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    }
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const updateCart = { ...prev };
      if (updateCart[id] > 1) {
        updateCart[id] -= 1;
      } else {
        delete updateCart[id];
      }
      return updateCart;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        totalAmount += itemInfo?.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const handleWishlist = (product) => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 100);
    setWishlist((prevWishlist) => {
      if (!prevWishlist.some((item) => item.id === product.id)) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Success add to wishlist!",
        });
        return [...prevWishlist, product];
      } else {
        return prevWishlist.filter((item) => item.id !== product.id);
      }
    });
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [cartItems, wishlist]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) => {
      return product.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredProducts(filtered);
  }, [products, searchQuery]);

  const contextValue = {
    products,
    searchQuery,
    setSearchQuery,
    filteredProducts,
    wishlist,
    setWishlist,
    handleWishlist,
    isClicked,
    cartItems,
    addToCart,
    removeFromCart,
    isClickedCart,
    getTotalCartAmount,
  };

  return (
    <ProductSearchContext.Provider value={contextValue}>
      {children}
    </ProductSearchContext.Provider>
  );
};

export const ProductSearch = ProductSearchContext;
export default ProductSearchProvider;
