import { NavLink } from "react-router-dom";
import "./Addbook.css";
import { useContext, useRef, useState } from "react";
import { BookContext } from "../context/BookContext";

let Addbook = () => {

  let {addBook} = useContext(BookContext);
  
  let fileRef = useRef(null);

  let [formData,setFormData] = useState({
    bname:"",
    bprice:"",
    bauthor:"",
    byear:"",
    bquality:"",
    bimg:"",
    bdescription:""
  });

  let handleimgChange = (e) => {
    let file = e.target.files[0];
    
    if(!file) return;

    let reader = new FileReader();
    reader.onloadend = () =>{
      setFormData((prev) => ({...prev,bimg:reader.result}));
    };

    reader.readAsDataURL(file);
    
  };

  let handleChange = (e) => {
      setFormData((prev)=> ({...prev,[e.target.name]:e.target.value}));
  }

  let handleSubmit = (e) => {
      e.preventDefault();
      let newbookObj = {...formData,bid:Math.random().toString(),date:Date.now()};

      addBook(newbookObj);
      
      setFormData({
        bname:"",
        bprice:"",
        bauthor:"",
        byear:"",
        bquality:"",
        bimg:"",
        bdescription:""
      });

      if(fileRef.current){
        fileRef.current.value = "";
      }

      alert("New Book Successfully Add...");
  }

  return (
    <main className="admin_main">
      <div className="admin_main_header">
        <h1 style={{ color: "#61dafb" }}>Add Book</h1>
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
        <form className="form-container" onSubmit={handleSubmit}>
          <input type="text" name="bname" value={formData.bname} onChange={handleChange} required placeholder="Enter Book Name ---"/>

    
          <input type="text" name="bprice" value={formData.bprice} onChange={handleChange}  required placeholder="Enter Book Price ---" />
   
          <input type="text" name="bauthor" value={formData.bauthor} onChange={handleChange} required placeholder="Enter Book Author ---" />
   
          <input type="date" name="byear" value={formData.byear} onChange={handleChange} required  placeholder="Enter Book Year ---"/>

          
          <input type="number" name="bquality" value={formData.bquality} onChange={handleChange} required placeholder="Enter Book Quality ---" min={1} />

          <input type="file" accept="image/*" ref={fileRef} onChange={handleimgChange} placeholder="Select Book img ---" />


          <textarea required name="bdescription" value={formData.bdescription} placeholder="Enter Book Description ---" onChange={handleChange} ></textarea>

          <button type="submit">Add New Book</button>
        </form>
      </div>
    </main>
  );
};

export default Addbook;
