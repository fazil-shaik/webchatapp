// frontend/src/components/Chat.js
import React, { useState, useEffect } from 'react';

const Chat = ({ token }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const websocket = new WebSocket('ws://localhost:4000');
    websocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, data.content]);
    };
    setWs(websocket);
    return () => websocket.close();
  }, []);

  const sendMessage = () => {
    if (ws && token) {
      const senderId = JSON.parse(atob(token.split('.')[1])).userId;
      const messageData = JSON.stringify({ content: message, senderId });
      ws.send(messageData);
      setMessage('');
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
