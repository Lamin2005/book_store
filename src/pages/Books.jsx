import "./Home.css";
import { useCart } from "../context/Context";
import { book } from "../component/Book";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

let Books = () => {
  const { cart, addToCart } = useCart();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  console.log(cart);

  return (
    <div className="home">
      <div className="header">
        <h1>Book Store App</h1>
      </div>
      <div className="books">
        {book.map((li) => {
          const inCart = cart.some((item) => item.id === li.id);
          return (
            <div className="book" key={li.id}>
              <div className="bookimg"></div>
              <div className="text">
                <p>Book Name :{li.name}</p>
                <p>Price : {li.price} </p>
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
