import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import { UserListContext } from "../context/UserListContext";
import { MessageContext } from "../context/MessageContext";
import { useCart } from "../context/Context";

let AdminData = () => {
  let { books } = useContext(BookContext);
  let { users } = useContext(UserListContext);
  let { totalAmount } = useCart();
  let { messages,deleteMessage } = useContext(MessageContext);
  console.log(books);

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
        <div className="view_list">
          <div className="list">
            <h3>Users</h3>
            <h2>{users.length}</h2>
          </div>
          <div className="list">
            <h3>Books</h3>
            <h2>{books.length}</h2>
          </div>
          <div className="list">
            <h3>Amount</h3>
            <h2>{totalAmount}</h2>
          </div>
        </div>
        <div className="messages_list">
          <h2 style={{ color: "#61dafb" }}>Messages</h2>
          <div className="messages">
            {messages.map((m) => {
              return (
                <div className="message" key={m.id}>
                  <p><span style={{color:"greenyellow",fontWeight:"bolder"}}>Noti</span> : {m.noti}</p>
                  <button className="m_db" onClick={()=>{
                    deleteMessage(m.id);
                  }}>🗑️</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminData;
