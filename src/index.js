const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require("body-parser");
const appRouter = require('./router')
const port=process.env.PORT ||5000

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/uploads', express.static('./uploads'))

const url = `mongodb://localhost:127.0.0.1:27017/bunni`;

const connectionParams={
    useNewUrlParser: true,
    
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
    
    
app.use('/',appRouter)


app.listen(port, ()=>{
    console.log("5000 port working");
});