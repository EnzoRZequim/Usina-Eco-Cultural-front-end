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

// TELA DE INICIO ADM

function admInicio() {
    return `<h1>Início</h1><p>Conteúdo da página inicial.</p>`;
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
