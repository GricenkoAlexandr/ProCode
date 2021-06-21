console.log('heeep');

const path=require('path');
const express=require('express');

const server=express();
const PORT = 3000;

server.get('/', (req, res) => {
    res.send('Hello my Frend!!!');
})

server.listen(PORT, () => {
    console.log(` Server on port ${PORT} is run...`)
});
