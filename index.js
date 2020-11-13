const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send("Olá Leonardo!!")
})

app.get('/msg', function(req,res){
    res.send("Essa mensagem é automatica")
})

app.get('/sobre', function(req,res){
    res.send("Essa página esta sendo desenvolvida por Leonardo")
})
app.listen(3000,function(){
    console.log("Conexão inicializada")
});
 