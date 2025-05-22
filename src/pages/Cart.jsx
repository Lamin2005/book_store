import React, { useContext } from "react";
import { useCart } from "../context/Context";
import "./Cart.css";
import { UserContext } from "../context/UserContext";


let Cart = () => {
  let {
    cart,
    updateQuantity,
    removeFromCart,
    total,
    handlePurchase,
    isPurchased,
    orderDetails,
    setIsPurchased,
    handleSaveImage,
    receiptRef
  
  } = useCart();

  

  let { user } = useContext(UserContext);

  return (
    <div className="home">
      <div className="header">
        <h1> Welcome from Shopping Cart</h1>
      </div>
      <div className="carts">
        {isPurchased && orderDetails && (
          <div className="receipt-container" ref={receiptRef}>
            <div className="receipt-header">
              <h2>Payment Receipt</h2>
              <div className="receipt-id">Order ID:{orderDetails.id}</div>
            </div>

            <div className="receipt-section">
              <h4>Customer Info</h4>
              <p>Name:{user.name}</p>
              <p>Email: {user.email}</p>
              <p>Date: {orderDetails.date}</p>
            </div>

            <div className="receipt-section item-list">
              <h4>Items</h4>
              <div className="item">
                    <span><strong>Book</strong> </span>
                    <span><strong>Quality </strong></span>
                    <span><strong>Price</strong></span>
                  </div>
              {orderDetails.items.map((item) => {
                return (
                  <div className="item" key={item.bid}>
                    <span>{item.bname}</span>
                    <span> {item.quantity}</span>
                    <span> {item.bprice * item.quantity}Kyats</span>
                  </div>
                );
              })}
            </div>

            <div className="total">
              <span>Total</span>
              <span>{orderDetails.total} Kyats</span>
            </div>

            <div className="footer">
              Thank you for your purchase!
              <br />
              Receipt generated electronically.
              <br />
              Developed by La Min Hein.
            </div>
          </div>
        )}

        {!isPurchased && cart.length === 0 && (
          <div className="cart">
            <p>Your cart is empty.</p>
          </div>
        )}

        {!isPurchased && cart.length > 0 && (
          <>
            {cart.map((item) => (
              <div
                key={item.bid}
                style={{ marginBottom: "10px" }}
                className="cart"
              >
                <div className="titles">
                  <div className="title">
                    <h3>Book</h3>
                    <div className="cartimg">
                      <img src={item.bimg} alt="book-img" />
                    </div>
                  </div>
                  <div className="title">
                    <h3>Title</h3>

                    <strong>{item.bname}</strong>
                  </div>
                  <div className="title">
                    <h3>Price</h3>
                    <strong>{item.bprice}Kyats</strong>
                  </div>
                  <div className="title">
                    <h3>Quantity</h3>

                    <button onClick={() => updateQuantity(item.bid, -1)}>
                      -
                    </button>
                    <button onClick={() => updateQuantity(item.bid, 1)}>
                      +
                    </button>

                    <strong style={{ margin: "5px" }}>{item.quantity}</strong>

                    <button
                      className="remove"
                      onClick={() => removeFromCart(item.bid)}
                    >
                      Remove
                    </button>
                  </div>

                  <div className="title">
                    <h3>Total Price</h3>
                    <strong>{item.bprice * item.quantity}Kyats</strong>
                  </div>
                </div>
              </div>
            ))}
            <div className="total-title">
              <h3 style={{ textAlign: "right" }}>
                Total-Purchase : {total}Kyats
              </h3>
            </div>

            <button className="checkout" onClick={handlePurchase}>
              Checkout
            </button>
          </>
        )}

        {isPurchased && orderDetails && (
          <>
            <button className="checkout" onClick={handleSaveImage}>
              Save As Image
            </button>
            <button
              className="checkout"
              onClick={() => {
                setIsPurchased(false);
              }}
            >
              Cancle
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
