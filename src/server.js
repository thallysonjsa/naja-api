const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const productRoutes = require('./routes/product');
const userRoutes = require('./routes/users')

const server = express();

const url = "mongodb+srv://thallyson:admin@thallyson-yvt95.mongodb.net/test?retryWrites=true&w=majority"
const options = { 
    reconnectTries: Number.MAX_VALUE, 
    useNewUrlParser: true,
    reconnectInterval: 500,
    poolSize: 5,
    useUnifiedTopology: true 
};

mongoose.connect(url, options);

mongoose.connection.on('error', (err) => {
    console.log("Erro na conexão com o banco de dados: " + err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Disconexão com o banco de dados!');
})

server.use(express.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use('/products', productRoutes);
server.use('/users', userRoutes);

server.listen(3000, () => {
    console.log("Oi, ta funcionando!");
});

module.exports = server;