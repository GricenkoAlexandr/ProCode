`use strict`;
let btnop=document.querySelector('.btn_op');
let btncl=document.querySelector('.btn_cl');
let modal=document.querySelector('.modal_block');

    btnop.addEventListener('click', ()=> {
        modal.classList.remove("hide");
    });

    btncl.addEventListener('click', ()=> {
        modal.classList.add('hide');
    });