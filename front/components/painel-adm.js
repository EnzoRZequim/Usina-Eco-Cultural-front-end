function painelAdm(section) {
    const contentDiv = document.getElementById('content');
    // Reseta os links
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active', 'btn-verde-ativo'));
    // Chama a função correspondente à seção
    if (section === 'inicio') {
        contentDiv.innerHTML = admInicio();
    } else if (section === 'eventos') {
        contentDiv.innerHTML = admEventos();
    } else if (section === 'noticias') {
        contentDiv.innerHTML = admNoticias();
    } else if (section === 'loja') {
        contentDiv.innerHTML = admLoja();
    } else if (section === 'contato') {
        contentDiv.innerHTML = admContato();
    } else if (section === 'estatisticas') {
        contentDiv.innerHTML = admEstatisticas();
    }
    // Define o link atual como ativo
    const activeLink = document.querySelector(`.nav-link[data-section="${section}"]`);
    activeLink.classList.add('active', 'btn-verde-ativo');
}

// --------------- TELA DE INICIO ADM ------------------

function admInicio() {
    return `
    <!-- Seção onde os colaboradores são exibidos -->
<div id="colaboradoresContainer" class="d-flex overflow-auto p-2 gap-3">
    <!-- Os colaboradores serão adicionados dinamicamente aqui -->
</div>

<!-- Botão para abrir o modal de novo colaborador -->
<button class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#addColaboradorModal">
    Adicionar Colaborador
</button>

<!-- Modal para adicionar colaborador -->
<div class="modal fade" id="addColaboradorModal" tabindex="-1" aria-labelledby="addColaboradorModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="addColaboradorModalLabel">Adicionar Colaborador</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="colaboradorForm">
                    <div class="mb-3">
                        <label for="colaboradorNome" class="form-label">Nome do Colaborador</label>
                        <input type="text" class="form-control" id="colaboradorNome" required>
                    </div>
                    <div class="mb-3">
                        <label for="colaboradorFoto" class="form-label">Foto do Colaborador</label>
                        <input type="file" class="form-control" id="colaboradorFoto" accept="image/*" required>
                    </div>
                    <button type="button" class="btn btn-primary" onclick="addColaborador()">Adicionar</button>
                </form>
            </div>
        </div>
    </div>
</div>

<script src="../../add-colaborador.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
`;
}

function admEventos() {
    return `<h1>Eventos</h1><p>Conteúdo da página de eventos.</p>`;
}

function admNoticias() {
    return `<h1>Notícias</h1><p>Conteúdo da página de notícias.</p>`;
}

function admLoja() {
    return `<h1>Loja</h1><p>Conteúdo da página da loja.</p>`;
}

function admContato() {
    return `<h1>Contato</h1><p>Conteúdo da página de contato.</p>`;
}

function admEstatisticas() {
    return `<h1>Estatísticas</h1><p>Conteúdo da página de estatísticas.</p>`;
}
