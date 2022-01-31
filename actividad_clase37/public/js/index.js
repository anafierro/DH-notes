window.addEventListener("load", function(){
    let container = document.querySelector('.container');
    let subtitulo = document.querySelector(".subtitulo");
    let enlace = document.querySelector("a");
    let p = document.querySelectorAll("p");
    let body = document.querySelector('body');

    let nombre = prompt("Ingrese su nombre");
    console.log(nombre);

    if(nombre != "") {
        subtitulo.innerHTML += nombre;
    } else {
        subtitulo.innerHTML += "Invitado";
    }
    
    subtitulo.style.textTransform = 'uppercase';

    let confirmacion = confirm("¿Desea colocar un fondo de pantalla?")
    console.log(confirmacion);
    if(confirmacion) {
        body.classList.add('fondo');
        enlace.style.color = '#E51B3E';
    }

    for (let i = 0; i < p.length; i++) {
        if(i % 2 == 0) {
            p[i].classList.add('destacadoPar');
        } else {
            p[i].classList.add('destacadoImpar');
        }
    }

    container.style.display = 'block';
})