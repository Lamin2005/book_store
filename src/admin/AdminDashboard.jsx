import "./Admin.css";
import logo from "../logo.svg";
import { Outlet } from "react-router-dom";

let AdminDashboard = () => {
  return (
    <div className="admin">
      <div className="header">
        <h1>Admin Dashboard </h1>
      </div>
      <div className="admin_section">
        <nav className="admin_nav">
          <div className="profile">
            <div className="profile_img">
              <img src={logo} alt="User_img" />
            </div>
            <h3>La Min Hein(Admin)</h3>
            <p>laminhein@gmail.com</p>
          </div>
          <div className="sections">
            <a href="/adminDashboard" className="section1 section">
              Home
            </a>
            <a href="/adminDashboard/profile" className="section1 section">
              Profile
            </a>
            <a href="/adminDashboard/addbook" className="section2 section">
              + Add Book
            </a>
            <a href="/adminDashboard/booklists" className="section4 section">
              Book List
            </a>
            <a href="/adminDashboard/userlist" className="section2 section">
             User List
            </a>
            <a href="/adminDashboard/logout" className="section3 section">
             Logout
            </a>
          </div>
        </nav>
        <Outlet/>
      </div>
    </div>
  );
};

export default AdminDashboard;
