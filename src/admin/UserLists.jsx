import { NavLink } from "react-router-dom";
import "./BookLists.css";
import "./Admin.css";
import { useContext, useEffect, useRef, useState } from "react";
import { UserListContext } from "../context/UserListContext";

let UserLists = () => {
  let { users, deleteUser, updateUser } = useContext(UserListContext);
  let [edit, setEdit] = useState(false);
  let [editID, setEditID] = useState("");
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    image: "",
  });

  let fileRef = useRef();

  useEffect(() => {
    let usertoedit = users.find((user) => user.id === editID);
    if (usertoedit) {
      setFormData({
        ...usertoedit,
        image:
          usertoedit.image ||
          "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      });
    }
  }, [editID, users]);

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

  console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
    setEdit(false);
    setEditID("");
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "",
      image: "",
    });

    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  console.log(editID);

  return (
    <div className="admin_main">
      <div className="admin_main_header">
        <h1 style={{ color: "#61dafb" }}>User Lists</h1>
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
          <div className="book-list">
            {users.map((people) => {
              return (
                <div key={people.id} className="bs">
                  <div className="bs-all">
                    <div className="bimg">
                      <img
                        src={
                          people.image === ""
                            ? `https://cdn-icons-png.flaticon.com/512/3135/3135715.png
`
                            : people.image
                        }
                        alt="peopleimg"
                        style={{ borderRadius: "50%" }}
                      />
                    </div>
                    <div className="btext">
                      <p>
                        <strong>{people.name}</strong>
                      </p>

                      <p
                        style={{
                          color: `${people.role !== "user" ? "red" : "green"}`,
                        }}
                      >
                        <strong>{people.role}</strong>
                      </p>
                    </div>
                  </div>
                  <div className="b-button">
                    <button
                      className="edit"
                      onClick={() => {
                        setEdit(true);
                        setEditID(people.id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="delete"
                      onClick={() => {
                        deleteUser(people);
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
          <>
            <form className="form-container" onSubmit={handleSubmit}>
              {formData.image && (
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
                        marginRight:"10px"
                      }}
                    />
                    <div className="formdata">
                      <p style={{color:"white"}}>{formData.name}</p>
                      <p style={{color:"white"}}>
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

              <select name="role" value={formData.role} onChange={handleChange}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>

              <input
                type="file"
                accept="image/*"
                ref={fileRef}
                onChange={handleimgChange}
                placeholder="Select User img ---"
              />

              <button type="submit">Update User</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default UserLists;
