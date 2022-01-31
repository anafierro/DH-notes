const fs = require ('fs');
const path = require('path');

const logsFilePath = path.resolve(__dirname, '../logs/userLogs.txt')

//const log = (path) => `El usuario ingreso a la ruta: ${path}\n`;

function logMiddleware (req, res, next) {
    fs.appendFileSync(logsFilePath, 'El usuario ingresó a la ruta:' + req.url + '\n');

    next();
};

module.exports = logMiddleware;