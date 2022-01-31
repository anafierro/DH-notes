window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let input = document.querySelector('#titulo');
    let estadoSecreto = 0;
    
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover', function(){
        titulo.style.color = 'orange';
    })

    titulo.addEventListener('mouseout', function(){
        titulo.style.color = 'black';
    })

    input.addEventListener('keypress', function(e){
        if(estadoSecreto === 0 && e.key == "s") {
            estadoSecreto = 1;
            console.log(estadoSecreto);
        } else if (estadoSecreto === 1 && e.key == "e"){
            estadoSecreto = 2;
            console.log(estadoSecreto);
        } else if (estadoSecreto === 2 && e.key == "c"){
            estadoSecreto = 3;
            console.log(estadoSecreto);
        } else if ( estadoSecreto === 3 && e.key == "r"){
            estadoSecreto = 4;
            console.log(estadoSecreto);
        } else if (estadoSecreto === 4 && e.key == "e"){
            estadoSecreto = 5;
            console.log(estadoSecreto);
        } else if (estadoSecreto === 5 && e.key == "t"){
            estadoSecreto = 6;
            console.log(estadoSecreto);
        } else if (estadoSecreto === 6 && e.key == "o"){
            estadoSecreto = 0;
            console.log(estadoSecreto);
            alert ('SECRETO MAGICO');
        } else {
            estadoSecreto = 0;
            console.log(estadoSecreto);
        }
    })

}