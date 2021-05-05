
'use strict';

let test=-4;

if (test<=0) {
    console.log('mistake!');
} else if (test==1) {
    console.log('one');
}else if (test==2) {
    console.log('two');
}
 else if (test==3) {
    console.log('three');
} 
else {
    console.log('and more!');
};

let rez=0.1+0.2
console.log(rez);


for (let i=1; i<=10;i++) {
console.log(i);
};

let arr=[1, 2, 3, 4, 5];

const arr2=arr.filter(function(index) {
    return index%2==0;
});
console.log(arr2);
