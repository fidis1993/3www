const express = require('express');
const path = require('path');
const hostname = '127.0.0.1';
const port = 3001;

const app = express();

app.use("/static", express.static(path.resolve(__dirname,'source','static')));

app.get("/*", (req, res)=> {
    res.sendFile(path.resolve(__dirname,'source','index.html'));
});

//we listen for request on port 3000
app.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
});