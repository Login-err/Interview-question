const express = require('express');
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8075 });
wss.on('connection', (ws) => {
    ws.on('message', (msg) => {
        console.log(msg);
    });
});
