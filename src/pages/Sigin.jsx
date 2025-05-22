import { useContext, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";



let Sigin = () => {

  let [form,setForm] = useState({email:"",password:""});
  let navigate = useNavigate();
  let {setUser} = useContext(UserContext);

  let handleChange = (e) => {
    console.log([e.target.name]);
    setForm({...form,[e.target.name]:e.target.value});
  }

  console.log(form);
 
  let handleSubmit = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem('users')) || "[]";

    let matchedUser = users.find((user)=> user.email === form.email && user.password === form.password);

    if(matchedUser){
      sessionStorage.setItem('currentUser',JSON.stringify(matchedUser));
      alert("Login Successful");
      
      if(matchedUser.role === "admin"){
        alert(`Welcome back Admin ${matchedUser.name}`);
        setUser(matchedUser);
        navigate("/adminDashboard");
      }else if(matchedUser.role === "user"){
        alert(`Welcome back User ${matchedUser.name}`);
        setUser(matchedUser);
        navigate("/");
      }
    }else{
      alert("User not Fount or Incorrect name or email!");
    }


  }


    return (
        <div className="home">
          <div className="header">
            <h1>Book Store App Sign in</h1>
          </div>
    
          <form className="form" onSubmit={handleSubmit}>
            <h2 className="form-title">Sign in to your account</h2>
            <div className="input-container">
              <input name="email" type="email" placeholder="Enter email" onChange={handleChange} />
              <span></span>
            </div>
            <div className="input-container">
              <input name="password" type="password" placeholder="Enter password" onChange={handleChange}  />
            </div>
            <button type="submit" className="submit">
              Sign in
            </button>
            <p className="signup-link">
              No account?
              <a href="/login">Sign up</a>
            </p>
          </form>
        </div>
      );
};

export default Sigin;