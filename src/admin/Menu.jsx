import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/Context";
import "./Admin.css";


let Menu = () => {


   const { user,setUser } = useContext(UserContext);
   const {  clearCart } = useCart();
   
   let navigate = useNavigate();


  const adminlogout = () => {
    sessionStorage.removeItem("currentUser");
    clearCart();
    setUser(null); // ✅ update context
    navigate("/login");
  };

    return(
        <nav className="admin_nav2">
          <div className="profile">
            <div className="profile_img">
              <img src={user.image} alt="User_img" />
            </div>
            <h3>{user.name}({user.role})</h3>
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
    );
}

export default Menu;