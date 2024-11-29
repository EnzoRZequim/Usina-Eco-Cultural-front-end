document.addEventListener("DOMContentLoaded", () => {
    const navbarElement = document.getElementById("navbar");
    new Navbar(navbarElement);

    BuscarItem()
});

function BuscarItem(){
    axios.get('http://localhost:3000/loja')
    .then(resposta =>{
        const data = resposta.data;

        const container = document.getElementById('conteudo-loja');

        //limpar container
        container.innerHTML = '';

        data.forEach(item => {
            //Criar div
            const div = document.createElement('div');
                div.classList.add('body-caixas');
                div.classList.add('col-5');

            //add Html
            div.innerHTML = div.innerHTML =`
            <div class="caixa-evento">
                <div>
                    <div class="d-flex">
                        <div class="caixa-evento-titulo">
                            <h3>${item.nome}</h3>
                        </div>
                    </div>
                
                    <div class="caixa-mensagem m-4">
                        <p>${item.preco}</p>
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