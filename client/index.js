const express = require('express');
const app = express();

// servir des fichiers statiques
app.use(express.static(__dirname + '/server_de_fichier'));

// mongodb
const dbName = 'db';
const collectionName='velib';
const url = "mongodb+srv://cecile:cecile@cluster0.1byvq.mongodb.net/test";
const mongoClient = require('mongodb').MongoClient;

// Gestion des routes
// Accueil
app.get('/',  function (req, res) {
    console.log("Page index");

    // Me connecter à mongo et renvoyer des données à mon template pug
    mongoClient.connect(url, { useUnifiedTopology: true }, function (err,client){
        const collection = client.db(dbName).collection(collectionName);
        collection.find().toArray(function (err, data){
            res.render('index', { velibs : data});
        })
    })
});

app.listen(4000, function(){
    console.log('App started at http://localhost:4000');
})
