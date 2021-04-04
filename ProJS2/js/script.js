`use strict`;

let outfn=document.querySelector('.out1');
let outmn=document.querySelector('.out2');
let outln=document.querySelector('.out3');

const form=document.querySelector('.input_block');

form.addEventListener('submit', (ev)=>{
    ev.preventDefault();
    let inpf1=document.querySelector('.inp1').value;
    let inpf2=document.querySelector('.inp2').value;
    let inpf3=document.querySelector('.inp3').value;
    outfn.innerHTML=inpf1;
    outmn.innerHTML=inpf2;
    outln.innerHTML=inpf3;
});
