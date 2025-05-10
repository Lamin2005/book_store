import React from "react";
import { useCart } from "../context/Context";
import "./Cart.css";

let Cart = () => {
  let { cart, updateQuantity, removeFromCart } = useCart();
  let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  let screensize = window.innerWidth;
  console.log(screensize);

  return (
    <div className="home">
      <div className="header">
        <h1> Welcome from Shopping Cart</h1>
      </div>
      <div className="carts">
        {cart.length === 0 ? (
          <div className="cart">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{ marginBottom: "10px" }}
                className="cart"
              >
                <div className="titles">
                  <div className="title">
                    <h3>Book</h3>
                    <div className="cartimg"></div>
                  </div>
                  <div className="title">
                    <h3>Title</h3>

                    <strong>{item.name}</strong>
                  </div>
                  <div className="title">
                    <h3>Price</h3>
                    <strong>${item.price}</strong>
                  </div>
                  <div className="title">
                    <h3>Quantity</h3>

                    <button onClick={() => updateQuantity(item.id, -1)}>
                      -
                    </button>
                    <button onClick={() => updateQuantity(item.id, 1)}>
                      +
                    </button>

                    <strong style={{ margin: "5px" }}>{item.quantity}</strong>

                    <button
                      className="remove"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>

                  <div className="title">
                    <h3>Total Price</h3>
                    <strong>${item.price * item.quantity}</strong>
                  </div>
                </div>
              </div>
            ))}
            <div className="total-title">
              <h3 style={{ textAlign: "right" }}>Total-Purchase : ${total}</h3>
            </div>

            <button className="checkout">Checkout</button>

           
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
