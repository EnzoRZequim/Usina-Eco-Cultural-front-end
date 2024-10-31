class Navbar {
  constructor(element) {
    this.element = element;
    this.render();
  }

  render() {
    const currentPath = window.location.pathname;

    this.element.innerHTML = `
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <nav class="navbar navbar-expand-md">
            <img src="../svg/logo-usina.svg" alt="Usina Eco Cultural" class="logo d-none d-md-block" /> <!-- Removendo margem -->
            <div>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNav" aria-controls="myNav" aria-expanded="false" aria-label="Toggle Navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="myNav">
                <div class="d-lg-flex justify-content-between w-100">
                  <div class="navbar-nav me-auto">
                    <a class="nav-link active me-2" aria-current="page" href="./login.html">login</a>
                    <a class="nav-link active me-2" data-bs-toggle="modal" data-bs-target="#modalCadastro" aria-current="page" href="#">Novo Usuario</a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="js/frontend.js"></script>
    
        
    `;
  }
}
