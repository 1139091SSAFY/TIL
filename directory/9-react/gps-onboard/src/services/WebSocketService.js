// src/services/WebSocketService.js

const connectWebSocket = (callback) => {
  const socket = new WebSocket("ws://localhost:8000/location");

  socket.onmessage = (event) => {
    const receivedData = JSON.parse(event.data);
    callback(receivedData.locations);
  };

  return () => {
    socket.close();
  };
};

export default connectWebSocket;
