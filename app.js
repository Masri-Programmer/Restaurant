var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())
const excelToJson = require('convert-excel-to-json');


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