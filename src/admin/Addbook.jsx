import { NavLink } from "react-router-dom";
import "./Addbook.css";

let Addbook = () => {
  return (
    <main className="admin_main">
      <div className="admin_main_header">
        <h1 style={{ color: "#61dafb" }}>Add Book</h1>
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
        <form className="form-container">
          <input type="text" required placeholder="Enter Book Name ---"/>

    
          <input type="text" required placeholder="Enter Book Price ---" />

          <input type="text" required placeholder="Enter Book Author ---" />

          <input type="text" required  placeholder="Enter Book Year ---"/>

          
          <input type="number" required placeholder="Enter Book Quality ---" min={1} />

          <textarea required >Enter Book Name ---</textarea>

          <button type="submit">Add New Book</button>
        </form>
      </div>
    </main>
  );
};

export default Addbook;
