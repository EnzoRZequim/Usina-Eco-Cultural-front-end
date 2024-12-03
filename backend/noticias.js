document.addEventListener("DOMContentLoaded", () => {
    const navbarElement = document.getElementById("navbar");
    new Navbar(navbarElement);

    BuscarNoticias()
});

function BuscarNoticias() {
    axios.get('http://localhost:3000/noticias')
    .then(resposta => {
        const data = resposta.data;

        const container = document.getElementById('conteudo-noticia');

        // Limpar container antes de adicionar novos itens
        container.innerHTML = '';

        data.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('col-12', 'col-md-6', 'px-3'); // Para exibir duas notícias por linha em telas médias e grandes
            
            div.innerHTML = `
                <div class="caixa-evento bg-white shadow mb-5 border rounded-5">
                    <div class="d-flex flex-column flex-md-row pt-3 justify-content-between px-4">
                        <h3 class="fw-bold text-start mb-3 mb-md-0 evento-info">${item.titulo}</h3>
                    </div>
                    <div class="caixa-mensagem m-4">
                        <p>${item.info}</p>
                    </div>
                </div>
            `;
            
            container.appendChild(div);
        });
    })
    .catch(erro => console.log(erro));
}
