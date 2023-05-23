
/*ARABA MARKALARINI TEK TEK YAZDIRAN KOD*/

let UL_DOM = document.querySelector('#userList')

let carBrand = [
  'Ford',
  'Audi',
  'BMW',
  'Chevrolet',
  'Citroen',
  'Dacia',
  'DS Automobiles',
  'Fiat',
  'Honda',
  'Hyundai',
  'Volvo',
]

function arabaMarkaListesi(carBrand) {

let counter=0
  let timerId =setInterval(()=> {
        
    let li_DOM = document.createElement('li')
    li_DOM.innerHTML = carBrand[counter]
    UL_DOM.appendChild(li_DOM)
    if (counter<carBrand.length-1){
      counter++
    }
    else {
      clearInterval(timerId)
    }
  },1000)

  
    
    



}

arabaMarkaListesi(carBrand)





