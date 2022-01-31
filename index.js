let calculator = require('./calculator')

//console.log(calculator)

//console.log(calculator.resta(10,5))
//console.log(calculator.suma(10,5))
//console.log(calculator.multiplicacion(2,0))
//console.log(calculator.division(2,1))


//let os = require('os') ESTO FUE UN EJEMPLO DE NPM MODULE
//console.log(os.cpus())

let express = require('express')

const server = express()

server.use((req, res) => {
    res.json({ result: calculator.suma(10, 5) })
})

server.listen(8080, () => console.log('server running on port 8080'))






