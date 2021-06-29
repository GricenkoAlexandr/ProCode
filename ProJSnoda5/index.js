console.log('Begin!');
/*
Лвл 1. Поднять сервать на модуле хттп и попробовать получить на него запрос с браузера
Лвл 2. Отправить в ответ файл на запрос
Лвл 3. В ответ на запрос, запросить файл аяксом откудато с интернета(неважно какой) и отдать его в ответ на запрос.

 */
const http=require('http');
const fs = require('fs-extra');
const axios=require('axios');

http.createServer((req, res) => {

    //Читает запрос
    console.log('Server work:');
    console.log('адресс запросса:',req.url);
    console.log('Тип запросса:',req.method);
    //отсылает файл
    fs.createReadStream("./text.txt").pipe(res);

    
}).listen(3000, ()=> {
    console.log("Server started at 3000");
});