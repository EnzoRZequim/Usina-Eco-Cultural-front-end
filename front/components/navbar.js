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
                <a href="./home.html" class="${
                  currentPath.includes("./pages/home") ? "active" : ""
                }">Início</a>
                <a href="./eventos.html" class="${
                  currentPath.includes("./pages/eventos") ? "active" : ""
                }">Eventos</a>
                <a href="./noticias.html" class="${
                  currentPath.includes("./pages/noticias") ? "active" : ""
                }">Notícias</a>
                <a href="./loja.html" class="${
                  currentPath.includes("./pages/loja") ? "active" : ""
                }">Loja</a>
                <a href="./contato.html" class="${
                  currentPath.includes("./pages/contato") ? "active" : ""
                }">Contato</a>
            </div>
            <a href="/login" class="login-link">Fazer Login</a>
        </div>
      `;
  }
}
