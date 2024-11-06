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
    return `<h1>Inicio</h1><p>Conteúdo da página de inicio.</p>`;
}

function admEventos() {
    return `          
    
<div class="p-4">
    <div class="pt-4">
        <p class="text-black text-decoration-underline fw-bold fs-4 pb-4">Criador de eventos</p>
    </div>

    <div>
        <label for="titulo-evento" class="fw-bold fs-4 d-block mb-2">Título</label>
        <input type="text" id="titulo-evento" class="border rounded-4 form-control" style="line-height: 45px;" placeholder="Digite o título">
    </div>

    <!-- Campo para a Data do Evento -->
    <div class="pt-3">
        <label for="data-evento" class="fw-bold fs-4 d-block mb-2">Data do Evento</label>
        <input type="date" id="data-evento" class="border rounded-4 form-control">
    </div>

    <!-- Campo para o Horário do Evento -->
    <div class="pt-3">
        <label for="hora-evento" class="fw-bold fs-4 d-block mb-2">Horário do Evento</label>
        <input type="time" id="hora-evento" class="border rounded-4 form-control">
    </div>

    <!-- Campo para o Local do Evento -->
    <div class="pt-3">
        <label for="local-evento" class="fw-bold fs-4 d-block mb-2">Local do Evento</label>
        <input type="text" id="local-evento" class="border rounded-4 form-control" placeholder="Digite o local do evento">
    </div>

    <div class="pt-3">
        <p class="fw-bold fs-4 mt-3">Carregue uma imagem</p>
        <button class="btn-preto"><i class="fi fi-br-upload m-2"></i> Carregar</button>

        <p class="pt-4 fw-bold fs-4">Mensagem</p>
        <textarea rows="7" id="info-evento" class="border rounded-4 form-control" style="line-height: 1.5;" placeholder="Informações sobre o evento" maxlength="1150" oninput="updateCounter()"></textarea>
        <p id="charCount" class="text-end">0/1150</p>

        <button class="btn-verde mt-3 w-auto pe-5 ps-5">PUBLICAR</button>
    </div>
</div>
            
            `;
}

function admNoticias() {
    return `
    
            <div class="p-4">
                
                <div class="pt-4"><p class="text-black text-decoration-underline fw-bold fs-4 pb-4" href="#">Criador de notícias</p></div>

                <div>
                    <label for="titulo-noticia" class="fw-bold fs-4 d-block mb-2">Título</label>
                    <input type="text" id="titulo-noticia" class="border rounded-4 form-control " style="line-height: 45px;" placeholder="Digite o título">
                </div>
                
                <div class="pt-3">
                    <p class="fw-bold fs-4 mt-3">Carregue uma imagem</p>
                    <button class="btn-preto"><i class="fi fi-br-upload m-2"></i> Carregar</button>
                    
                    <p class="pt-4 fw-bold fs-4">Mensagem</p>
                    <textarea rows="7" id="info-noticia" class="border rounded-4 form-control" style="line-height: 1.5;" placeholder="Informações sobre a notícia" maxlength="1150" oninput="updateCounter()"></textarea>
                    <p id="charCount" class="text-end">0/1150</p>
                    
                    <button class="btn-verde w-auto pe-5 ps-5">PUBLICAR</button>
                </div>
                
            </div>
    `;
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


// contador de caracteres na info noticias

function updateCounter() {
    const textarea = document.getElementById('info-noticia');
    const charCount = document.getElementById('charCount');
    charCount.textContent = `${textarea.value.length}/1150`;
}
