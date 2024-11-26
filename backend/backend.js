const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const express = require ('express')
const bcrypt = require('bcrypt')
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())

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


// Schema Evento
const eventoSchema = mongoose.Schema({
    titulo: {type: String},
    data: {type: Date},
    hora: {type: String},
    local: {type: String},
    info: {type: String}
})

// model Evento
const Evento = mongoose.model("Evento", eventoSchema)

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

// Cadastro de evento (teste)
// http://localhost:3000/evento/cadastro
app.post('/evento/cadastro', async (req, res) => {
    try{
        console.log("Tentando criar evento ....")

        const titulo = req.body.titulo_evento //nome
        const data = req.body.data_evento //sobrenome
        const hora = req.body.hora_evento
        const local = req.body.local_evento
        const info = req.body.info_evento

        const evento = new Evento({
            titulo_evento: titulo,
            data_evento: data,
            hora_evento: hora,
            local_evento: local,
            info_evento: info
        })

        const respMongo = await evento.save()
        console.log(respMongo)
        console.log("Evento criado com sucesso:", respMongo);
        res.status(201).end()        
    }catch(erro){
        //console.log(console.erro)
        console.log("Erro no Cadastro", erro.message)
        res.status(409).end()
    }
})  

// Requisição de Eventos (teste)
app.get('/eventos', async (req, res) => {
    try {
        const eventos = await Evento.FindAll()
        console.log(req.body)
    } catch (erro) {
        console.log("Erro ao obter eventos:", erro);
        res.status(500).json({ error: "Erro ao obter eventos" });
    }
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
        res.status(200).json({ mensagem: "Login bem-sucedido" });
    }catch (erro) {
        console.log("Erro no login:", erro);
        res.status(500).end();
    }
});

// Esquema para o contador de acessos
const contadorAcessosSchema = mongoose.Schema({
    count: { type: Number, default: 0 },
    data: { type: Date, default: Date.now } // Adiciona a data do acesso
});
const ContadorAcessos = mongoose.model("ContadorAcessos", contadorAcessosSchema);

// Função para incrementar o contador de acessos
async function incrementContadorAcessos() {
    try {
        let counter = await ContadorAcessos.findOne();
        if (!counter) {
            // Se o contador não existe, cria um com count = 0
            counter = new ContadorAcessos({ count: 0 });
        }
        counter.count += 1;
        counter.data = new Date(); // Atualiza a data do último acesso
        await counter.save();
        console.log("Acesso registrado. Total de acessos:", counter.count);
    } catch (erro) {
        console.log("Erro ao incrementar contador de acessos:", erro);
    }
}

// Middleware para incrementar o contador em todas as requisições
app.use(async (req, res, next) => {
    await incrementContadorAcessos();
    next();
});

// Rota para visualizar o número de acessos
app.get('/acessos', async (req, res) => {
    try {
        const counter = await ContadorAcessos.findOne();
        const accessCount = counter ? counter.count : 0;
        res.status(200).json({ totalAccesses: accessCount });
    } catch (erro) {
        console.log("Erro ao obter contador de acessos:", erro);
        res.status(500).json({ error: "Erro ao obter contador de acessos" });
    }
});

