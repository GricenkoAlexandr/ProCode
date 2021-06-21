const path=require('path');
const express=require('express');
const app = express();

const PORT=3000;

console.log('Hello');
app.get("/", (req, res) => {
    res.send('<h1> Hello Express</h1>');
})

app.listen(PORT, () => {
    console.log(`Сервер запущен на порте ${PORT}...`)
  });
