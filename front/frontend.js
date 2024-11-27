// const express = require("express");
// const path = require("path");
// const axios = require('axios')
// const app = express();
// const PORT = process.env.PORT || 3000;  

// // Serve arquivos estáticos da pasta "front"
// app.use(express.static(path.join(__dirname, "front")));

// const cors = require('cors')
// app.use(cors())

// // Rota para a página inicial
// app.get("/", (req, res) => {
//   res.redirect("/pages/home.html"); // Redireciona para a página inicial
// });

// // Rota para a página inicial
// app.get("/home", (req, res) => {
//   res.sendFile(path.join(__dirname, '/pages/home.html'));
// });

// // Rota para a página de contato
// app.get("/contato", (req, res) => {
//   res.sendFile(path.join(__dirname, "front/pages/contato.html"));
// });

// // Rota para a página de login
// app.get("/login", (req, res) => {
//   res.sendFile(path.join(__dirname, "front/pages/login.html")); // Altere o caminho conforme necessário
// });

// app.get("/contato", (req, res) => {
//   res.sendFile(path.join(__dirname, "front/pages/contato.html"));
// });

// // Inicie o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});