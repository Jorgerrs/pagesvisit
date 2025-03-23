var resetar = document.getElementById("btnReestablecer");
var cont_visitas = document.getElementById("contadorVisitas");
var visitas = localStorage.getItem("visitas");
var contador;

    if(!visitas){
        contador = 0;
        localStorage.setItem("visitas", contador);
    } else {
        contador = localStorage.getItem("visitas");
        contador++;
        localStorage.setItem("visitas", contador);
    }

    cont_visitas.innerHTML = contador;

    resetar.onclick = function resetear (){
        localStorage.removeItem("visitas");
        location.reload();
    }