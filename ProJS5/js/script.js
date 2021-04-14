`use strict`;

 let arClass=[
    { name: 'Александр', surname: 'Гриценко', task: 3 },
    { name: 'Иванна', surname: 'Зимина', task: 5 },
    { name: 'Александр', surname: 'Гетьманский', task: 9 },
    { name: 'Наталья', surname: 'Горошко', task: 7 },
    { name: 'Andrew', surname: 'Stehnii', task: 3 },
    { name: 'Инна', surname: 'Олещенко', task: 8 },
    { name: 'Николай', surname: 'Зайченко', task: 9 },
    { name: 'Denis', surname: 'Rudik', task: 5 },
    { name: 'Andrey', surname: 'Timoshenko', task: 7 },
    { name: 'Артем', surname: 'Шевчук', task: 3 },
 ];

const btnAll=document.querySelector('.out1_btn');
const btnTask=document.querySelector('.out2_btn');
const outAll=document.querySelector('.out-1');
const outTask=document.querySelector('.out-2');

btnAll.addEventListener('click', ()=>{
    let out11=[];
    for (let i=0; i<arClass.length; i++){
        out11+=`${i+1}. Cтудент ${arClass[i]['surname']} ${arClass[i]['name']} сделал ${arClass[i]['task']} заданий </br>`;
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
            out12+=`${i+1}. Cтудент ${arClassfilter[i]['surname']} ${arClassfilter[i]['name']} сделал ${arClassfilter[i]['task']} заданий </br>`;
        }
    }

    
    outTask.innerHTML=out12;
});