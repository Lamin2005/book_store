import "./Admin.css";
import { Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/Context";
import { useContext,useEffect } from "react";

let AdminDashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const { clearCart } = useCart();

  console.log(user);

  let navigate = useNavigate();

  const adminlogout = () => {
    sessionStorage.removeItem("currentUser");
    clearCart();
    setUser(null); // ✅ update context
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="admin">
        <h1>Loading....</h1>
      </div>
    );
  }

  return (
    <div className="admin">
      <div className="header">
        <h1>Admin Dashboard </h1>
      </div>
      <div className="admin_section">
        <nav className="admin_nav">
          <div className="profile">
            <div className="profile_img">
              <img src={user.image} alt="User_img" />
            </div>
            <h3>
              {user.name}({user.role})
            </h3>
            <p>{user.email}</p>
          </div>
          <div className="sections">
            <a href="/adminDashboard" className="section1 section">
              Home
            </a>
            <a href="/adminDashboard/addbook" className="section2 section">
              Add Book
            </a>
            <a href="/adminDashboard/booklists" className="section4 section">
              Book List
            </a>
            <a href="/adminDashboard/userlists" className="section2 section">
              User List
            </a>
            <button className="admin-logout" onClick={adminlogout}>
              Logout
            </button>
          </div>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
