// Dependencias
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const express = require ('express')
const path = require("path");
const bcrypt = require('bcrypt')
const cors = require('cors')
const jwt = require('jsonwebtoken');
const { type } = require('os');
const { stringify } = require('querystring');
const { error } = require('console');
require('dotenv').config();

// Configuração do App
const app = express()
app.use(express.json())
app.use(express.static(path.join(process.cwd(), 'front', 'pages')));
app.use(cors())

// Funções MongoDB
// cria uma função para fazer a conexão com o MongoDB
async function conectarAoMongoDB(){
    try{
        await mongoose.connect("mongodb+srv://EnzoZequim:123@cluster0.nf2kb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")  // Se for implementar era bom esconder a chave de conexão
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




// -------------------- Usuario --------------------\\
//validador Usuario
const usuarioSchema = mongoose.Schema({
    login:{type: String, required: true},
    apelido: {type: String, required: true},
    email: {type: String, required: true, unique: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'E-mail inválido.']}, //validador de email
    password: {type: String, required: true},
    adm: {type: Boolean, default: false}
})
usuarioSchema.plugin(uniqueValidator)
//Modelo Usuario
const Usuario = mongoose.model("Usuario", usuarioSchema)

// -------------------- Cadastro -------------------- \\
// Rota de cadastro
//  http://localhost:3000/cadastro  poderia usar outra coisa no lugar de /cadastro
app.post('/cadastro', async (req, res) => {
    try{
        console.log("Tentando criar usuario ....")

        const password = req.body.password
        req.body.password = await bcrypt.hash(password, 10)

        const usuario = new Usuario(req.body)

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

// -------------------- Login -------------------- \\
const tokenExpiry = "1h"; // Expiração do token (ajuste conforme necessário)


// Rota login
//  http://localhost:3000/login
app.post('/login', async (req, res) =>{
    try{
        const email = req.body.email
        const password = req.body.password
        
        //Buscar no banco
        const u = await Usuario.findOne({ email })   //({email: req.body.email})
        if(!u){ 
            return res.status(401).json({menssagem: "Login Invalido"})
        }
        
        //Validar Senha
        const senhaValida = await bcrypt.compare(password, u.password)
        if(!senhaValida){
            return res.status(401).json({menssagem: "Senha Invalida"})
        }

        // Gerar loken JWT
        const secretKey = process.env.JWT_SECRET_KEY || "OBFwEXbXjRaMHyFOvfBfCUEyVRjDxwbdKp";
        const mongoURI = process.env.MONGO_URI || "mongodb+srv://EnzoZequim:123@cluster0.nf2kb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

        const token = jwt.sign(
            { id: u._id, email: u.email, 'adm': u.adm }, // Payload do token
            secretKey,                     // Chave secreta
            { expiresIn: tokenExpiry }     // Expiração
        );
        console.log(token)

        // Retorna o token junto com a mensagem
        res.status(200).json({
            mensagem: "Login bem-sucedido",
            token, // Adiciona o token na resposta
        });
    }catch (erro) {
        console.log("Erro no login:", erro);
        res.status(500).end();
    }
});

//Middlewaer:
function autenticarToken(req, res, next) {
    const authHeader = req.headers.authorization; // Pega o cabeçalho "Authorization"

    if (!authHeader) {
        return res.status(401).json({ mensagem: "Token não fornecido" }); // Falta o token
    }

    const token = authHeader.split(" ")[1]; // Remove o prefixo "Bearer"

    jwt.verify(token, secretKey, (err, usuario) => {
        if (err) {
            return res.status(403).json({ mensagem: "Token inválido ou expirado" }); // Token incorreto
        }

        req.usuario = usuario; // Adiciona os dados do token à requisição
        next(); // Passa para a próxima função ou rota
    });
}


// -------------------- Contador Acessos -------------------- \\
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

// -------------------- Evento --------------------\\
// Schema Evento
const eventoSchema = mongoose.Schema({
    titulo: {type: String, require: true},
    data: {type: Date, require: true},
    hora: {type: String},
    local: {type: String, require: true},
    info: {type: String}
})

// model Evento
const Evento = mongoose.model("Evento", eventoSchema)

// Cadastro de evento (teste)
// http://localhost:3000/evento/cadastro
app.post('/evento_cadastro', async (req, res) => {
    try{
        console.log("Tentando criar evento ....")

        const titulo = req.body.titulo
        const data = req.body.data
        const hora = req.body.hora
        const local = req.body.local
        const info = req.body.info

        const evento = new Evento({
            titulo: titulo,
            data: data,
            hora: hora,
            local: local,
            info: info
        })

        const respMongo = await evento.save()
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
        const eventos = await Evento.find()
        
        res.status(200).json(eventos)
    } catch (erro) {
        console.log("Erro ao obter eventos:", erro);
        res.status(500).json({ error: "Erro ao obter eventos" });
    }
});

// -------------------- Noticias -------------------- \\
//Schema Noticas
const noticiaSchema = mongoose.Schema({
    titulo: {type: String, require: true},
    info: {type: String, require: true}
})

// model Noticias
const Noticia = mongoose.model("Noticia", noticiaSchema)

// Cadastro de Noticias
// http://localhost:3000/noticia/cadastro
app.post('/noticia_cadastro', async (req, res) => {
    try{
        console.log("Tentando criar noticia ....")

        const titulo = req.body.titulo        
        const info = req.body.info

        const noticia = new Noticia({
            titulo: titulo,
            info: info
        })

        const respMongo = await noticia.save()
        console.log("Noticia criada com sucesso:", respMongo);
        res.status(201).end()        
    }catch(erro){
        //console.log(console.erro)
        console.log("Erro no Cadastro", erro.message)
        res.status(409).end()
    }
})  

// Requisição de Noticia    
app.get('/noticias', async (req, res) => {
    try {
        const noticias = await Noticia.find()        
        res.status(200).json(noticias)
    } catch (erro) {
        console.log("Erro ao obter noticia:", erro);
        res.status(500).json({ error: "Erro ao obter noticia" });
    }
});

// -------------------- Loja -------------------- \\
//Schema Loja
const lojaSchema = mongoose.Schema({
    nome: {type: String, require: true},
    preco: {type: String, require: true}
})
//Model Loja
const Loja = mongoose.model("Loja", lojaSchema)

//Cadastrar item
// http://localhost:3000/noticia/loja
app.post('/loja_cadastro', async (req, res) =>{
    try {
        console.log("Tentando cadastrar Item ...")

        const nome = req.body.nome
        const preco = req.body.preco

        const loja = new Loja({
            nome: nome,
            preco: preco
        }) 

        const respMongo = await loja.save()
        console.log("Item cadastrado com sucesso:", respMongo)
        res.status(201).end()
    } catch (erro) {
        console.log("Erro ao cadasrar item", erro.mensagem)
        res.status(409).end()
    }
})

//Requisição da Loja
app.get('/loja', async (req, res) => {
    try {
        const loja = await Loja.find()
        res.status(200).json(loja)
    } catch (error) {
        console.log("Erro ao obter itens da Loja", error);
        res.status(500).json({ error: "Erro ao obter itens da loja"});
    }
});
