const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve arquivos estáticos da pasta "front"
app.use(express.static(path.join(__dirname, 'front')));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.redirect('/home'); // Redireciona para a página inicial
});

// Rota para a página inicial
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'front/pages/home.html'));
});

// Rota para a página de contato
app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, 'front/pages/contato.html'));
});

// Inicie o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
