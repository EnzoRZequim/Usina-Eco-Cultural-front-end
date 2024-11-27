class Navbar {
  constructor(element) {
    this.element = element;
    this.render();
  }

  render() {
    const currentPath = window.location.pathname;

    this.element.innerHTML = `
    <style>
      a.active {
        color: black; /* Cor do texto */
        font-size: x-large;
      }
    </style>
    <div>
      <button class="btn btn-lg d-block d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        <i class="fi fi-br-menu-burger" style="color: black; font-size: xx-large;"></i>
      </button>
         
      
      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header d-flex align-items-center justify-content-between">
          <h5 class="offcanvas-title flex-grow-1 text-center" id="offcanvasExampleLabel">
            <img src="../img/usina-logo.png" alt="Usina Eco Cultural" class="logo w-50 h-50" />
          </h5>
          <button type="button" class="btn text-reset text-black fw-bolder" style="font-size: x-large; background: none; border: none; padding: 0;" data-bs-dismiss="offcanvas" aria-label="Close">
            <i class="fi fi-br-cross"></i>
          </button>
        </div>

        <div class="offcanvas-body align-content-between">
          <ul class="list-unstyled p-10 fw-bolder" style="font-size: larger;">
            <li>
              <a href="./login.html" class="login-link mb-3">Fazer Login</a>
            </li>
            <li class="mb-3">
              <a class="text-decoration-none ${currentPath.endsWith('/pages/home.html') ? 'active' : ''}" href="../pages/home.html">Início</a>
            </li>
            <li class="mb-3">
              <a class="text-decoration-none ${currentPath.endsWith('/pages/eventos.html') ? 'active' : ''}" href="../pages/eventos.html">Eventos</a>
            </li>
            <li class="mb-3">
              <a class="text-decoration-none ${currentPath.endsWith('/pages/noticias.html') ? 'active' : ''}" href="../pages/noticias.html">Notícias</a>
            </li>
            <li class="mb-3">
              <a class="text-decoration-none ${currentPath.endsWith('/pages/loja.html') ? 'active' : ''}" href="../pages/loja.html">Loja</a>
            </li>
            <li class="mb-3">
              <a class="text-decoration-none ${currentPath.endsWith('/pages/contato.html') ? 'active' : ''}" href="../pages/contato.html">Contato</a>
            </li>
          </ul>
        </div>
      </div>
      
      
      

      <div class="container d-none d-lg-flex position-fixed top-0 start-50 translate-middle-x align-items-center">
        <img src="../img/usina-logo.png" alt="logo usina" class="logo">
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
        <a href="./login.html" class="login-link">Fazer Login</a>
    </div>
    
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="/front/frontend.js"></script>
    
        
    `;
  }
}
