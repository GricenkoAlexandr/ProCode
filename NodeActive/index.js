"use strict";

const http=require('http');

http.createServer((req, res) => {
    console.log(req.url);

    res.end('<h1>12345</h1>')

}).listen(7000);
