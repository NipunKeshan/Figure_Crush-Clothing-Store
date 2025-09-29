import { createContext, use, useState } from "react";
import { products } from "../assets/assets";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({}); // { [productId]: { [size]: qty } }
  const navigate = useNavigate();

  const safeClone = (obj) =>
    typeof structuredClone === "function"
      ? structuredClone(obj)
      : JSON.parse(JSON.stringify(obj)); // simple fallback

  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error("Please select a size");
      return;
    }
    setCartItems((prev) => {
      const next = safeClone(prev);
      if (!next[itemId]) next[itemId] = {};
      next[itemId][size] = (next[itemId][size] || 0) + 1;
      return next;
    });
  };

  const updateQuantity = (itemId, size, quantity) => {
    setCartItems((prev) => {
      const next = safeClone(prev);
      if (!itemId || !size) return prev;

      const q = Number(quantity) || 0;
      if (!next[itemId]) next[itemId] = {};

      if (q <= 0) {
        // remove size; if empty, remove product
        delete next[itemId][size];
        if (Object.keys(next[itemId]).length === 0) {
          delete next[itemId];
        }
      } else {
        next[itemId][size] = q;
      }
      return next;
    });
  };

  const getCartCount = () => {
    let total = 0;
    for (const id in cartItems) {
      for (const size in cartItems[id]) {
        const qty = cartItems[id][size] || 0;
        if (qty > 0) total += qty;
      }
    }
    return total;
  };

  const getCartAmount = () => {
    let total = 0;
    for (const id in cartItems) {
      const product = products.find((p) => String(p._id) === String(id));
      if (!product) continue;
      for (const size in cartItems[id]) {
        const qty = cartItems[id][size] || 0;
        if (qty > 0) total += product.price * qty;
      }
    }
    return total;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    updateQuantity,
    getCartCount,
    getCartAmount,
    navigate
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
      <ToastContainer />
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
