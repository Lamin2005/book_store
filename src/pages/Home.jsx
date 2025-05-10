import "./Home.css";
import BookList from "../component/BookList";

let Home = () => {
  return (
    <div className="home">
      <div className="header">
        <h1>Welcome From Book Store App</h1>
      </div>
      <BookList/>
    </div>
  );
};

export default Home;
