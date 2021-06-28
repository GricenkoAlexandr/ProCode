const os = require('os');

let infoSpeed=os.cpus()[0].speed;
console.log('Module speed:',infoSpeed);
