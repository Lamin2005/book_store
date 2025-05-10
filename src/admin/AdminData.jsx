import { NavLink } from "react-router-dom";

let AdminData = ({ users }) => {
  return (
    <main className="admin_main">
      <div className="admin_main_header">
        <h1 style={{ color: "#61dafb" }}>Dashboard</h1>
        <div className="menu">
          <NavLink
            to="/adminDashboard/menu"
            style={{ textDecoration: "none", color: " #61dafb" }}
          >
            Menu
          </NavLink>
        </div>
      </div>

      <div className="admin_home">
        x
        <div className="view_list">
          <div className="list">
            <h3>Users</h3>
            <h2>{users.length}</h2>
          </div>
          <div className="list">
            <h3>Books</h3>
            <h2>800</h2>
          </div>
          <div className="list">
            <h3>Amount</h3>
            <h2>$800</h2>
          </div>
        </div>
        <div className="messages_list">
          <h2 style={{ color: "#61dafb" }}>Messages</h2>
          <div className="messages">
            <div className="message">message</div>
            <div className="message">message</div>
            <div className="message">message</div>
            <div className="message">message</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminData;
