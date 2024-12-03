document.addEventListener("DOMContentLoaded", () => {
    const navbarElement = document.getElementById("navbar");
    new Navbar(navbarElement);

    BuscarEventos()
});


function BuscarEventos() {
    axios.get('http://localhost:3000/eventos')
        .then(resposta => {
            const data = resposta.data;

            const container = document.getElementById('conteudo-evento');

            // Certifique-se de limpar o container antes de adicionar novos elementos
            container.innerHTML = '';

            data.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('col-12', 'col-md-6', 'px-3'); // Exibe dois eventos por linha em telas médias e grandes
            
                const dataFormatada = formatarData(item.data);
            
                div.innerHTML = `
                <div class="caixa-evento bg-white shadow mb-5 border rounded-5">
                    <div class="d-flex flex-column flex-md-row pt-3 justify-content-between px-4">
                        <h3 class="fw-bold text-start mb-3 mb-md-0 evento-info">${item.titulo}</h3>
                        <h3 class="fw-bold text-start mb-3 mb-md-0">${dataFormatada}</h3>
                    </div>
                    <div class="caixa-mensagem m-4 d-flex flex-column flex-md-row align-items-start">
                        <p class="fw-bold me-2 mb-2 mb-md-0">Informações do evento:</p>
                        <p>${item.info}</p>
                    </div>
                    <div class="caixa-mensagem m-4 d-flex flex-column flex-md-row align-items-start">
                        <p class="fw-bold me-2 mb-2 mb-md-0"><i class="fi fi-br-marker me-1"></i>Local do evento:</p>
                        <p>${item.local}</p>
                    </div>
                    <div class="d-flex justify-content-center pb-3">
                        <button class="btn btn-success">Me Inscrever</button>
                    </div>
                </div>

                <style>
                    .evento-info {
                      word-wrap: break-word; 
                      word-break: break-word;
                    }
                  </style>
                `;
            
                container.appendChild(div);
            });
            
            
        })
        .catch(erro => console.log(erro));
}

function formatarData(dataISO) {
    const data = new Date(dataISO); // Converte a string ISO em um objeto Date
    const dia = String(data.getDate()).padStart(2, '0'); // Dia com 2 dígitos
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês com 2 dígitos (0 = Janeiro)
    const ano = data.getFullYear(); // Ano com 4 dígitos
    return `${dia}/${mes}/${ano}`; // Retorna no formato DD/MM/YYYY
}
