// DEPENDACIES
const bodyParser = require('body-parser')
const express = require('express')

// CONFIGURATION
const app = express()
let indexAbsolutePath = __dirname + '/views/index.html'
let assetsAbsolutePath = __dirname + '/public'

// MIDDLEWARE
app.use(express.json())
app.use("/public", express.static(assetsAbsolutePath));
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req,res,next )=> {
    const currentDate = new Date().toString()
    const currentTimeString = currentDate.match(/\d{2}:\d{2}:\d{2}/)[0];
    let requestMethod = req.method
    let requestPath = req.path
    let requestIP = req.ip
    console.log(`${currentTimeString} ${requestMethod} ${requestPath} - ${requestIP}`)
    next()
})

// CONTROLLERS
// ROUTES
// index route / home route
app.get('/',(req, res)=> {

    res.sendFile(indexAbsolutePath)
})

app.get('/api/:input',(req, res)=> {
    const input = req.params.input
    console.log(input)

    // case that our input is in date format
    if(input.match(/\d{4}-\d{2}-\d{2}/)){
        let date = new Date(input)
        let unix = date.getTime()
        let utc = date.toUTCString()
        
        console.log(date)
        let responseObject = {
            unix: unix,
            utc: utc
        }

    res.json(responseObject)
    } else if (input.match(/\d{13}/)){
        let unix = parseInt(input)
        let date = new Date(parseInt(input))
        let utc = date.toUTCString()
        
        let responseObject = {
            unix: unix,
            utc: utc
        }
        res.json(responseObject)
    }
    
})


//EXPORT
module.exports = app