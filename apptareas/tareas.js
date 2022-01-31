const fs = require('fs');
  

function escribirJSON(array) {
    const tareas = JSON.parse(fs.readFileSync('./tareas.json', 'utf-8'));
    tareas.push(array);
    fs.writeFile('./tareas.json',  JSON.stringify(tareas), function (err){
        if(err) throw err;
        console.log('La tarea fue añadida')
    });
}

