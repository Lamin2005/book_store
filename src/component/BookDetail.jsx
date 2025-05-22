import { NavLink, useParams } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import "./BookDetail.css";
import { useContext } from "react";
import { ba1,ba2,ba3,ba4 } from "./Book";
import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpg";
import b4 from "../assets/b4.jpg";

let BookDetail = () => {
  let { productID } = useParams();
  let {books} = useContext(BookContext);

  let productItem = books.find((product) => product.bid.toString() === productID);

  if(!productItem){
    return;
  }
  let { bimg,bname, bprice,bauthor, byear, bdescription } = productItem;
  console.log(productItem);

  return (
    <div className="bookdetailtitle">
      <div className="bookdetailheader">
        <h1>Welcome From Book Store App</h1>
      </div>
      <div className="booksdetail">
        <div className="bookd">
          <div className="bookdetail">
            <div className="bookdetailimg">
              <img src={bimg} alt="book_img" />
            </div>
            <div className="bookdetailtext">
              <h2>Book Detail</h2>
              <p>
                Book Name : <strong>{bname}</strong>
              </p>
              <p>
                Price : <strong>{bprice}</strong>
              </p>
              <p>
                Author : <strong>{bauthor}</strong>
              </p>
              <p>
                Release Year : <strong>{byear}</strong>
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
                <div className="recentimg">
                  <img src={b1} alt="book_img" />
                </div>
                <p>Name:{ba1}</p>
            </div>
            <div className="recent">
                <div className="recentimg">
                <img src={b4} alt="book_img" />
                </div>
                <p>Name: {ba2}</p>
            </div>
            <div className="recent">
                <div className="recentimg">
                <img src={b3} alt="book_img" />
                </div>
                <p>Name:{ba3}</p>
            </div>
            <div className="recent">
                <div className="recentimg">
                <img src={b2} alt="book_img" />
                </div>
                <p>Name:{ba4}</p>
            </div>
          </div>
        </div>
        <div className="description">
           <h2>Description</h2>
          <p>{bdescription}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
