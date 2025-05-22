import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./OrderHistory.css";
import { useCart } from "../context/Context";

const OrderHistory = () => {
  const { user } = useContext(UserContext);
  const { getUserOrderHistory, orders, setOrders } = useCart();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    if (user?.email) {
      const history = getUserOrderHistory(user.email);
      setOrder(history);
    }
  }, [user]);

  if (!user) {
    return <p>Loading user data...</p>;
  }

  return (
    <div className="history-container">
      {order.length === 0 ? (
        <div className="no-order">
          <p>No orders yet.</p>
        </div>
      ) : (
        order.map((order, index) => (
          <div className="order-card" key={index}>
            <div className="order-header">
              <span>
                <strong>Order ID:</strong> {order.id}
              </span>
              <span>
                <strong>Date:</strong> {order.date}
              </span>
            </div>
            <div className="order-items">
              {order.items.map((item) => (
                <div className="order-item" key={item.bid}>
                  <span>{item.bname}</span>
                  <span>Qty: {item.quantity}</span>
                  <span>{item.bprice * item.quantity} Ks</span>
                </div>
              ))}
            </div>
            <div className="order-total">
              <strong>Total:</strong> {order.total} Ks
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;
