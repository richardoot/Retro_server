//Imports
    const express = require('express');
    const bodyParser = require('body-parser');

    console.log('DEBUG 0');
    
    var apiRouter = require('./apiRouter').router;

//Instanciation du server
    let app = express();

//Initialiser bodyParser
    app.use(bodyParser.urlencoded({ extended: false  }));
    app.use(bodyParser.json());




//Configuration des routes
    app.get(`/`, function(req,res){
        res.setHeader('Content-Type','text/html');

        res.status(200).send('<h1> Hello World !! </h1>');
    });
 
app.use('/api/', apiRouter);

//Launch server
app.listen(8080, () => console.log("serveur en écoute sur le port 8080"));