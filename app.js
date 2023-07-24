// DEPENDACIES
const bodyParser = require('body-parser')
const express = require('express')
var cors = require('cors');


// CONFIGURATION
const app = express()
let indexAbsolutePath = __dirname + '/views/index.html'
let assetsAbsolutePath = __dirname + '/public'

// MIDDLEWARE
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204
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

app.get('/api',(req, res)=> {
    let currentDate = new Date()
    let unix = currentDate.getTime()
    let utc = currentDate.toUTCString()
    let responseObject = {
        unix: unix,
        utc: utc
    }
    res.json(responseObject)
})

app.get('/api/:input',(req, res)=> {
    const input = req.params.input
    console.log(input)

    // case that our input is in date format
    if(input.match(/\d{4}-\d{2}-\d{2}/)){
        let date = new Date(input)
        let unix = date.getTime()
        let utc = date.toUTCString()
        
        console.log(unix)
        console.log(utc)

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
    } else if(input === "") {
        let currentDate = new Date()
        let unix = currentDate.getTime()
        let utc = currentDate.toUTCString()
        let responseObject = {
            unix: unix,
            utc: utc
        }
        res.json(responseObject)
    } else {
        // check if the input is a valid date string
        let decodedInput = decodeURIComponent(input); // Decode URL-encoded characters
        let date = new Date(Date.parse(decodedInput));
        if (!isNaN(date)) {
            let unix = date.getTime();
            let utc = date.toUTCString();
            let responseObject = {
                unix: unix,
                utc: utc
            };
            res.json(responseObject);
        } else {
            res.json({ error : "Invalid Date" });
        }

    }
    
})


//EXPORT
module.exports = app