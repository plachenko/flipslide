import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8069 });

wss.on('connection', (ws) => {
    ws.on('message', (data, isBinary) => {
        wss.clients.forEach((client) => {
            if(client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data, {binary: isBinary})
            }
        })
        console.log('recieved', data)
    });
});