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

function adicionarAoCarrinho(nome, preco) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push({ nome, preco });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert(`${nome} adicionado ao carrinho!`);
}

let imagemBase64 = '';

function carregarImagem() {
    const file = document.getElementById('imagem-produto').files[0];
    const reader = new FileReader();
    
    reader.onloadend = function() {
        imagemBase64 = reader.result;
    };
    
    if (file) {
        reader.readAsDataURL(file);
    }
}

function CadastrarProduto() {
    document.getElementById("lojaForm").addEventListener("submit", async function(event) {
        event.preventDefault();

        const item_loja = document.getElementById("nome-produto").value;
        const preco_loja = document.getElementById("preco-produto").value;

        try {
            const resposta = await axios.post("http://localhost:3000/loja_cadastro", {
                nome: item_loja,
                preco: preco_loja,
                imagem: imagemBase64
            });

            console.log(`Item ${item_loja} cadastrado com sucesso`);
            window.location.href = "loja.html";
        } catch (error) {
            if (error.status === 409) {
                alert("Erro ao cadastrar um item", error.message);
            }
            console.error("Erro ao Cadastrar", error.message);
        }
    });
}
