const path=require('path');
const express=require('express');
const server=express();

server.get('/1', (req, res) => {
    res.send('<div style="color: red">Страница 1</div>');
})

server.get('/2', (req, res) => {
    res.send('<div style="color: green">Страница 2</div>');
})
server.get('/3', (req, res) => {
    res.send('<div style="color: yellow">Страница 3</div>');
})

server.get('/blog/:id', (req, res) => {
    const { id }=req.params;
    const articles=[
        {id: 1, test: 'first artical'},
        {id: 2, test: 'second  artical'},
        {id: 3, test: '3 artical'}
    ]

    const needArt=articles.find(val => val.id===id);
    res.send(needArt);
})

server.get('/file', function (req, res, next) {
    const filepath = path.join(__dirname, 'public/oboi.jpg');
    res.sendFile(filepath);
  })




server.listen(3000);