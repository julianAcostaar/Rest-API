const express = require('express');
const app = express();
const morgan = require('morgan');
const router = require('../routes/index');


// Middelware
app.use(express.urlencoded({extended: false})); //soportamos datos de texto, no imágenes ni files pesados
app.use(express.json());
app.use(morgan('dev')); //permite hacer un tracert de las operaciones que se realizan

// routes
app.use(router);

// server
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log(`Server listen on port ${app.get('port')}`);
});