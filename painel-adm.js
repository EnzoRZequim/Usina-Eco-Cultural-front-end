// // document.addEventListener("DOMContentLoaded", () => {
// //     const navbarElement = document.getElementById("navbar");
// //     new Navbar(navbarElement); // Instancia a Navbar no carregamento da página
// // });

// function CadastrarEvento() {
//   document
//     .getElementById("eventoForm")
//     .addEventListener("submit", async function (event) {
//       event.preventDefault();

//       const titulo_evento = document.getElementById("titulo-evento").value;
//       const data_evento = document.getElementById("data-evento").value;
//       const hora_evento = document.getElementById("hora-evento").value;
//       const local_evento = document.getElementById("local-evento").value;
//       const info_evento = document.getElementById("info-evento").value;

//       try {
//           const resposta = await axios.post("http://localhost:3000/evento/cadastro", {
//           titulo: titulo_evento,
//           data: data_evento,
//           hora: hora_evento,
//           local: local_evento,
//           info: info_evento
//         });

//         alert(
//           `Evento ${titulo_evento} cadastrado com sucesso!`
//         );

//         window.location.href = "evento.html";
//       } catch (erro) {
//         if (erro.status === 409) {
//           alert("Erro ao cadastrar evento", erro.message);
//         }
//         console.error("Erro ao cadastrar:", erro.message);
//         //alert("Erro ao cadastrar usuário. Tente novamente.");
//       }
//     });
// }
