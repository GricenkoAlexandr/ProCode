`use strict`;

const startBtn=document.querySelector('.startbtn');

startBtn.addEventListener('click', ()=> {
    const rowsBtn=document.querySelector('.rbtn').value;
    const colBtn=document.querySelector('.cbtn').value;
    const outBlock=document.querySelector('.out_block');
    const displ=document.querySelector('.manager');
    const spider=document.querySelector('.spider');
    let cols='';
    for (let i=0;i<colBtn;i++) {
        cols+='<br>';
        for (let j=0;j<rowsBtn;j++) {
        cols+=`<div class="rows"></div>`;
    }
    }
    outBlock.innerHTML=cols;
    displ.classList.remove('hide');
    spider.classList.remove('hide');
});



const btns=[
    {name: 'up', state: true},
    {name: 'right', state: true},
    {name: 'down', state: true},
    {name: 'left', state: true},
];






