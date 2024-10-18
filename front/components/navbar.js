class Navbar {
  constructor(element) {
    this.element = element;
    this.render();
  }

  render() {
    const currentPath = window.location.pathname; // Obtém o caminho atual

    this.element.innerHTML = `
        <div class="navheader">
            <img src="svg/logo-usina.svg" alt="Logo" class="logo" />
            <div class="navbar">
                <a href="/home" class="${
                  currentPath.includes("/home") ? "active" : ""
                }">Início</a>
                <a href="/eventos" class="${
                  currentPath.includes("/eventos") ? "active" : ""
                }">Eventos</a>
                <a href="/noticias" class="${
                  currentPath.includes("/noticias") ? "active" : ""
                }">Notícias</a>
                <a href="/loja" class="${
                  currentPath.includes("/loja") ? "active" : ""
                }">Loja</a>
                <a href="/contato" class="${
                  currentPath.includes("/contato") ? "active" : ""
                }">Contato</a>
            </div>
            <a href="/login" class="login-link">Fazer Login</a>
        </div>
      `;
  }
}
