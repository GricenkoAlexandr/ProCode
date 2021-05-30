console.log('test4');

//1  получить погоду с апи. на завтра, для своего города
//2 сделать так, чтобы получало погоду каждые 5 минут
//3 записывать погоду в какойто файл (так чтобы он дописывался, когда с апи запросили новую погоду. Должно быть дата + температура)

const axios=require('axios');

const url='https://api.openweathermap.org/data/2.5/weather?q=Kiev&units=metric&lang=ru&appid=0deb180b8f03b3fc753ef037b4ca7b66';

axios.get(url).then((dataw) => {
    console.log('Погода:', dataw.data);
});

const url2='https://api.openweathermap.org/data/2.5/onecall?lat=35&lon=139&units=metric&lang=ru&appid=0deb180b8f03b3fc753ef037b4ca7b66';

axios.get(url2).then((dataw2) => {
    console.log('Погода:', dataw2.daily);
});