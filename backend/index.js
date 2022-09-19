const http= require('http')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const cors = require("cors");
const route = require('./routes/route')
const adminrouter= require('./routes/admin-route');

const app = express();


const server= http.createServer(app);
const port = process.env.PORT||'3000';


app.use(cors());

require("dotenv/config");
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.send("Hello world!")
})

app.use("/api/contact",route)
app.use("/api/admin",adminrouter)
// const api = process.env.API_URL;

//mongodb connection
const url = process.env.DATA_URL;
mongoose.connect(url).then(()=> {
    console.log("Connection established");
}).catch(err => {
    console.log("Error connecting"+ err);
})


//route

// app.use(`${api}/contact`, route);


server.listen(port, () => {
    console.log(`listening on port ${port}`)
})