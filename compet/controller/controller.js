var express  = require('express');
var mysql  = require('mysql');
var hostname = 'localhost'; 
var bodyParser = require('body-parser');
var port = 3000; 
var app = express();

var myRouter = express.Router(); 

app.use(function(request, response, next){
   response.header("Access-Control-Allow-Origin","*");
   response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
   response.header("Access-Control-Allow-Headers","Origin X-Requested-With, Content-Type, Accept");
   next();
})

var connexion  = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password : '',
    database: 'bd_info_compet'
})


connexion.connect(function(err){
    if(err) throw console.error();
    console.log('connexion à la base de donnée');
})

//
app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({     
  extended: true
}));


////les routes de competition
app.delete('/competition/:id_Comp', function (req, res) {
   console.log(" ----------- "+req.body.id_Comp);
   connexion.query('DELETE FROM competition WHERE id_Comp=?', [req.params.id_Comp], function (error, results, fields) {
      // if (error) throw error;
      // res.end('Opération effectuée avc succès!');

      if (error) {
       
         res.end('non');
       
      }else{
        
         res.end('oui');
      
      }
  
    });
});


app.get('/competition', function (req, res) {
   console.log(req);
   connexion.query('select competition.id_Comp,competition.nom_Comp,competition.description,categorie.libelle,competition.conditions,competition.id_Categ from competition,categorie,organiser where competition.id_Categ=categorie.id_Categ and organiser.id_Comp=competition.id_Comp ', function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    });
 });

 app.get('/competition_voir', function (req, res) {
   console.log(req);
   connexion.query('select competition.id_Comp,competition.nom_Comp,competition.description,categorie.libelle,competition.conditions,competition.id_Categ from competition,categorie,organiser where competition.id_Categ=categorie.id_Categ and competition.etat=1 and organiser.id_Comp=competition.id_Comp ', function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    });
 });

 app.get('/competition_voir_categorie/:libelle', function (req, res) {
   console.log(req);
   connexion.query('select competition.id_Comp,competition.nom_Comp,competition.description,categorie.libelle,competition.conditions,competition.id_Categ from competition,categorie,organiser where competition.id_Categ=categorie.id_Categ and competition.etat=1 and organiser.id_Comp=competition.id_Comp and categorie.libelle=?',[req.params.libelle], function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    });
 });
 app.get('/competition_voir_categorie_nv/:id_Pers', function (req, res) {
   console.log(req);
   connexion.query('select competition.id_Comp,competition.nom_Comp,competition.description,categorie.libelle,competition.conditions,competition.id_Categ from competition,categorie,organiser,participer where competition.id_Categ=categorie.id_Categ and competition.etat=1 and organiser.id_Comp=competition.id_Comp and participer.id_Comp=competition.id_Comp and organiser.id_Pers=?',[req.params.id_Pers], function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    });
 });
 app.get('/competition_voir_listecandidature/:id_Comp', function (req, res) {
   console.log(req);
   connexion.query('select participant.id_Pers,participant.nom_Pers,participant.prenom_Pers,participer.date_inscrit,participer.etat,participer.motivation,participer.document,participer.photo from participant,participer,competition where participant.id_Pers=participer.id_Pers and competition.id_Comp=participer.id_Comp and participant.etat=0 and competition.id_Comp=?',[req.params.id_Comp], function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    });
 });
 

 app.get('/competition_voir_categorie_nv/:id_Pers/:libelle', function (req, res) {
   console.log(req);
   connexion.query('select competition.id_Comp,competition.nom_Comp,competition.description,categorie.libelle,competition.conditions,competition.id_Categ from competition,categorie,organiser,participer where competition.id_Categ=categorie.id_Categ and competition.etat=1 and organiser.id_Comp=competition.id_Comp and participer.id_Comp=competition.id_Comp and organiser.id_Pers=? and categorie.libelle=?',[req.params.id_Pers,req.params.libelle], function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    });
 });
 

 app.get('/competition/:id', function (req, res) {
   connexion.query('select competition.id_Comp,competition.description,competition.nom_Comp,competition.conditions,categorie.libelle ,organisateur.nom_Pers,organisateur.prenom_Pers,organisateur.mail_Pers,organiser.date_debut,organiser.date_fin from competition,categorie,organiser,organisateur where competition.id_Categ=categorie.id_Categ and organisateur.id_Pers=organiser.id_Pers and organiser.id_Comp=competition.id_Comp and competition.id_Comp=?', [req.params.id], function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    });
 });

//POST
app.post('/competition', function (req, res) {
   var postData  = req.body;
   connexion.query('INSERT INTO competition SET ?', postData, function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    });
 });

 //POST
app.post('/postuler', function (req, res) {
   var postData  = req.body;
   connexion.query('INSERT INTO particper SET ?', postData, function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    });
 });

 
 app.get('/route_organisateur_detail/:id_Comp', function (req, res) {
   connexion.query('select organisateur.id_Pers,organisateur.nom_Pers, organisateur.prenom_Pers,organisateur.mail_Pers from competition,organisateur,organiser where organisateur.id_Pers=organiser.id_Pers and organiser.id_Comp=competition.id_Comp and competition.id_Comp=?', [req.params.id_Comp], function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    });
 });


   //..////// nombre de participant par competition
   app.get('/route_nbre_participant/:id_Comp', function (req, res) {
      connexion.query('select COUNT(participer.id_Pers) as nbre from participer where participer.id_Comp=?', [req.params.id_Comp], function (error, results, fields) {
         if (error) throw error;
         res.end(JSON.stringify(results));
       });
    });
    
   
 ////fin competition





//////categorie

app.get('/categorie', function (req, res) {
  /// console.log(req);
   connexion.query('select * from categorie', function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    });
 });
 
 app.get('/categorie/:id_Categ', function (req, res) {
   console.log(req);
   connexion.query('select libelle from categorie where id_Categ=?',[req.params.id_Categ], function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    });
 });

 app.post('/categorie', function (req, res) {
   var postData  = req.body;
   connexion.query('INSERT INTO categorie SET ?', postData, function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    });
 });



 app.delete('/categorie/:id_Categ', function (req, res) {
   console.log(" ----------- "+req.body.id_Categ);
   connexion.query('DELETE FROM categorie WHERE id_Categ=?', [req.params.id_Categ], function (error, results, fields) {
      // if (error) throw error;
      // res.end('Opération effectuée avc succès!');

      if (error) {
       
         res.end('non');
       
      }else{
        
         res.end('oui');
      
      }
  
    });
});
 

////fin categorie

////participant
app.get('/participant', function (req, res) {
   /// console.log(req);
    connexion.query('select * from participant', function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
  });
  
  app.get('/participant/:id_Pers', function (req, res) {
    console.log(req);
    connexion.query('select * from participant where id_Pers=?',[req.params.id_Pers], function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
  });
 
  app.post('/participant', function (req, res) {
    var postData  = req.body;
    connexion.query('INSERT INTO participant SET ?', postData, function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
  });

  app.delete('/categorie/:id_Pers', function (req, res) {
    console.log(" ----------- "+req.body.id_Pers);
    connexion.query('DELETE FROM participant WHERE id_Pers=?', [req.params.id_Pers], function (error, results, fields) {
       // if (error) throw error;
       // res.end('Opération effectuée avc succès!');
 
       if (error) {
        
          res.end('non');
        
       }else{
         
          res.end('oui');
       
       }
   
     });
 });


 
 app.put('/participant_etat/:id_Pers/:etat', function (req, res) {
   console.log(" ----------- "+req.body.id_Pers);
   connexion.query('UPDATE participant SET etat=? WHERE id_Pers=?', [req.params.etat,req.params.id_Pers], function (error, results, fields) {

      if (error) {res.end('non');
       
      }else{res.end('oui');}
  
    });
});

///fin participant

/////organisateur

app.get('/organisateur', function (req, res) {
   /// console.log(req);
    connexion.query('select * from organisateur', function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
  });
  
  app.get('/organisateur/:id_Pers', function (req, res) {
    console.log(req);
    connexion.query('select * from organisateur where id_Pers=?',[req.params.id_Pers], function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
  });
 
  app.post('/organisateur', function (req, res) {
    var postData  = req.body;
    connexion.query('INSERT INTO organisateur SET ?', postData, function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
  });
 
 

  

  app.put('/organisateur_etat/:id_Pers/:etat', function (req, res) {
   console.log(" ----------- "+req.body.id_Pers);
   connexion.query('UPDATE  organisateur SET etat=? WHERE id_Pers=?', [req.params.etat,req.params.id_Pers], function (error, results, fields) {

      if (error) {res.end('non');
       
      }else{res.end('oui');}
  
    });
});


 
  app.delete('/organisateur/:id_Pers', function (req, res) {
    console.log(" ----------- "+req.body.id_Pers);
    connexion.query('DELETE FROM organisateur WHERE id_Pers=?', [req.params.id_Pers], function (error, results, fields) {
       // if (error) throw error;
       // res.end('Opération effectuée avc succès!');
 
       if (error) {res.end('non');
        
       }else{res.end('oui');}
   
     });
 });




///fin organisateur



///admin

app.get('/admin', function (req, res) {
   /// console.log(req);
    connexion.query('select * from administrateur', function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
  });
  app.get('/admin/:id_Pers', function (req, res) {
    console.log(req);
    connexion.query('select * from administrateur where id_Pers=?',[req.params.id_Pers], function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
  });
 
  app.post('/admin', function (req, res) {
    var postData  = req.body;
    connexion.query('INSERT INTO administrateur SET ?', postData, function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
  });
 
 
 
  app.delete('/admin/:id_Pers', function (req, res) {
    console.log(" ----------- "+req.body.id_Pers);
    connexion.query('DELETE FROM administrateur WHERE id_Pers=?', [req.params.id_Pers], function (error, results, fields) {
       // if (error) throw error;
       // res.end('Opération effectuée avc succès!');
 
       if (error) {
        
          res.end('non');
        
       }else{
         
          res.end('oui');
       
       }
   
     });
 });

//fin admin


////personne
app.get('/personne', function (req, res) {
   /// console.log(req);
    connexion.query('select * from personne', function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
  });
  
  app.get('/personne/:id_Pers', function (req, res) {
    console.log(req);
    connexion.query('select * from personne where id_Pers=?',[req.params.id_Pers], function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
  });
 
  app.post('/personne', function (req, res) {
    var postData  = req.body;
    connexion.query('INSERT INTO personne SET ?', postData, function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
  });

  app.delete('/personne/:id_Pers', function (req, res) {
    console.log(" ----------- "+req.body.id_Pers);
    connexion.query('DELETE FROM personne WHERE id_Pers=?', [req.params.id_Pers], function (error, results, fields) {
       if (error) {res.end('non'); }else{res.end('oui');}});});

///fin personne






  // GET
  app.get('/route_organisateur_competition/:id_Pers', function (req, res) {
   connexion.query('select competition.nom_Comp,categorie.libelle,organisateur.nom_Pers ,organisateur.prenom_Pers,organisateur.pseudo,organisateur.mail_Pers,organisateur.id_Pers from competition,categorie,organiser,organisateur where competition.id_Categ=categorie.id_Categ  and organiser.id_Comp=competition.id_Comp and organiser.id_Pers=organisateur.id_Pers and organisateur.id_Pers=?', [req.params.id_Pers], function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    });
 });

 // GET
 app.get('/route_participant_competition/:id_Pers', function (req, res) {
  connexion.query('select competition.nom_Comp,categorie.libelle,participer.date_inscrit,participer.score,organisateur.nom_Pers as og_nom,organisateur.prenom_Pers as og_prenom from competition,categorie,participer,participant,organisateur where competition.id_Categ=categorie.id_Categ  and participer.id_Comp=competition.id_Comp and participer.id_Pers=participant.id_Pers and participer.id_Pers=?', [req.params.id_Pers], function (error, results, fields) {
     if (error) throw error;
     res.end(JSON.stringify(results));
   });
});






 // GET

 





//POST
app.post('/enregOrganisateur', function (req, res) {
   var postData  = req.body;
   connexion.query('INSERT INTO presonne SET ?', postData, function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    });
   connexion.query('INSERT INTO organisateur SET ?', postData, function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    });
 });

 ///login   'select id_Pers from administrateur where pseudo=? and password=?', [req.params.mail_Pers,req.params.password]

  //POST
app.post('/login', function (req, res) {
    var postData  = req.body;
    
   connexion.query('select id_Pers from administrateur where pseudo=? and password=?', [postData.pseudo,postData.password], function (error, results, fields) {
      if (error) throw error;
      if(results.id_Pers!=0){ res.end(JSON.stringify(results));}else{ }});});


 /////

  // nombre de participant par competition
  app.get('/max_personne_id', function (req, res) {
   connexion.query('SELECT id_Pers FROM personne WHERE id_Pers = (SELECT MAX(id_Pers) FROM personne)', function (error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    });
 });
 
// Démarrer le serveur
app.listen(port, hostname, function(){});