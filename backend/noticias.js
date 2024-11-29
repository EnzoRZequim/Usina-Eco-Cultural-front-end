document.addEventListener("DOMContentLoaded", () => {
    const navbarElement = document.getElementById("navbar");
    new Navbar(navbarElement);

    BuscarNoticias()
});

function BuscarNoticias(){
    axios.get('http://localhost:3000/noticias')
    .then(resposta =>{
        const data = resposta.data;

        const container = document.getElementById('conteudo-noticia');

        //limpar container
        container.innerHTML = '';

        data.forEach(item => {
            //Criar Div:
            const div = document.createElement('div');
                div.classList.add('body-caixas'); // Adiciona a classe para estilo
                div.classList.add('col-5');

            //Add Html à 
            div.innerHTML =`
                    <div class="caixa-evento">
                        <div>
                            <div class="d-flex">
                                <div class="caixa-evento-titulo">
                                    <h3>${item.titulo}</h3>
                                </div>
                            </div>
                        
                            <div class="caixa-mensagem m-4">
                                <p>${item.info}</p>
                            </div>                        
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                // Adiciona a div ao container principal
                container.appendChild(div);
        });
    })
    .catch(erro => console.log(erro))

}