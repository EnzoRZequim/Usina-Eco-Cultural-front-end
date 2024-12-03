function mostrarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const container = document.getElementById('conteudo-carrinho');
    container.innerHTML = '';

    if (carrinho.length === 0) {
        container.innerHTML = '<p>O carrinho está vazio.</p>';
    } else {
        let total = 0;
        carrinho.forEach(item => {
            total += item.preco;
            container.innerHTML += `
            <div class="d-flex justify-content-between align-items-center border-bottom py-2">
                <p>${item.nome}</p>
                <p>R$ ${item.preco}</p>
                <button class="btn btn-danger" onclick="removerDoCarrinho('${item.nome}')">Remover</button>
            </div>
            `;
        });
        container.innerHTML += `
        <div class="d-flex justify-content-between align-items-center border-top mt-3 pt-2">
            <h4>Total:</h4>
            <h4>R$ ${total}</h4>
        </div>
        <button class="btn btn-success mt-3" onclick="fazerPedido(${total})">Fazer Pedido</button>
        `;
    }
}

function removerDoCarrinho(nome) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho = carrinho.filter(item => item.nome !== nome);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    mostrarCarrinho();
}

function fazerPedido(total) {
    alert(`Total do pedido: R$ ${total}\nChave Pix: 000000000`);
}
