import logo from "../logo.svg";

let Menu = () => {
    return(
        <nav className="admin_nav2">
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
    );
}

export default Menu;