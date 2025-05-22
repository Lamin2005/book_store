import { useContext, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import "./BookLists.css";

let BookLists = () => {
  let { books, deleteBook, updateBook } = useContext(BookContext);
  let [edit, setEdit] = useState(false);
  let [editID, setEditID] = useState("");
  let [formData, setFormData] = useState({
    bname: "",
    bprice: "",
    bauthor: "",
    byear: "",
    bquality: "",
    bimg: "",
    bdescription: "",
  });

  let fileRef = useRef();

  useEffect(() => {
    let booktoEdit = books.find((book) => book.bid === editID);
    if (booktoEdit) {
      setFormData(booktoEdit);
    }
  }, [editID, books]);

  let handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  let handleimgChange = (e) => {
    let file = e.target.files[0];

    if (!file) return;

    let reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, bimg: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    updateBook(formData);
    setEdit(false);
    setEditID("");
    setFormData({
      bname: "",
      bprice: "",
      bauthor: "",
      byear: "",
      bquality: "",
      bimg: "",
      bdescription: "",
    });
    console.log(formData);

    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  return (
    <div className="admin_main">
      <div className="admin_main_header">
        <h1 style={{ color: "#61dafb" }}>Book Lists</h1>
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
        {!edit ? (
          books.length > 0 ? (
            <div className="book-list">
              {books.map((book) => {
                let milisecond = book.date;

                let formatdate = (mili) => {
                  let date = new Date(mili);

                  return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
                };

                return (
                  <div key={book.bid} className="bs">
                    <div className="bs-all">
                      <div className="bimg">
                        <img src={book.bimg} alt="bookimg" />
                      </div>
                      <div className="btext">
                        <p>
                          <strong>{book.bname}</strong>
                        </p>
                        <p>
                          <strong>
                            {book.bauthor} ({book.bquality})
                          </strong>
                        </p>
                        <p>{formatdate(milisecond)}</p>
                      </div>
                    </div>

                    <div className="b-button">
                      <button
                        className="edit"
                        onClick={() => {
                          setEdit(true);
                          setEditID(book.bid);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="delete"
                        onClick={() => {
                          deleteBook(book.bid);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="book-list">
              <div
                className="empty"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "90%",
                }}
              >
                <h2>Empty BookList</h2>
              </div>
            </div>
          )
        ) : (
          <>
            <div className="admin_home">
              <form className="form-container" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="bname"
                  value={formData.bname}
                  onChange={handleChange}
                  required
                  placeholder="Enter Book Name ---"
                />

                <input
                  type="text"
                  name="bprice"
                  value={formData.bprice}
                  onChange={handleChange}
                  required
                  placeholder="Enter Book Price ---"
                />

                <input
                  type="text"
                  name="bauthor"
                  value={formData.bauthor}
                  onChange={handleChange}
                  required
                  placeholder="Enter Book Author ---"
                />

                <input
                  type="date"
                  name="byear"
                  value={formData.byear}
                  onChange={handleChange}
                  required
                  placeholder="Enter Book Year ---"
                />

                <input
                  type="number"
                  name="bquality"
                  value={formData.bquality}
                  onChange={handleChange}
                  required
                  placeholder="Enter Book Quality ---"
                  min={1}
                />

                <input
                  type="file"
                  accept="image/*"
                  ref={fileRef}
                  onChange={handleimgChange}
                  placeholder="Select Book img ---"
                />

                <textarea
                  required
                  name="bdescription"
                  value={formData.bdescription}
                  placeholder="Enter Book Description ---"
                  onChange={handleChange}
                ></textarea>

                <button type="submit">Update Book</button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BookLists;
