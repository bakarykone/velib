
const express = require('express');
const app = express();


// servir des fichiers statiques
app.use(express.static(__dirname + '/server_de_fichier'));

app.listen(4000, function(){
    console.log('App started at http://localhost:4000');
})