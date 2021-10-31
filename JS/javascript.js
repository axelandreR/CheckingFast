'use strict'

window.addEventListener('load', function(){
    let aviso_error = document.getElementsByClassName("avisoError");
    let aviso_error_Billetes = document.getElementsByClassName("avisoErrorBilletes");

    for(let i=0;i<aviso_error.length;i++){
        aviso_error[i].style.display= "none";       
    }
    for(let j=0;j<aviso_error_Billetes.length;j++){
        aviso_error_Billetes[j].style.display= "none";
    }
});