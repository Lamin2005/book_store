import "./Home.css";
import { useCart } from "../context/Context";
import { BookContext } from "../context/BookContext";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

let Books = () => {
  const { cart, addToCart } = useCart();
  const { books } = useContext(BookContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  console.log(cart);

  return (
    <div className="home">
      <div className="header">
        <h1>Book Store App</h1>
      </div>
      <div className="books">
        {books.map((li) => {
          const inCart = cart.some((item) => item.bid === li.bid);
          return (
            <div className="book" key={li.bid}>
              <div className="bookimg">
                <img src={li.bimg} alt="book-img" />
              </div>
              <div className="text">
                <p>Book Name :{li.bname}</p>
                <p>Price : {li.bprice} </p>
                {user ? (
                  <>
                    <button onClick={() => addToCart(li)} disabled={inCart}>
                      {inCart ? "Added" : "Add to Cart"}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        alert("Please Login First!");
                        navigate("/login");
                      }}
                    >
                      Add to Cart
                    </button>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Books;
