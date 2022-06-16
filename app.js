// create an express app
const express=require('express')
const excelToJson = require('convert-excel-to-json');
var cors = require('cors')
const app=express()
app.use(cors());
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



// use the express-static middleware
app.use(express.static("public"))

// define the first route

app.get("/", function (req, res) {
 res.send("<h1>Hello World!</h1>")
})

app.get("/menu", function (req, res) {
  const result = excelToJson({
    sourceFile: './data.xlsx',
    sheets: ['menu']
})
  res.send(result)
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));