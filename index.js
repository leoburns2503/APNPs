const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname,"public")))

app.get('/', function(req,res){
    res.render('index.ejs', {})
})

app.get('/usuarios', function(req,res){
    res.render('usuarios.ejs', { usuarios:[
        {nome:'Leonardo',email:'leonardo.bfmc@gmail.com'},
        {nome:'Ana',email:'Ana@gmail.com'},
        {nome:'Raquel',email:'Raquel@gmail.com'},
        {nome:'Maria',email:'Maria@gmail.com'},
    ]})
})

app.listen(3000,function(){
    console.log("Conexão inicializada")
});
 