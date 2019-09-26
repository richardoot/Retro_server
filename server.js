//Imports
    const express = require('express');
    const bodyParser = require('body-parser');
    var apiRouter = require('.apiRouter').router;

    //require('./main.js');

//Initialiser bodyParser
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

//Instanciation du server
    let app = express();

//Configuration des routes
    app.get(`/`, function(req,res){
        res.setHeader('Content-Type','text/html');

        res.status(200).send('<h1> Hello World !! </h1>');
    });


app.use('/api/', apiRouter);

//Launch server
app.listen(8080, () => console.log("serveur en écoute sur le port 8080"));