const express = require('express')
const app = express()

app.get('/', function(req,res){
    res.send("Olá Leonardo!!")
})

app.get('/mensagem', function(req,res){
    res.send("Essa mensagem é automatica")
})

app.listen(3000,function(){
    console.log("Conexão inicializada")
});