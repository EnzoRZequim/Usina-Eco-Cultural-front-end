class Navbar {
  constructor(element) {
    this.element = element;
    this.render();
  }

  render() {
    const currentPath = window.location.pathname; // Obtém o caminho atual

    this.element.innerHTML = `
        <div class="navheader">
            <img src="../svg/logo-usina.svg" alt="Logo" class="logo" />
            <div class="navbar">
                <a href="/pages/home.html" class="${
                  currentPath.endsWith("/pages/home.html") ? "active" : ""
                }">Início</a>
                <a href="/eventos" class="${
                  currentPath.startsWith("/eventos") ? "active" : ""
                }">Eventos</a>
                <a href="/noticias" class="${
                  currentPath.startsWith("/noticias") ? "active" : ""
                }">Notícias</a>
                <a href="/loja" class="${
                  currentPath.startsWith("/loja") ? "active" : ""
                }">Loja</a>
                <a href="/pages/contato.html" class="${
                  currentPath.endsWith("/pages/contato.html") ? "active" : ""
                }">Contato</a>
            </div>
            <a href="/login" class="login-link">Fazer Login</a>
        </div>
      `;
  }
}
