
'use script';

const test = () => {
    const ingridients = [
      { id: 'e88', name: 'картошка', alergen: false, kkal: 100 },
      { id: '08a', name: 'лук', alergen: true, kkal: 200 },
      { id: 'a0b', name: 'шкварки', alergen: false, kkal: 300 },
      { id: '0dd', name: 'бульйон', alergen: false, kkal: 400 },
      { id: 'd12', name: 'морковка', alergen: false, kkal: 500 },
      { id: '8a1', name: 'оливковая олия', alergen: false, kkal: 600 }
    ];
  
    const result = {
      status: 'ok',
      ingridients, // ingridients: ingridients,
      payload: {
        error: 'test_fail',
        message: 'тест не пройден'
      }
    }
  
    return result;
  }

  /*
  написать код, который из результата этой функции(саму функцию менять нельзя, вы работаете с ней как она есть),
   с результата функции, при условии что вернули статус ок, надо внять все ингридиенты которые не аллергены, и 
   посчитать их общую калорийность. Массив ингредиентов есть всегда, даже если статус не ок.
  */


  const {ingridients} =test();

  const rez=ingridients.filter(alerg=()=> {
    ingridients===true;
  })
  console.log(ingridients);