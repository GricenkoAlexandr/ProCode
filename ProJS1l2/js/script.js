`use strict`;
let btnop=document.querySelector('.btn_op');
let modal=document.querySelector('.modal_block');

btnop.addEventListener('click', ()=> {
    if (modal.classList.contains('hide')){
        modal.classList.remove("hide");
        btnop.innerHTML="Закрыть";
    }
    else {
        modal.classList.add('hide');
        btnop.innerHTML="Показать";
    };
});
