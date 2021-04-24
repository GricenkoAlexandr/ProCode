"use strict";

const getdate= ()=> {
    const firstArg=document.querySelector('.first').value;
    const secondtArg=document.querySelector('.second').value;
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


const getdatesqr= ()=> {
    const base=document.querySelector('.base').value;
    const sqrt=document.querySelector('.sqrt').value;
    return [base, sqrt]
}

const outressqrt=(resultsqrt)=> {
    document.querySelector('.out2').innerHTML=resultsqrt;
}

const sBtn=document.querySelector('.sbtn');

sBtn.addEventListener('click', ()=> {
    const valssq=getdatesqr();
    const sqr=(1/valssq[1]);
    const resultsqrt=Math.pow(valssq[0], sqr);
    outressqrt(resultsqrt);
})