 `use strict`;

 let arClass=[
    { name: 'Александр', surname: 'Гриценко', task: 3 },
    { name: 'Иванна', surname: 'Зимина', task: 5 },
    { name: 'Александр', surname: 'Гетьманский', task: 9 },
    { name: 'Наталья', surname: 'Горошко', task: 7 },
    { name: 'Артем', surname: 'Шевчук', task: 3 }
 ];

const btn1=document.querySelector('.out1_btn');
const btn2=document.querySelector('.out2_btn');
const out1=document.querySelector('.out-1');
const out2=document.querySelector('.out-2');

btn1.addEventListener('click', ()=>{
    let out11=[];
    for (let i=0; i<arClass.length; i++){
        out11+=`${i+1}. Cтудент ${arClass[i]['surname']} ${arClass[i]['name']} сделал ${arClass[i]['task']} заданий </br>`;
    }

    out1.innerHTML=out11;
});

btn2.addEventListener('click', ()=>{
    let out12=[];
    let tasq=document.querySelector('.taskqua').value;
    let arClassfilter=arClass.filter((tas)=> {
        return tas.task>=tasq;
    })
    for (let i=0; i<arClassfilter.length; i++){
        out12+=`${i+1}. Cтудент ${arClassfilter[i]['surname']} ${arClassfilter[i]['name']} сделал ${arClassfilter[i]['task']} заданий </br>`;
    }
       out2.innerHTML=out12;
});

