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

            // Limpar container
            container.innerHTML = '';

            // Configurar o estilo do container principal como um grid
            container.style.display = 'grid';
            container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
            container.style.gap = '1rem';
            container.style.padding = '1rem';

            data.forEach(item => {
                // Criar Div do Card:
                const div = document.createElement('div');
                div.classList.add('card-container');

                // Limitar o número de caracteres do título
                let titulo = item.titulo || "Revitalizando o Patrimônio Urbano";
                const limiteTitulo = 20;
                if (titulo.length > limiteTitulo) {
                    titulo = titulo.substring(0, limiteTitulo) + '...';
                }
                const descricao = item.descricao || "A Usina Eco-Cultural trabalha ativamente na revitalização de espaços públicos, promovendo a inclusão e sustentabilidade na cidade.";
                const imagemUrl = item.imagemUrl || "/front/img/home-img.png"; // Colocar o caminho correto da imagem

                // Adicionar HTML à div
                div.innerHTML = `
                    <div class="card shadow-sm rounded-lg h-100">
                        <img src="${imagemUrl}" class="card-img-top" alt="${titulo}">
                        <div class="card-body d-flex flex-column">
                            <header>
                                <h3 class="card-title fw-bold">${titulo}</h3>
                            </header>
                            <p class="card-text">${descricao}</p>
                        </div>
                    </div>
                `;

                // Adiciona a div ao container principal
                container.appendChild(div);
            });
        })
        .catch(erro => console.log(erro));
}
