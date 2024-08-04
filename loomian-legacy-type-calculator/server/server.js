// server/server.js
const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let activeUsers = 0;

wss.on('connection', (ws) => {
  activeUsers++;
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ activeUsers }));
    }
  });

  ws.on('close', () => {
    activeUsers--;
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ activeUsers }));
      }
    });
  });
});

server.listen(8080, () => {
  console.log('Server started on port 8080');
});
