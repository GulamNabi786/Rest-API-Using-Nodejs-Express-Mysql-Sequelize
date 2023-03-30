const express = require('express');
const cors = require('cors'); //CROSS ORIGIN RESOURCE SHARING
const { json } = require('express');


const app = express();

const corOptions = {
    origin: 'https://localhost:8080'
}

//ROUTERS

const router = require('./routes/productRouter');
app.use('./api/products', router);

//MIDDLEWARES

app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//TESTING API

app.get('/', (req, res) =>{
    res.json({ message: 'hello from api'})
});

const PORT = process.env.PORT || 8080;

//server

app.listen(PORT, () =>{
    console.log(`Server is running port ${PORT}`);
});


