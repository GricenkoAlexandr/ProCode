"use strict";

const getdate= ()=> {
    const firstArg=document.querySelector('.first').value;
    const secondtArg=document.querySelector('.second').value;
    console.log(firstArg);
    console.log(secondtArg);
    return [firstArg, secondtArg]
}

const outres=(result)=> {
    document.querySelector('.out1').innerHTML=result;
}

const mulBtn=document.querySelector('.mbtn');
const divBtn=document.querySelector('.dbtn');

mulBtn.addEventListener('click', ()=> {
    const vals=getdate();
    const result=vals[0]*vals[1];
    outres(result);
})

divBtn.addEventListener('click', ()=> {
    const vals=getdate();
    const result=vals[0]/vals[1];
    outres(result);
})



