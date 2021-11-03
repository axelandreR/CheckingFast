'use strict'

window.addEventListener('load', function(){
    let formulario = document.querySelector('#form');
    
    function sumaElementos(array){
        let suma = 0;
        for(let i=0; i<array.length;i++){
            suma = suma + (Number(array[i].value));
        }
        return suma;
    }; 


    formulario.addEventListener('submit', function(){
        let monedas = document.getElementsByClassName('monedas');
        let sumaMonedas = sumaElementos(monedas);

        let billetes = document.getElementsByClassName('billetes');
        let sumaBilletes = sumaElementos(billetes);

        
        console.log(sumaMonedas);
    })
});