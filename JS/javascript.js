'use strict'

window.addEventListener('load', function(){
    let formulario = document.querySelector('#form');
    


    // Ocultar avisos de error
    let aviso_error = document.getElementsByClassName("avisoError");
    let aviso_error_Billetes = document.getElementsByClassName("avisoErrorBilletes");

    for(let i=0;i<aviso_error.length;i++){
        aviso_error[i].style.display= "none";       
    }
    for(let j=0;j<aviso_error_Billetes.length;j++){
        aviso_error_Billetes[j].style.display= "none";
    }

    
    // Suma de Monedas y Billetes

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