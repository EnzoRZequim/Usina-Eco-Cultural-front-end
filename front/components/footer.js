class Footer {
    constructor(element) {
      this.element = element;
      this.render();
    }
  
    render() {
      const currentPath = window.location.pathname;
  
      this.element.innerHTML = `
      <footer class="bg-light pt-2 pb-2 custom-shadow">
        <!-- Área Superior -->
        <div class="d-none d-md-block">
          <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center">
            <a href="home.html">
              <img src="../img/usina-logo.png" alt="logo usina" class="logo">
            </a>
            <a href="#" class="btn-verde text-center text-decoration-none fw-normal p-2 w-25 ">ENVIAR UMA MENSAGEM</a>
          </div>
        </div>
    
        <!-- Área Inferior -->
        <div class="container mt-4 pt-5">
          <!-- Visível apenas em telas maiores que md -->
          <div class="d-none d-md-block">
            <div class="row d-flex flex-md-row justify-content-between text-left">
              <!-- Primeira parte -->
              <div class="col-md-3 mb-4 mb-md-0">
                <h5 class="fw-bold">
                  <a href="./home.html" class="text-decoration-none text-black">Pagina Inicial</a>
                </h5>
                <div>
                  <a href="#estatuto" class="text-decoration-none text-black">Estatuto</a>
                </div>
                <div>
                  <a href="#sobrenos" class="text-decoration-none text-black">Sobre nós</a>
                </div>
                <div>
                  <a href="#parceiros" class="text-decoration-none text-black">Parceiros</a>
                </div>
                <div>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#modalTermos">Termos e condições</a>
                </div>
              </div>
    
              <!-- Segunda parte -->
              <div class="col-md-3 mb-4 mb-md-0">
                <h5 class="fw-bold">
                  <a href="./loja.html" class="text-decoration-none text-black">Produtos</a>
                </h5>
                <div>
                  <a href="./loja.html" class="text-decoration-none text-black">Loja</a>
                </div>
                <div>
                  <a href="./carrinho.html" class="text-decoration-none text-black">Carrinho</a>
                </div>
              </div>
    
              <!-- Terceira parte -->
              <div class="col-md-3 mb-4 mb-md-0">
                <h5 class="fw-bold">
                  <a href="./noticias.html" class="text-decoration-none text-black">Mídia</a>
                </h5>
                <div>
                  <a href="./noticias.html" class="text-decoration-none text-black">Notícias</a>
                </div>
                <div>
                  <a href="./eventos.html" class="text-decoration-none text-black">Eventos</a>
                </div>
                <div>
                  <a href="./eventos.html#eventospassados" class="text-decoration-none text-black">Eventos Passados</a>
                </div>
              </div>
    
              <!-- Quarta parte -->
              <div class="col-md-3 mb-4 mb-md-0">
                <h5 class="fw-bold">
                  <a href="./loja.html" class="text-decoration-none text-black">Contato</a>
                </h5>
                <div>
                  <address>
                    <p><a href="mailto:usina.eco.cultural@gmail.com">usina.eco.cultural@gmail.com</a></p>
                    <p>ou</p>
                    <div class="social-icons">
                      <a href="https://www.instagram.com/usinaecocultural/?igshid=YmMyMTA2M2Y%3D" aria-label="Instagram">
                        <img src="/front/img/redes_sociais/InstagramIcon.png" alt="Instagram">
                      </a>
                      <a href="https://www.facebook.com/usinaecocultural/" aria-label="Facebook">
                        <img src="/front/img/redes_sociais/FacebookIcon.png" alt="Facebook">
                      </a>
                      <a href="https://www.youtube.com/@usinaecocultural" aria-label="YouTube">
                        <img src="/front/img/redes_sociais/YouTubeIcon.png" alt="YouTube">
                      </a>
                      <a href="#" aria-label="X">
                        <img src="/front/img/redes_sociais/XIcon.png" alt="X">
                      </a>
                    </div>
                  </address>
                </div>
              </div>
    
            </div>
          </div>
    
          <!-- Visível apenas em telas menores que md -->
    
          <!-- Área Superior -->
          <div class="d-md-none text-center">
            <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center pb-4">
              <img src="../img/usina-logo.png" alt="Logo" class="logo mb-3 mb-md-0">
              <a href="#" class="btn-verde text-center text-decoration-none fw-normal p-2 w-75">ENVIAR UMA MENSAGEM</a>
            </div>
          </div>
    
          <div class="d-md-none text-center">
            <div class="row d-flex flex-column justify-content-between text-left">
              <!-- Primeira parte -->
              <div class="col-12 mb-4">
                <div class="col-md-3 mb-4 mb-md-0">
                  <h5 class="fw-bold">
                    <a href="./home.html" class="text-decoration-none text-black">Pagina Inicial</a>
                  </h5>
                  <div>
                    <a href="#estatuto" class="text-decoration-none text-black">Estatuto</a>
                  </div>
                  <div>
                    <a href="#sobrenos" class="text-decoration-none text-black">Sobre nós</a>
                  </div>
                  <div>
                    <a href="#parceiros" class="text-decoration-none text-black">Parceiros</a>
                  </div>
                  <div>
                    <a href="#" data-bs-toggle="modal" data-bs-target="#modalTermos">Termos e condições</a>
                  </div>
                </div>
    
    
    
                <!-- Segunda parte -->
                <div class="col-12 mb-4">
                  <h5 class="fw-bold">
                    <a href="./loja.html" class="text-decoration-none text-black">Produtos</a>
                  </h5>
                  <div>
                    <a href="./loja.html" class="text-decoration-none text-black">Loja</a>
                  </div>
                  <div>
                    <a href="./carrinho.html" class="text-decoration-none text-black">Carrinho</a>
                  </div>
                </div>
    
                <!-- Terceira parte -->
                <div class="col-12 mb-4">
                  <h5 class="fw-bold">
                    <a href="./noticias.html" class="text-decoration-none text-black">Mídia</a>
                  </h5>
                  <div>
                    <a href="./noticias.html" class="text-decoration-none text-black">Notícias</a>
                  </div>
                  <div>
                    <a href="./eventos.html" class="text-decoration-none text-black">Eventos</a>
                  </div>
                  <div>
                    <a href="./eventos.html#eventospassados" class="text-decoration-none text-black">Eventos Passados</a>
                  </div>
                </div>
    
                <!-- Quarta parte -->
                <div class="col-12">
                  <h5 class="fw-bold">
                    <a href="./loja.html" class="text-decoration-none text-black">Contato</a>
                  </h5>
                  <div>
                    <address>
                      <p><a href="mailto:usina.eco.cultural@gmail.com">usina.eco.cultural@gmail.com</a></p>
                      <p>ou</p>
                      <div class="social-icons d-flex justify-content-center"> <!-- Centraliza os ícones -->
                        <a href="https://www.instagram.com/usinaecocultural/?igshid=YmMyMTA2M2Y%3D" aria-label="Instagram" class="mx-2"> <!-- Adiciona espaçamento entre os ícones -->
                          <img src="/front/img/redes_sociais/InstagramIcon.png" alt="Instagram">
                        </a>
                      <a href="https://www.facebook.com/usinaecocultural/" aria-label="Facebook">
                        <img src="/front/img/redes_sociais/FacebookIcon.png" alt="Facebook">
                      </a>
                        <a href="https://www.youtube.com/@usinaecocultural" aria-label="YouTube" class="mx-2">
                          <img src="/front/img/redes_sociais/YouTubeIcon.png" alt="YouTube">
                        </a>
                        <a href="#" aria-label="X" class="mx-2">
                          <img src="/front/img/redes_sociais/XIcon.png" alt="X">
                        </a>
                      </div>
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Modal -->
          <div class="modal fade" id="modalTermos" tabindex="-1" aria-labelledby="modalTermosLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="modalTermosLabel">Termos de Uso</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
                </div>
                <div id="TermosDeUso"></div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                </div>
              </div>
            </div>
          </div>
          <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"></script>
          <script src="../components/termos-de-uso.js"></script>
      </footer>
    `;
  }
}

const footerElement = document.getElementById('Footer');
new Footer(footerElement); 