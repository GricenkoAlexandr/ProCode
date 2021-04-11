`use strict`;

const form=document.forms.rastacar;

form.addEventListener('submit',(ev)=>{
    ev.preventDefault();
    let formData = new FormData(ev.target);
    let w = Number( formData.get('w') );
    

}
);



/*

let btn=document.querySelector('.price-btn');

let rezult=()=>{


    const radbtn=document.querySelector('.radio_btn').value;
    let yearcar=Number(document.querySelector('.year_car').value);
    let price=Number(document.querySelector('.price_val').value);
    let rez=(price*radbtn)*(yearcar/100);
    document.querySelector('.out_price__val').innerHTML=rez.toFixed(2);
}

 btn.addEventListener('click', rezult);

*/