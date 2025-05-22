import { createContext, useContext, useEffect, useState } from "react";
import { MessageContext } from "./MessageContext";
import defaultimg from "../assets/default.png";
import { defaultBook } from "../component/Book";

export let BookContext = createContext();

export function BookProvider({ children }) {
  let [books, setBook] = useState([]);
  let { addMessage } = useContext(MessageContext);

  useEffect(() => {
    let savedata = JSON.parse(localStorage.getItem("booklist")) || [];
    if (savedata.length === 0) {
      setBook(defaultBook);
      localStorage.setItem("booklist", JSON.stringify(defaultBook));
    } else {
      setBook(savedata);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("booklist", JSON.stringify(books));
  }, [books]);

  const addBook = (book) => {
    if (!book || !book.bname || !book.bprice) {
      console.warn("Invalid book data");
      return;
    }
    if (!book.bimg) {
      book.bimg = defaultimg;
    }
    addMessage("You Added New Book Successfully.");
    setBook((prev) => [...prev, book]);
  };

  const deleteBook = (id) => {
    addMessage("You Deleted Book Successfully.");
    setBook((prev) => prev.filter((book) => book.bid !== id));
    alert("Book Deleted Successfully.");
  };

  const updateBook = (book) => {
    addMessage("You Updated Book Successfully.");
    setBook((prev) => prev.map((b) => (b.bid === book.bid ? book : b)));
  };

  return (
    <BookContext.Provider
      value={{ books, setBook, addBook, deleteBook, updateBook }}
    >
      {children}
    </BookContext.Provider>
  );
}
