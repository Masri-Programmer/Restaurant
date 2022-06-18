// create an express app
const express=require('express')
const excelToJson = require('convert-excel-to-json');
var cors = require('cors')
const app=express()
app.use(cors());
const path=require('path');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
// app.use(bodyParser.json())
  

// use the express-static middleware
app.use(express.static("public"))

// define the first route

app.get("/", function (req, res) {
 res.sendFile(__dirname+'/tasty/contact.html')
})

app.get("/menu", function (req, res) {
  const result = excelToJson({
    sourceFile: './data.xlsx',
    sheets: ['menu']
})
  res.send(result)
})

app.get("/gallery", function (req, res) {
  const result = excelToJson({
    sourceFile: './data.xlsx',
    sheets: ['gallery']
})
  res.send(result)
})

app.get("/events", function (req, res) {
  const result = excelToJson({
    sourceFile: './data.xlsx',
    sheets: ['events']
})
  res.send(result)
})

// app.post("/send", (req, res) => {

// let transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     type: 'OAuth2',
//     user: process.env.MAIL_USERNAME,
//     pass: process.env.MAIL_PASSWORD,
//     clientId: process.env.OAUTH_CLIENTID,
//     clientSecret: process.env.OAUTH_CLIENT_SECRET,
//     refreshToken: process.env.OAUTH_REFRESH_TOKEN
//   }
// });
// let mailOptions = {
//   from: "webtraining1998@gmail.com",
//   to: "masri_mohamad@protonmail.com",
//   subject: 'Nodemailer Project',
//   html: `<h1>Name: ${req.body.name}</h1>
//          <p>Email: ${req.body.email}</p>
//          <p>Message: ${req.body.message}</p>
//          <p>Date-Time: ${req.body.dateAndTime}</p>
//          <p>Number of People: ${req.body.NoOfPeople}</p>
//           `
// };

// transporter.sendMail(mailOptions, function(err, data) {
//   if (err) {
//     console.log("Error " + err);
//   } else {
//     console.log("Email sent successfully");
//   }
// });
// res.end();
// })
// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));