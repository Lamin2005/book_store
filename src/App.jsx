import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
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
import AdminData from "./admin/AdminData";
import Addbook from "./admin/Addbook";
import BookLists from "./admin/BookLists";
import Menu from "./admin/Menu";
import { BookProvider } from "./context/BookContext";
import { UserListProvider } from "./context/UserListContext";
import UserLists from "./admin/UserLists";
import { MesssageProvider } from "./context/MessageContext";

function App() {
  return (
    <MesssageProvider>
      <UserProvider>
        <BookProvider>
          <CartProvider>
            <UserListProvider>
              <div className="App">
                <HashRouter>
                  <Routes>
                    <Route path="/" element={<ShareLayout />}>
                      <Route index element={<Home />} />
                      <Route path="/books" element={<Books />} />
                      <Route
                        path="/books/:productID"
                        element={<BookDetail />}
                      />
                      <Route path="/cart" element={<Card />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/sigin" element={<Sigin />} />
                      <Route
                        path="/userdashboard"
                        element={<UserDashboard />}
                      />
                    </Route>
                    <Route path="/adminDashboard" element={<AdminDashboard />}>
                      <Route index element={<AdminData />} />
                      <Route
                        path="/adminDashboard/addbook"
                        element={<Addbook />}
                      />
                      <Route
                        path="/adminDashboard/booklists"
                        element={<BookLists />}
                      />
                      <Route
                        path="/adminDashboard/userlists"
                        element={<UserLists />}
                      />
                      <Route path="/adminDashboard/menu" element={<Menu />} />
                    </Route>
                    <Route path="*" element={<Error />} />
                  </Routes>
                </HashRouter>
              </div>
            </UserListProvider>
          </CartProvider>
        </BookProvider>
      </UserProvider>
    </MesssageProvider>
  );
}

export default App;
