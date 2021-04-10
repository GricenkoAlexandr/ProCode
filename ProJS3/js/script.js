`use strict`;

let btn=document.querySelector('.price-btn');

let rezult=()=>{
    const radbtn=document.querySelector('.radio_btn').value;
    const yearcar=Number(document.querySelector('.year_car').value);
    const price=Number(document.querySelector('.price_val').value);
    let rez=(price*radbtn)*(yearcar/100)
    document.querySelector('.out_price__val').textContent=rez;
}
 btn.addEventListener('click', rezult);
