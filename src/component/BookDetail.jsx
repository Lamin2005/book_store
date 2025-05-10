import { NavLink, useParams } from "react-router-dom";
import { book } from "./Book";
import "./BookDetail.css";

let BookDetail = () => {
  let { productID } = useParams();

  let productItem = book.find((product) => product.id.toString() === productID);

  let { name, price,author, year, description } = productItem;
  console.log(productItem);

  return (
    <div className="bookdetailtitle">
      <div className="bookdetailheader">
        <h1>Welcome From Book Store App</h1>
      </div>
      <div className="booksdetail">
        <div className="bookd">
          <div className="bookdetail">
            <div className="bookdetailimg"></div>
            <div className="bookdetailtext">
              <h2>Book Detail</h2>
              <p>
                Book Name : <strong>{name}</strong>
              </p>
              <p>
                Price : <strong>{price}</strong>
              </p>
              <p>
                Author : <strong>{author}</strong>
              </p>
              <p>
                Release Year : <strong>{year}</strong>
              </p>
              <p>
                Review :{" "}
                <strong>
                <span style={{color:'gold'}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span> 
                </strong>
              </p>
              <a href={`/books`}>
                <button style={{ marginTop: "10px" }}>Go to Book</button>
              </a>

              <NavLink to="/" style={{color:" #37c1e7"}}>Back to Home</NavLink>
            </div>
          </div>
          <div className="recentbook">
            <h2>Recent Books</h2>
            <div className="recent">
                <div className="recentimg"></div>
                <p>Name: La Min Hein</p>
            </div>
            <div className="recent">
                <div className="recentimg"></div>
                <p>Name: La Min Hein</p>
            </div>
            <div className="recent">
                <div className="recentimg"></div>
                <p>Name: La Min Hein</p>
            </div>
            <div className="recent">
                <div className="recentimg"></div>
                <p>Name: La Min Hein</p>
            </div>
          </div>
        </div>
        <div className="description">
           <h2>Description</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
