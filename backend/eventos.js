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
                // Cria uma div para cada evento
                const div = document.createElement('div');
                div.classList.add('body-caixas'); // Adiciona a classe para estilo
                div.classList.add('col-5');

                //Formatar data 
                const dataFormatada = formatarData(item.data);
                
                // Adiciona o HTML à div criada
                div.innerHTML = `
                    <div class="caixa-evento">
                        <div>
                            <div class="d-flex">
                                <div class="caixa-evento-titulo">
                                    <h3>${item.titulo}</h3>
                                </div>
                                <div class="caixa-evento-titulo">
                                    <h3>${dataFormatada}</h3>
                                </div>
                            </div>
                        
                            <div class="caixa-mensagem m-4">
                                <p>${item.info}</p>
                            </div>
                        
                            <div class="d-flex justify-content-between m-4">
                                <div>
                                    <p>${item.local}</p>
                                </div>
                                <div>
                                    <button class="btn btn-success">Me Inscrever</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                // Adiciona a div ao container principal
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
