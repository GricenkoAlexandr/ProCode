`use strict`;

/*

let t1=[
    'a ',
    'b ',
    'c ',
];

const t2=t1.map( (el)=> {
    const rez=el.trim();
    return rez;
});

console.log(t2);
*/
/*
const chel={name: 'Alex', age:25};
const chel1={name: 'Ivan', age:27};
const chel2={name: 'Oleg', age:22};

const Chel=function(date) {
    this.name=date.name;
    this.age=date.age;

    this.fullage= ()=> {
        const fullage=`${this.name}у сейчас ${this.age} лет!`;
        return fullage;
    };
}

const user=new Chel(chel);
const user1=new Chel(chel1);
const user2=new Chel(chel2);
console.log(user, user1, user2);
*/
/*
Есть список людей. У каждого человека есть айди.
Есть поле ввода, если в него ввести айди человека и нажать кнопку то рядом появляеться информация о человеке


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


==
задача 2. Есть список блюд в виде массива, у блюд есть список ингридиентов.
Есть список на экране с блюдами из массива.  При вводе в специальное поле ингридиента, должны оставаться только те блюда на экране, которые содержат этот ингридиент



const dish=[
    {namedish: 'salat', ingred: ['kartoshka', 'luk', 'goroshek', 'morkovka']},
    {namedish: 'borsch', ingred: ['kartoshka', 'luk', 'shavel', 'zelen', 'yayki']},
    {namedish: 'salat', ingred: ['kartoshka', 'luk', 'goroshek', 'morkovka'] },
    {namedish: 'shashlik', ingred: ['mjaso', 'luk', 'pivo']},
 ];

 const dishItem=document.querySelectorAll('.dish_item');
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
        /*out1+=`${el.namedish} <br>`;
    })
    console.log(outArr);
 })


 */

/*

 const ingridients = [
    { id: 'e88', name: 'картошка', alergen: false, kkal: 100 },
    { id: '08a', name: 'лук', alergen: true, kkal: 200 },
    { id: 'a0b', name: 'шкварки', alergen: false, kkal: 300 },
    { id: '0dd', name: 'бульйон', alergen: false, kkal: 400 },
    { id: 'd12', name: 'морковка', alergen: false, kkal: 500 },
    { id: '8a1', name: 'оливковая олия', alergen: false, kkal: 600 }
  ];


  const ing = {
       id: 'e88',
        name: 'картошка',
         alergen: false,
        kkal: 100,
        weight: 200,
        get comonCal() {
            return 15;
        },

        set comonCal(val) {
            const val=(this.weight/100)*this.kkal;
            return val;
        },

        }

        console.log (ing.comonCal);

*/

const chel = {
    name:'Alex',
    lastName: 'Griko',

    get fName() {
        return ` ${this.name} ${this.lastName}`;
    },
};

console.log(chel.fName);


let str='Фанера березовая 3/4 - 16мм` Брусок 30*40` ППУ HR3535 - 5см` Ткань Felicita Strada №04` Лента скрытого шва (на углах изголовья)';

let arrstr=str.split('`');
console.log(arrstr);

const out11=document.querySelector('.out_block');

let out111='';
for (let i=0; i<arrstr.length; i++) {
    out111+=` ${arrstr[i]} <br>`;
}
out11.innerHTML=out111;