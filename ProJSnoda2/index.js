const os = require('os');
let infoModel=os.cpus()[0].model;
let infoSpeed=os.cpus()[0].speed;
console.log('Begin!');
console.log('Модель процессора: ',infoModel);
console.log('Скорость процессора: ',infoSpeed);