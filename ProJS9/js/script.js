`use strict`;

console.log('Левел 1');
console.log('Базовый массив');

let ourClass=[
    { name: 'Александр', surname: 'Гриценко' },
    { name: 'Иванна', surname: 'Зимина'},
    { name: 'Александр', surname: 'Гетьманский'},
    { name: 'Наталья', surname: 'Горошко'},
    { name: 'Andrew', surname: 'Stehnii'},
    { name: 'Инна', surname: 'Олещенко'},
    { name: 'Николай', surname: 'Зайченко'},
    { name: 'Denis', surname: 'Rudik'},
    { name: 'Andrey', surname: 'Timoshenko'},
    { name: 'Артем', surname: 'Шевчук'},
 ];

 console.log(ourClass);

 let ourClass2=ourClass;

 ourClass2.push({ name: 'Артем2', surname: 'Шевчук2'});

 console.log('Второй массив после добавления');
 console.log(ourClass2);
 console.log('Первый массив после добавления');
 console.log(ourClass);

 console.log('Левел 2');


 console.log('Левел 3');

 let ourClassl3={
     student: { name: 'Александр', surname: 'Гриценко' },
     student:{ name: 'Иванна', surname: 'Зимина'},
     student:{ name: 'Александр', surname: 'Гетьманский'},
 };

 console.log(ourClassl3);

var ourClassl3clone = _.cloneDeep(ourClassl3);
console.log(ourClassl3clone);