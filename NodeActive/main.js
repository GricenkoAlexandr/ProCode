const path=require('path');
const express=require('express');

const maineRoute=require('./rotes/main.js');
const lesRoute=require('./rotes/les.js');
const bearRoute=require('./rotes/bear.js');

const server=express();

server.use(express.static(path.join(__dirname, 'public')))

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.use('/', maineRoute);
server.use('/les', lesRoute);
server.use('/bear', bearRoute);
server.use('/blog', bearRoute);


server.listen(3000);