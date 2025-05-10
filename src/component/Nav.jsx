import React, { useContext, useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useCart } from "../context/Context";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const { cart, clearCart } = useCart();

  useEffect(() => {
    const currentUser = sessionStorage.getItem("currentUser");
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, [setUser]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("currentUser");
    clearCart();
    setUser(null); // ✅ update context
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <a style={{ fontSize: "25px" }} href="/">
          📚 Book Store
        </a>
        <a href="/cart">
          🛒
          {cart.reduce((sum, item) => sum + item.quantity, null)}
        </a>
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/books">Books</a>
        </li>
        <li>
          <a href="/cart">Cart</a>
        </li>

        {user ? (
          user.role === "admin" ? (
            <>
              <li>
                <a href="/adminDashboard">Dashboard</a>
              </li>
              <li>
                
                  <button
                    onClick={handleLogout}
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "#61dafb",
                      fontSize: "15px",
                      cursor: "pointer",
                    }}
                  >
                    Logout
                  </button>
                
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="/userDashboard">Dashboard</a>
              </li>
              <li>
                
                  <button
                    onClick={handleLogout}
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "#61dafb",
                      fontSize: "15px",
                      cursor: "pointer",
                    }}
                  >
                    Logout
                  </button>
        
              </li>
            </>
          )
        ) : (
          <li>
            <a href="/login">Login</a>
          </li>
        )}
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </div>
    </nav>
  );
}
