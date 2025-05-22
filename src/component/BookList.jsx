import { useContext } from "react";
import {BookContext} from "../context/BookContext";

let BookList = () => {

  let {books} = useContext(BookContext);

  return (
    <div className="books">
      {books.map((li) => {
        return (
          <div className="book" key={li.bid}>
            <div className="bookimg">
              <img src={li.bimg} alt="book_img" />
            </div>
            <div className="text">
              <p>Book Name :{li.bname}</p>
              <p>Price : {li.bprice} </p>
              <a href={`/books/${li.bid}`}><button>More Info</button></a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
