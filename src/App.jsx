import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShareLayout from "./component/ShareLayout";
import Home from "./pages/Home";
import Card from "./pages/Cart";
import Login from "./pages/Login";
import Error from "./pages/Error";
import BookDetail from "./component/BookDetail";
import Books from "./pages/Books";
import { CartProvider } from "./context/Context";
import Sigin from "./pages/Sigin";
import { UserProvider } from "./context/UserContext";
import UserDashboard from "./user/UserDashboard";
import AdminDashboard from "./admin/AdminDashboard";
import { useEffect } from "react";
import AdminData from "./admin/AdminData";
import Addbook from "./admin/Addbook";
import BookLists from "./admin/BookLists";
import Menu from "./admin/Menu";


function App() {
  
  useEffect(() => {
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    const hasAdmin = existingUsers.some(user => user.role === "admin");

    if (!hasAdmin) {
      const defaultAdmin = {
        id: 1,
        name: "Admin",
        email: "admin@gmail.com",
        password: "admin123",
        role: "admin",
        image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
      };

      const updatedUsers = [...existingUsers, defaultAdmin];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      console.log("✅ Default admin added");
    }
  }, []);

  let users = JSON.parse(localStorage.getItem("users"));

  return (
    <CartProvider>
      <UserProvider>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<ShareLayout />}>
                <Route index element={<Home />} />
                <Route path="/books" element={<Books />} />
                <Route path="/books/:productID" element={<BookDetail />} />
                <Route path="/cart" element={<Card />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sigin" element={<Sigin />} />
                <Route path="/userdashboard" element={<UserDashboard />} /> 
              </Route>
              <Route path="/adminDashboard" element={<AdminDashboard />}>
                  <Route index element={<AdminData users={users}/>}/>
                  <Route path="/adminDashboard/addbook" element={<Addbook/>}/>
                  <Route path="/adminDashboard/booklists" element={<BookLists/>}/>
                  <Route path="/adminDashboard/menu" element={<Menu/>}/>
              </Route>
              <Route path="*" element={<Error />} />
            </Routes>
          </BrowserRouter>
        </div>
      </UserProvider>
    </CartProvider>
  );
}

export default App;
