// backend/websockets/chatWebSocket.js
const WebSocket = require('ws');
const messageController = require('../controllers/messageController');

module.exports = (server) => {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws) => {
    ws.on('message', async (message) => {
      const { content, senderId } = JSON.parse(message);
      await messageController.saveMessage(content, senderId);
      ws.send(JSON.stringify({ content, senderId })); // Echo the message back
    });
  });

  console.log('WebSocket server is running');
};
