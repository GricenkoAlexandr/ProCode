
const moment = require('moment');

const cDate=moment();
console.log(cDate);
const bDay=moment('29.04.1979', 'DD/MM/YYYY' );
console.log(bDay);
const age=cDate.diff(bDay);

console.log('Годков мне сейчас - ', Math.floor(moment.duration(age).asYears()));
console.log('Месячишков -  ', Math.floor(moment.duration(age).asMonths()));
console.log('И деньков -  ', Math.floor(moment.duration(age).asDays()));


