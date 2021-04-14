`use strict`;

 let arClass=[
    { name: 'Александр', surname: 'Гриценко', task: 3, ava: 'ava1.png' },
    { name: 'Иванна', surname: 'Зимина', task: 5, ava: 'ava2.png' },
    { name: 'Александр', surname: 'Гетьманский', task: 9, ava: 'ava5.png' },
    { name: 'Наталья', surname: 'Горошко', task: 7, ava: 'ava2.png' },
    { name: 'Andrew', surname: 'Stehnii', task: 3, ava: 'ava3.png' },
    { name: 'Инна', surname: 'Олещенко', task: 8, ava: 'ava6.png' },
    { name: 'Николай', surname: 'Зайченко', task: 9, ava: 'ava3.png'},
    { name: 'Denis', surname: 'Rudik', task: 5, ava: 'ava5.png' },
    { name: 'Andrey', surname: 'Timoshenko', task: 7, ava: 'ava3.png' },
    { name: 'Артем', surname: 'Шевчук', task: 3, ava: 'ava5.png' },
 ];

const btnAll=document.querySelector('.out1_btn');
const btnTask=document.querySelector('.out2_btn');
const outAll=document.querySelector('.out-1');
const outTask=document.querySelector('.out-2');

btnAll.addEventListener('click', ()=>{
    let out11=[];
    for (let i=0; i<arClass.length; i++){
        out11+=`${i+1}. <img src="/img/${arClass[i]['ava']}" height="40" class="avatar"> ${arClass[i]['surname']} ${arClass[i]['name']} сделал ${arClass[i]['task']} заданий </br>`;
    }

    outAll.innerHTML=out11;
});

btnTask.addEventListener('click', ()=>{

    let out12=[];
    let taskmax=9;
    let tasq=document.querySelector('.taskqua').value;
    if (tasq>taskmax){
        out12='Чёто как-то многовато заданий походу))';
    } else {
        let arClassfilter=arClass.filter((tas)=> {
            return tas.task>=tasq;
        })
        for (let i=0; i<arClassfilter.length; i++){
            out12+=`${i+1}. <img src="/img/${arClass[i]['ava']}" height="40" class="avatar"> ${arClassfilter[i]['surname']} ${arClassfilter[i]['name']} сделал ${arClassfilter[i]['task']} заданий </br>`;
        }
    }

    
    outTask.innerHTML=out12;
});