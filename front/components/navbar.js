class Navbar {
  constructor(element) {
    this.element = element;
    this.render();
  }

  render() {
    const currentPath = window.location.pathname; // Obtém o caminho atual

    this.element.innerHTML = `
        <div class="navheader">
            <div class="navbar">
                <a href="../pages/home.html" class="${
                  currentPath.endsWith("/pages/home.html") ? "active" : ""
                }">Início</a>
                <a href="../pages/eventos.html" class="${
                  currentPath.endsWith("/pages/eventos.html") ? "active" : ""
                }">Eventos</a>
                <a href="../pages/noticias.html" class="${
                  currentPath.endsWith("/pages/noticias.html") ? "active" : ""
                }">Notícias</a>
                <a href="../pages/loja.html" class="${
                  currentPath.endsWith("/pages/loja.html") ? "active" : ""
                }">Loja</a>
                <a href="../pages/contato.html" class="${
                  currentPath.endsWith("/pages/contato.html") ? "active" : ""
                }">Contato</a>
            </div>
        </div>
      `;
  }
}
