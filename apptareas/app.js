const fs = require('fs');
const tareas = JSON.parse(fs.readFileSync('./tareas.json', 'utf-8'));

//console.log(tareas);
//console.log(typeof tareas);


//console.log(process.argv[2]);
const accion = process.argv[2];

require('./funcionesDeTareas')(accion, tareas);




