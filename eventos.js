document.addEventListener("DOMContentLoaded", () => {
    BuscarEventos();
    const navbarElement = document.getElementById("navbar");
    new Navbar(navbarElement);
});

function BuscarEventos() {
    try {
        const respostas = axios.get('http://localhost:3000/eventos', {
            titulo: document.getElementById('titulo-evento').value,
            data: document.getElementById('data-evento').value,
            hora: document.getElementById('hora-evento').value,
            local: document.getElementById('local-evento').value,
            info: document.getElementById('info-evento').value,
        });
    }
    catch (erro) {
        console.log(erro)   
    }
}