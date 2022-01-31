function funcionesDeTareas (accion, tareas) {
    switch(accion) {
        case 'listar':
            tareas.forEach(function(valor, indice){
                console.log(tareas[indice])
            })
            break;
        case 'crear':
            break;
        case 'guardar archivo actualizado':
            break;
        case undefined:
            console.log('Necesito una accion')
            break;
        default:
            console.log('No entiendo')
    }
}

module.exports = funcionesDeTareas;