
let inp1=document.querySelector('.inp1');
let inp2=document.querySelector('.inp2');
let inpbtn=document.querySelector('.btn1');
let rez=document.querySelector('.rez');

inpbtn.addEventListener('click', ()=> {
    let ind=Number(inp1.value);
    let ind2=Number(inp1.value);
    rezult=Math.pow(ind, ind2);
    rez.innerHTML=rezult;
})