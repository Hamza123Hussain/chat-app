import React, { useState, useEffect } from "react";
import { db, auth } from "../CONFIGURATION/Firebase";
import {
  collection,
  addDoc,
  where,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

import "../styles/Chat.css";

const Chat = ({room,setIsInChat,setRoom}) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const messagesRef = collection(db, "Messages");
  
    useEffect(() => {
      const queryMessages = query(
        messagesRef,
        where("room", "==", room),
        orderBy("createdAt")
      );
      const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
let messages=[];
        snapshot.forEach((doc) => {
          messages.push({ ...doc.data(), id: doc.id });
        });
  
        setMessages(messages);
      });
  
      return () => unsuscribe();
    }, []);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (newMessage === "") return;
      await addDoc(messagesRef, {
        text: newMessage,
        createdAt: serverTimestamp(),
        user: auth.currentUser.displayName,
        room,
      });
  
      setNewMessage("");
    };

    const Exitroom=()=>{
      setIsInChat(false);
      setRoom("");
    }
  
    return (
      <div className="chat-app">
        <div className="header">
          <h1>Welcome to: {room.toUpperCase()}</h1>
        </div>
        <div className="messages">
          {messages.map((message) => (
            <div key={message.id} className="message">
              <span className="user">{message.user}:</span> {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="new-message-form">
          <input
            type="text"
            value={newMessage}
            onChange={(event) => setNewMessage(event.target.value)}
            className="new-message-input"
            placeholder="Type your message here..."
          />
          <button type="submit" className="send-button">
            Send
          </button>
        </form>

<button onClick={ Exitroom} > Exit Room </button>

      </div>
    );
}

export default Chat
