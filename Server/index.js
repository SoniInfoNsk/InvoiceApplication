

const express = require ("express") ;

const mysql = require ('mysql2') ;

const cors = require ("cors") ;

const bodyParser = require ("body-parser") ;

const app = express ();
app.use (cors()) ;

app.use (express.json());
app.use (cors());
app.use (bodyParser.urlencoded({extended:true}));

const db = mysql.createPool ({
    host : "localhost",
    user:"root",
    password:"root",
    database:"loginsystem"
})

app.get ("/api/get", (req,res) => {
    const sqlGet = "SELECT * FROM login";
    db.query (sqlGet, (error,result) =>{
      res.send(result);
    })
  })

  app.post ('/login', (req,res) => {
 
    const email = req.body.email ;
    const password = req.body.password ;
  
    db.query (" SELECT * FROM login WHERE email = ? password =? ",   [email,password] , (error, result) => {
      // console.log(error);
      if (error) {
         return res.send ({error: error}) ;
      } 
  
      if (result) {
         //res.setHeader('Content-Type', 'text/html');
        
          return res.send (result);
        
        } else {
        return res.send ({message : "Wrong Email/password Combination !"}) ;
        } 
      
    })
   });

   app.post ('/authentication/sign-up', (req,res) => {
 
    const email = req.body.email
    const password = req.body.password
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const designation = req.body.designation
    const totalemployee = req.body.totalemployee
  
    db.query ("INSERT INTO login (email,password,firstname,lastname,designation,totalemployee) VALUES (?,?,?,?,?,?)", [email,password,firstname,lastname,designation,totalemployee],(error, result) => {
      console.log(error);
      console.log(result);
    })
   });

   app.listen (5000,() => {
    console.log("running server")
  });