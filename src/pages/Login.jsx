import React, { useState } from "react";
import "./Login.css";

const Login = () => {
    let [form,setForm] = useState({name:"",email:"",password:"",role:"user",image:""});

    let handleChange = (e) => setForm({...form, [e.target.name]:e.target.value});


    let handleSubmit = (e) => {
        e.preventDefault();

        let users = JSON.parse(localStorage.getItem('users') || "[]");
        let matchedUser = users.find((user)=> user.email === form.email );
        if(matchedUser){
          return alert('Already Sign Up with this email.');
        }
        const newUser = {
            ...form,
            id: users.length > 0 && users[users.length - 1].id
              ? users[users.length - 1].id + 1
              : 1,
        };
          

        users.push(newUser);
        localStorage.setItem('users',JSON.stringify(users));
        alert("SignUp Successfully");
        setForm({name:"",email:"",password:"",role:"user"});
    }
    console.log(form);
    

  return (
    <div className="home">
      <div className="header">
        <h1>Book Store App Sign up</h1>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form-title">Sign up to your account</h2>
        <div className="input-container">
          <input name="name" type="text" placeholder="Enter name" value={form.name} onChange={handleChange} />
          <span></span>
        </div>
        <div className="input-container">
          <input name="email" type="email" placeholder="Enter email" value={form.email} onChange={handleChange} />
          <span></span>
        </div>
        <div className="input-container">
          <input name="password" type="password" placeholder="Enter password" value={form.password} onChange={handleChange} />
        </div>
        <button type="submit" className="submit">
          Sign up
        </button>
        <p className="signup-link">
          Already account?
          <a href="/sigin">Sign in</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
