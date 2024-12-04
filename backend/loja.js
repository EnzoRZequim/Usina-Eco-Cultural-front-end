document.addEventListener("DOMContentLoaded", () => {
    const navbarElement = document.getElementById("navbar");
    new Navbar(navbarElement);

    BuscarItem()
});

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
            // window.location.href = "loja.html";
        } catch (error) {
            if (error.status === 409) {
                alert("Erro ao cadastrar um item", error.message);
            }
            console.error("Erro ao Cadastrar", error.message);
        }
    });
}
