class TermosDeUso {
    constructor(element) {
      this.element = element;
      this.render();
    }
  
    render() {
      const currentPath = window.location.pathname;
  
      this.element.innerHTML = `
              <div class="modal-body">
                <p class="fw-bold" >Termos e Condições de Uso</p>
                <p id="termos-de-uso" >
                  Bem-vindo ao site da Usina Eco-Cultural. Estes Termos e Condições de Uso ("Termos") regem o acesso e a
                  utilização dos serviços oferecidos no site. Ao se cadastrar e utilizar o site, você concorda com as
                  condições estabelecidas neste documento.</br></br>
                  <p class="fw-bold">
                    1. Aceitação dos Termos</br>
                  </p>
                  Ao se cadastrar, você confirma que leu, entendeu e aceita estes Termos e Condições, bem como a
                  Política de Privacidade do site. Se você não concorda com qualquer parte destes Termos, não deverá
                  utilizar o site ou os serviços oferecidos.</br></br>

                  <p class="fw-bold">
                    2. Cadastro e Segurança da Conta</br>
                  </p>
                  Para se cadastrar no site e utilizar determinados serviços, como inscrição em eventos e acesso a
                  informações exclusivas, você deverá fornecer informações verdadeiras e completas, incluindo:</br></br>

                  Nome</br>
                  Sobrenome</br>
                  E-mail</br>
                  Senha</br></br>
                  Responsabilidade do Usuário:</br> Você é responsável por manter a confidencialidade da sua senha e
                  pelos atos realizados com a sua conta. Em caso de perda de acesso ou suspeita de uso não autorizado,
                  deverá nos informar imediatamente.</br></br>

                <p class="fw-bold">
                  3. Coleta e Uso de Dados Pessoais</br>
                </p>
                Ao se cadastrar, você concorda que a Usina Eco-Cultural poderá coletar e utilizar seus dados pessoais
                conforme a Política de Privacidade disponível no site, respeitando as disposições da Lei Geral de
                Proteção de Dados Pessoais (LGPD).</br></br>

                Finalidade da Coleta de Dados:</br> Os dados coletados serão utilizados exclusivamente para possibilitar
                a inscrição em eventos e permitir que você visualize informações sobre atividades e itens
                disponíveis.</br>
                Consentimento: Você concorda em fornecer esses dados de forma voluntária e consente no uso conforme
                descrito.</br></br>
                <p class="fw-bold">4. Direitos do Usuário</br></p>
                Em conformidade com a LGPD, você tem o direito de:</br>

                Solicitar informações sobre o uso de seus dados pessoais;</br>
                Solicitar a correção, atualização ou exclusão de seus dados pessoais a qualquer momento;</br>
                Revogar seu consentimento para o tratamento de dados, ciente de que isso pode limitar o uso de alguns
                serviços do site.</br></br>
                <p class="fw-bold">
                  5. Direito de Arrependimento (Código de Defesa do Consumidor)</br>
                </p>
                De acordo com o Código de Defesa do Consumidor, você tem o direito de desistir de inscrições ou
                aquisições realizadas online no prazo de até sete dias a partir da data da inscrição ou compra. Para
                exercer esse direito, entre em contato conosco através do canal de atendimento informado no
                site.</br></br>

                <p class="fw-bold">
                  6. Responsabilidade sobre as Informações</br>
                </p>
                Todas as informações fornecidas no site, incluindo descrição de eventos, produtos e serviços, têm
                caráter informativo e podem ser alteradas a qualquer momento para melhor adequação e
                atualização.</br></br>

                <p class="fw-bold">
                  7. Uso Permitido do Site</br>
                </p>
                Você concorda em utilizar o site exclusivamente para finalidades legais e em conformidade com estes
                Termos. É proibido:</br></br>

                Utilizar o site para fins ilícitos ou prejudiciais a terceiros;</br>
                Divulgar informações falsas ou enganosas;</br>
                Praticar qualquer ato que comprometa a segurança do site.</br></br>

                <p class="fw-bold">
                  8. Modificações nos Termos</br>
                </p>
                A Usina Eco-Cultural reserva-se o direito de modificar estes Termos a qualquer momento. Quaisquer
                alterações serão notificadas aos usuários registrados através do site e entrarão em vigor imediatamente.
                Recomendamos a leitura periódica deste documento.</br></br>

                <p class="fw-bold">
                  9. Política de Privacidade</br>
                </p>
                A utilização dos dados pessoais é regulada pela Política de Privacidade da Usina Eco-Cultural,
                disponível no site, que descreve como seus dados são coletados, utilizados e protegidos.</br></br>
                <p class="fw-bold">
                  10. Legislação e Foro Aplicáveis</br>
                </p>
                Estes Termos são regidos pela legislação brasileira. Qualquer controvérsia decorrente do uso do site
                será submetida ao foro da comarca onde está sediada a Usina Eco-Cultural, salvo disposição legal em
                contrário.</br></br>
                <p class="fw-bold">
                  Declaração de Consentimento</br>
                </p>
                Ao clicar em "Aceito os Termos e Condições", você declara que leu, entendeu e concorda com os Termos e
                Condições de Uso e a Política de Privacidade da Usina Eco-Cultural.</p>
              </div>
    `;
  }
}

// Certifique-se de que o DOM está completamente carregado antes de instanciar o componente
document.addEventListener('DOMContentLoaded', function () {
    const termosElement = document.getElementById('TermosDeUso');
    if (termosElement) {
      new TermosDeUso(termosElement);
    }
  });
  