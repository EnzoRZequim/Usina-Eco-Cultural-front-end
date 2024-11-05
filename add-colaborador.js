// Array para armazenar os colaboradores
let colaboradores = JSON.parse(localStorage.getItem('colaboradores')) || [];

// Função para salvar os colaboradores no localStorage
function saveColaboradores() {
    localStorage.setItem('colaboradores', JSON.stringify(colaboradores));
}

// Função para renderizar os colaboradores na página
function renderColaboradores() {
    const container = document.getElementById('colaboradoresContainer');
    container.innerHTML = ''; // Limpa o container

    colaboradores.forEach((colaborador, index) => {
        // Cria o elemento do colaborador
        const div = document.createElement('div');
        div.className = 'colaborador';
        
        // Imagem do colaborador
        const img = document.createElement('img');
        img.src = colaborador.foto;
        img.alt = colaborador.nome; // Acessibilidade
        div.appendChild(img);

        // Botão para remover o colaborador
        const removeButton = document.createElement('button');
        removeButton.className = 'remove-btn';
        removeButton.innerHTML = '×';
        removeButton.onclick = () => removeColaborador(index);
        div.appendChild(removeButton);

        container.appendChild(div);
    });
}

// Função para adicionar um colaborador
function addColaborador() {
    const nome = document.getElementById('colaboradorNome').value;
    const foto = document.getElementById('colaboradorFoto').files[0];
    
    if (nome && foto) {
        const reader = new FileReader();
        
        reader.onload = function(event) {
            const fotoBase64 = event.target.result;
            colaboradores.push({ nome, foto: fotoBase64 });
            saveColaboradores();
            renderColaboradores();

            // Limpa o formulário
            document.getElementById('colaboradorForm').reset();
            
            // Fecha o modal
            const addColaboradorModal = bootstrap.Modal.getInstance(document.getElementById('addColaboradorModal')) || 
                                        new bootstrap.Modal(document.getElementById('addColaboradorModal'));
            addColaboradorModal.hide();
        };
        
        reader.readAsDataURL(foto);
    }
}


// Função para remover um colaborador pelo índice
function removeColaborador(index) {
    colaboradores.splice(index, 1);
    saveColaboradores();
    renderColaboradores();
}

// Inicializa a renderização
renderColaboradores();
