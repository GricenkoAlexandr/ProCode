`use strict`;

/*
ДЗ
Над объект в котором есть имя, фамилия, отчество. 
Написать в этом объекте аксессоры, которые будут отдавать ФИО. 
лвл 2. Написать аксессор который ФИО разбивает на отдельные части 
и записывает в поля имени, фамилии и отчества
*/

//lvl 1
const chel = {
    name:'Alex',
    lastName: 'Griko',
    mName: 'Greg',

    get fName() {
        return ` ${this.name} ${this.mName} ${this.lastName}`;
    },
};

console.log(chel.fName);

//lvl 2

const chel2 = {
    name:'noname',
    lastName: 'nolastname',
    mName: 'nomname',

    get fName() {
        return ` Фамилия: ${this.lastName}  Имя: ${this.name}, Отчество: ${this.mName}`;
    },

    set fName(val) {
        return ` ${this.name}  ${this.mName}, Фамилия: ${this.lastName}`;
    },
};

const out1=document.querySelector('.out');

fullnameform.addEventListener('submit', (ev)=> {
    ev.preventDefault();
    const data= new FormData(ev.target);
    const fname=data.get('fullname');
    const arrname=fname.split(' ');
    if (arrname.length!=3) {
        out1.innerHTML='Вы неправильно ввели данные';
    } else {
        chel2.lastName=arrname[0];
        chel2.name=arrname[1];
        chel2.mName=arrname[2];
        out1.innerHTML=chel2.fName;
    }
})


