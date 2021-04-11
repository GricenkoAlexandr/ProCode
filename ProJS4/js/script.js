
`use strict`;

const btnonof=document.querySelector('.onof');
const btnopcl=document.querySelector('.opcl');
const stage=document.querySelector('.stage');
let open=false;
let alarm=false;

btnonof.addEventListener('click', (ev)=>{
    alarm=!alarm;
    if (alarm){
        btnonof.classList.add('green');
        btnonof.classList.remove('red');
        btnonof.innerHTML='on';
    } else {
        btnonof.classList.add('red');
        btnonof.classList.remove('green');
        btnonof.innerHTML='off';
    }
    isDetect();
});


btnopcl.addEventListener('click', (ev)=>{
    open=!open;
    if (open){
        btnopcl.classList.add('red');
        btnopcl.classList.remove('green');
        btnopcl.innerHTML='open';
    } else {
        btnopcl.classList.add('green');
        btnopcl.classList.remove('red');
        btnopcl.innerHTML='close';
    }
    isDetect();
});

let isAlarm=false;

const isDetect= ()=> {
    if (alarm && open) {
        stage.innerHTML='Тревога  '+'<i class="far fa-dizzy"></i>';
    } 
    else if (alarm && !open) {
        stage.innerHTML='Всё ок '+'<i class="far fa-smile-beam"></i>';
    } 
    else {
        stage.innerHTML='Сигнализация выключена '+'<i class="far fa-angry"></i>';
}
}
