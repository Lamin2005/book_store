import { createContext, useContext, useEffect, useState } from "react";
import { MessageContext } from "./MessageContext";

export let UserListContext = createContext();

export function UserListProvider({ children }) {
  let [users, setUser] = useState([]);
  let {addMessage} = useContext(MessageContext);

  useEffect(() => {
    let savedata = JSON.parse(localStorage.getItem("users")) || [];
    setUser(savedata);
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    const hasAdmin = existingUsers.some((user) => user.role === "admin");

    if (!hasAdmin) {
      const defaultAdmin = {
        id: users.length > 0 && users[users.length-1].id ? users[users.length-1].id + 1 : 1,
        name: "Admin",
        email: "admin@gmail.com",
        password: "admin123",
        role: "admin",
        image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      };

      const updatedUsers = [...existingUsers, defaultAdmin];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
  }, [users]);


  const deleteUser = (people) => {
    addMessage('You Deleted User Successful.');
    setUser((prev)=>prev.filter((user)=>user.id !== people.id));
    alert(`Successfull Deleted ${people.role} ${people.name}...` );
}

  const updateUser = (user) => {
    addMessage('You Update User Successful.');
    setUser((prev) => prev.map((u) => (u.id === user.id ? user : u)));
    
  };

  return (
    <UserListContext.Provider
      value={{ users,setUser,updateUser,deleteUser }}
    >
      {children}
    </UserListContext.Provider>
  );
}
