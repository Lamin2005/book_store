import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { toPng } from "html-to-image";
import { UserContext } from "./UserContext";
import { BookContext } from "./BookContext";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const stored = sessionStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  let [isPurchased, setIsPurchased] = useState(false);
  let [orderDetails, setOrderDetails] = useState(null);
  let { user } = useContext(UserContext);
  let [totalAmount,setTotalAmount] = useState(0);
  let {books} = useContext(BookContext);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
     let t = JSON.parse(localStorage.getItem('total')) || 0;
     if(t){
      setTotalAmount(t);
     }
  },[]);

  useEffect(() => {
    localStorage.setItem("total", JSON.stringify(totalAmount));
  },[totalAmount]);

  const addToCart = (product) => {
    setCart((prev) =>
      prev.some((item) => item.bid === product.bid)
        ? prev
        : [...prev, { ...product, quantity: 1 }]
    );
  };

  const clearCart = () => {
    setCart([]);
    sessionStorage.removeItem("cart");
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.bid !== id));
  };

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev.flatMap((item) => {
        if (item.bid === id) {

          const book = books.find((b)=>b.bid === id);
          if(!book) return [item];

          let newQty = Math.max(0, item.quantity + delta);
          
          if(newQty > item.bquality
          ){
            alert("Not enough quanity");
            return [item];
          }
          if (newQty <= 0) {
            return [];
          }

          return [{ ...item, quantity: newQty }];
        }
        return [item];
      })
    );
  };

  const saveOrderHistory = (userEmail, order) => {
    let orders = JSON.parse(localStorage.getItem(`order-${userEmail}`)) || [];
    orders.push(order);
    localStorage.setItem(`order-${userEmail}`, JSON.stringify(orders));
  };

  const getUserOrderHistory = (userEmail) => {
    return JSON.parse(localStorage.getItem(`order-${userEmail}`)) || [];
  };
  

  const total = cart.reduce(
    (sum, item) => sum + item.bprice * item.quantity,
    0
  );

  const handlePurchase = () => {
    alert("Your Payment Successful");
    const order = {
      id: uuidv4().slice(0, 8), // Generate short order ID
      date: new Date().toLocaleString(),
      items: cart,
      total: cart.reduce((sum, item) => sum + item.bprice * item.quantity, 0),
    };
    setOrderDetails(order);
    setCart([]);
    setIsPurchased(true);
    saveOrderHistory(user.email, order);
    setTotalAmount((prev) => prev + order.total);
  };

  const receiptRef = useRef();

  const handleSaveImage = () => {
    if (receiptRef.current) {
      toPng(receiptRef.current)
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = `receipt-${orderDetails?.id}.png`;
          link.href = dataUrl;
          link.click();

          setIsPurchased(false);
        })
        .catch((err) => {
          console.error("Error generating image:", err);
        });
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total,
        handlePurchase,
        isPurchased,
        setIsPurchased,
        orderDetails,
        handleSaveImage,
        receiptRef,
        getUserOrderHistory,
        totalAmount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
