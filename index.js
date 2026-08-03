const WebSocket = require('ws');
const port = process.env.PORT || 3001;
const wss = new WebSocket.Server({ port });

console.log(`WebSocket server running on port ${port}`);

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    const rawData = message.toString();
    if (rawData.includes('register')) {
      ws.send(JSON.stringify({ success: true }));
      return;
    }
    // Default success response for testing
    ws.send(JSON.stringify({
      status: "success",
      data: {
        expiry_date: "2028-12-31 23:59:59",
        version: "1.0",
        auth_token: "0wQRlDkgoQlf",
        max_devices: "1",
        active_devices: "0",
        license_key: "TEST-KEY"
      }
    }));
  });
});
