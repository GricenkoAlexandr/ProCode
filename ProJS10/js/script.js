`use strict`;

// model

 let arClass=[
    { id: 1, uData: {name: 'Александр', surname: 'Гриценко'}, },
    { id: 2, uData: {name: 'Иванна', surname: 'Зимина'}, },
    { id: 3, uData:{name: 'Александр', surname: 'Гетьманский'}, },
    { id: 4, uData: {name: 'Наталья', surname: 'Горошко'}, },
    { id: 5, uData: {name: 'Andrew', surname: 'Stehnii'}, },
    { id: 6, uData: {name: 'Инна', surname: 'Олещенко'}, },
    { id: 7, uData: {name: 'Николай', surname: 'Зайченко'}, },
    { id: 8, uData: {name: 'Denis', surname: 'Rudik'}, },
    { id: 9, uData: {name: 'Andrey', surname: 'Timoshenko'}, },
    { id: 10, uData: {name: 'Артем', surname: 'Шевчук'}, },
 ];

// controler

const btninp=document.querySelector('.btn_id');
const output=document.querySelector('.output');
const form=document.forms.firstForm;

function User (datac) {
    this.id=datac.id;
    this.name=datac.uData.name;
    this.surname=datac.uData.surname;
} 

// view
form.addEventListener('submit', (ev)=> {
    ev.preventDefault();
    const data= new FormData(ev.target);
    const value=data.get('idinput');
    if (value<=0 || value>10) {
        output.innerHTML='Некорректный ввод, нет такого индекса в массиве!'
    } else {
        const ival=Number(value)-1;
        const udata=new User(arClass[ival]);
        output.innerHTML=` Имя - ${udata.name}, Фамилия - ${udata.surname}`;
    }
});


/* Task 2 */

 const dish=[
    {namedish: 'salat', ingred: ['kartoshka', 'luk', 'goroshek', 'morkovka']},
    {namedish: 'borsch', ingred: ['kartoshka', 'luk', 'shavel', 'zelen', 'yayki']},
    {namedish: 'salat', ingred: ['kartoshka', 'luk', 'goroshek', 'morkovka'] },
    {namedish: 'shashlik', ingred: ['mjaso', 'luk', 'pivo']},
 ];

 const dishItem=document.querySelectorAll('.dish_item');
 console.log(dishItem);
 const ditems=Array.from(dishItem);

 for (let i=0; i<ditems.length;i++) {
    dishItem[i].innerHTML=dish[i].namedish;
 }

 const btn=document.querySelector('.input_btn');
 const out=document.querySelector('.out_block');

 btn.addEventListener('click', (el)=>{
    const inpI=document.querySelector('.inginput').value;
    console.log(inpI);
    let out1=[];
    outArr=dish.map((el)=> {
        el.ingred.includes(inpI);
    })
    console.log(outArr);
    out1+=outArr;
    console.log(out1);
 })
