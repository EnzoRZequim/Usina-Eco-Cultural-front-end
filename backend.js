const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const cors = require('cors')

//provavelmente tem que acertar os nomes das variaves/objetos com o index.js

//Criar tabelas:

//validador Usuario
const usuarioSchema = mongoose.Schema({
    nome:{type: String, required: true},
    apelido: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    senha: {type: String, required: true}, //tem que criptografar depois
})
usuarioSchema.plugin(uniqueValidator)
//Modelo Usuario
const Usuario = mongoose.model("Usuario", usuarioSchema)

//End Points "Faz as coisa irem para as tabelas"-------------------------------------------

app.post('/signup', async (req, res) => {
    const nome = req.body.nome
    const apelido = req.body.apelido
    const email = req.body.email
    const senha = req.body.senha
    const usuario = new Usuario({nome: nome, senha: senha})
    const respMongo = await usuario.save()
    console.log(respMongo)
    res.end()
}) 
//Mostrar no Console
app.listen (3000, () => {
    try {
        conectarAoMongo() //Tem que Criar
        console.log("server up and running")
    } catch (e) {
        console.log("Erro de conexão", e)
    }
}) 