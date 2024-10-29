const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const express = require ('express')
const session = require('express-session');
const bcrypt = require('bcrypt') 
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())
app.use(session({
        secret: "aasassasasasass",
        cookie: {maxAge: 30000},
        saveUninitialized: false,
    })
);

//provavelmente tem que acertar os nomes das variaves/objetos com o frontend.js

// cria uma função para fazer a conexão com o MongoDB
async function conectarAoMongoDB(){
    try{
        await mongoose.connect("mongodb+srv://EnzoZequim:123@cluster0.nf2kb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Conectado ao MongoDB")
    }catch(erro){
        console.log("Erro ao conectar ao MongoDB", erro)
    }
}

app.listen(3000, () => {  //fala que o banco vai estar na porta 3000 e ficar monitorando
    try{
        conectarAoMongoDB()
        console.log("up and running")
    }catch(e){  //controle de exeção (erro que não dependo do codigo em si "erro de uma entidade externa")
        console.log("Erro", e)
    }
})


//Criar "tabelas" (schema ):

//validador Usuario
const usuarioSchema = mongoose.Schema({
    login:{type: String, required: true},
    apelido: {type: String, required: true},
    email: {type: String, required: true, unique: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'E-mail inválido.']}, //validador de email
    password: {type: String, required: true}
})
usuarioSchema.plugin(uniqueValidator)
//Modelo Usuario
const Usuario = mongoose.model("Usuario", usuarioSchema)


//End Points 


// Rota de cadastro
//  http://localhost:3000/cadastro  poderia usar outra coisa no lugar de /cadastro
app.post('/cadastro', async (req, res) => {
    try{
        console.log("Tentando criar usuario ....")

        const login = req.body.login //nome
        const apelido = req.body.apelido //sobrenome
        const password = req.body.password
        const criptografada = await bcrypt.hash(password, 10)
        const email = req.body.email

        const usuario = new Usuario({
            login: login,
            apelido: apelido,
            password: criptografada,
            email: email
        })

        const respMongo = await usuario.save()
        console.log(respMongo)
        console.log("Usuário criado com sucesso:", respMongo);
        res.status(201).end()        
    }catch(erro){
        //console.log(console.erro)
        console.log("Erro no Cadastro", erro.message)
        res.status(409).end()
    }
})

app.get('/listarAutorizado', async(req, res) => {
    if(req.session.authenticated) {
        console.log('autenticado');
        //res.send('autenticado');
    }
    else {
        console.log('negado');
    }
    
    //res.send('negado');
});

// Rota login
//  http://localhost:3000/login
app.post('/login', async (req, res) =>{
    try{
        const email = req.body.email
        const password = req.body.password
        
        const u = await Usuario.findOne({ email })   //({email: req.body.email})
        if(!u){ 
            return res.status(401).json({menssagem: "Login Invalido"})
        }
        
        const senhaValida = await bcrypt.compare(password, u.password)
        if(!senhaValida){
            return res.status(401).json({menssagem: "Senha Invalida"})
        }

        req.session.authenticated = true;
        req.session.mensagem = "Login bem-sucedido";
        req.session.user = {u};
        res.json(req.session);

        console.log(req.session);

        //res.status(200).json(req.session);
    }catch (erro) {
        console.log("Erro no login:", erro);
        res.status(500).end();
    }
});