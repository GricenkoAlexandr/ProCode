
'use strict';

console.log('Test');

const srcData={
    digit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
    bool: [true, false],
    symbolLow: 'abcdefghijkmnpgrstuvwxyz',
    symbolUp: 'ABCDEFGHJKLMNPQRSTUVWXYZ'
}

const random = (min, max) => {
    let rand=min+Math.random()*(max+1-min);
    return Math.floor(rand);
};

const arrayGenerator = (num=5, params=['digit']) => {
    let t=[];
    let rez=[];
    params.forEach(item => t=[...t, ...srcData[item]]);
    console.log(t);
    for (let i=0; i<num; i++) {
        let index=random(0, t.length-1)
        rez.push(t[index]);
    }
    console.log(rez);
}

console.log(arrayGenerator(7, ['symbolUp', 'bool']))