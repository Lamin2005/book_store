import React, { useState, useEffect, useRef, useContext } from "react";
import "../admin/Admin.css";
import "../admin/Addbook.css";
import { UserContext } from "../context/UserContext";
import { UserListContext } from "../context/UserListContext";

const ProfileEdit = () => {
  const [formData, setFormData] = useState({
    id:"",
    name: "",
    email: "",
    password: "",
    image: "",
  });

  let { user,setUser } = useContext(UserContext);
  let { users } = useContext(UserListContext);

  const fileRef = useRef();

  useEffect(() => {
   if(user){
    setFormData(user);
   }
   
  }, [user]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleimgChange = (e) => {
    let file = e.target.files[0];

    if (!file) return;

    let reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const clearImage = () => {
    fileRef.current.value = "";
    setFormData((prev) => ({ ...prev, image: "" }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Update sessionStorage
    sessionStorage.setItem("currentUser", JSON.stringify(formData));

    // Update localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users = users.map((user) => (user.id === formData.id ? formData : user));
    localStorage.setItem("users", JSON.stringify(users));
    setUser(formData);

    alert("Profile updated successfully!");
  };

  return (
    <form
      className="form-container"
      style={{ width: "500px" }}
      onSubmit={handleSubmit}
    >
      {formData.image ? (
        <>
          <div className="profile_uimg">
            <img
              src={formData.image}
              alt="user_img"
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                border: "5px solid  #61dafb",
                marginRight: "10px",
              }}
            />
            <div className="formdata">
              <p style={{ color: "white" }}>{formData.name}</p>
              <p style={{ color: "white" }}>
                {formData.email}({formData.role})
              </p>
            </div>
          </div>
          <button type="button" onClick={clearImage}>
            Clear Image
          </button>
        </>
      ) : (
        <>
          <div className="profile_uimg">
            <img
              src= "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="user_img"
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                border: "5px solid  #61dafb",
                marginRight: "10px",
              }}
            />
            <div className="formdata">
              <p style={{ color: "white" }}>{formData.name}</p>
              <p style={{ color: "white" }}>
                {formData.email}({formData.role})
              </p>
            </div>
          </div>
          <button type="button" onClick={clearImage}>
            Clear Image
          </button>
        </>
      )}

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Enter User Name ---"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="Enter User Email ---"
      />

      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
        placeholder="Enter User Password ---"
      />

      <input
        type="file"
        accept="image/*"
        ref={fileRef}
        onChange={handleimgChange}
        placeholder="Select User img ---"
      />

      <button type="submit">Update User</button>
    </form>
  );
};

export default ProfileEdit;
