// src/components/ActiveUsers.js
import React, { useEffect, useState } from 'react';
import '../App.css';

function ActiveUsers() {
  const [activeUsers, setActiveUsers] = useState(0);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onmessage = (message) => {
      const data = JSON.parse(message.data);
      setActiveUsers(data.activeUsers);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="active-users-overlay">
      <p>Active Users: {activeUsers}</p>
    </div>
  );
}

export default ActiveUsers;
