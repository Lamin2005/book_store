import {book} from "./Book";

let BookList = () => {
  return (
    <div className="books">
      {book.map((li) => {
        return (
          <div className="book" key={li.id}>
            <div className="bookimg"></div>
            <div className="text">
              <p>Book Name :{li.name}</p>
              <p>Price : {li.price} </p>
              <a href={`/books/${li.id}`}><button>More Info</button></a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
