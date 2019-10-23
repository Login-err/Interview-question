const express = require('express');
const wss = require('websocket').server;
const app = express();
app.get('socket', (req, res) => {
    res.send({ a: '1' });
});
app.listen('3000', (err) => {
    if (err) {
        return;
    }
    console.log('服务器连接成功');
});
