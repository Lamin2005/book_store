import { createContext, useEffect, useState } from "react";

export let MessageContext = createContext();

export function MesssageProvider({ children }) {
  let [messages, setMessage] = useState([]);

  useEffect(() => {
    let savedata = JSON.parse(localStorage.getItem("messagelist")) || [];
    setMessage(savedata);
  }, []);

  useEffect(() => {
    localStorage.setItem("messagelist", JSON.stringify(messages));
  }, [messages]);

  const addMessage = (message) => {
    let mobj = {id:Math.random().toString(),noti:message};
    setMessage((prev)=>([mobj,...prev]));
  }

  const deleteMessage = (id) => {
    setMessage((prev)=> prev.filter((item)=> item.id !== id));
    alert("Message Deleted Successfully.");
  }

  return (
    <MessageContext.Provider
      value={{ messages,setMessage,addMessage,deleteMessage }}
    >
      {children}
    </MessageContext.Provider>
  );
}
