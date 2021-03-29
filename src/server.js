const express = require('express');
const router = require('./routes')

const app = express();

//habilitar arquivos staticos
app.use(express.static('public'));
app.use(router)


app.listen(3333, () => console.log("Rodando"));