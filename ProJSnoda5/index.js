console.log('Begin!');
/*
Лвл 1. Поднять сервать на модуле хттп и попробовать получить на него запрос с браузера
Лвл 2. Отправить в ответ файл на запрос
Лвл 3. В ответ на запрос, запросить файл аяксом откудато с интернета(неважно какой) и отдать его в ответ на запрос.

 */
const http=require('http');
const fse = require('fs-extra');
const axios=require('axios');

http.createServer((request, response) => {
    console.log('Server work:');
    console.log(request);
    console.log("Server started at 3000");

    response.end("Some text2");
}).listen(3000);