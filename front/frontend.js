document.addEventListener('DOMContentLoaded', async () => {
   await GetTokenFromLogin()
   verificaLogin()
})



// -------------------- Acessibilidade -------------------- \\

function Acessibilidade_Leitura() {
  // Verifica se já há uma fala em andamento e a cancela
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  } else {
    // Seleciona todos os elementos com a classe 'Acess_Leitura'
    const elementos = document.querySelectorAll('.Acess_Leitura');
    let textoParaLer = '';

    // Será lido o texto de todos os elementos encontrados que não possuem aria-hidden="true"
    elementos.forEach((elemento) => {
      const ariaHidden = elemento.getAttribute('aria-hidden');
      if (!ariaHidden || ariaHidden !== 'true') {
        textoParaLer += elemento.textContent.trim() + ' ';
      }
    });

    // Configura a narração
    if (textoParaLer.trim() !== '') {
      const utterance = new SpeechSynthesisUtterance(textoParaLer);
      utterance.lang = 'pt-BR'; // Configura o idioma
      utterance.rate = 2.5; // Velocidade de fala (ajustável entre 0.1 e 2)
      utterance.pitch = 1; // Tom de voz (ajustável entre 0 e 2)
      window.speechSynthesis.speak(utterance);
    } else {
      console.warn('Nenhum texto disponível para leitura.');
    }
  }
}

// Adiciona o evento ao botão de leitura
const btnAcessibilidade = document.getElementById('btn-acessibilidade');
if (btnAcessibilidade) {
  btnAcessibilidade.addEventListener('click', Acessibilidade_Leitura);
} else {
  console.error('Botão de acessibilidade não encontrado.');
}

// -------------------- Validar ADM -------------------- \\
function validadorADM (){
    try {
        const token = convertToken()

        if(!token)
            throw new error('token não encontrado')

        if(token.adm) {
            window.location.href = "painel-adm.html";
        }
        else {
            alert("você não tem permisão para entrar nessa pagina")
        }

    }   
    catch (error) {
        console.log(error)
    }
}

//ao carregar painel-adm.html
function entrarPainelADM (){
    try {   
        const token = convertToken()

        console.log(token.adm)
        
        if(!token){
            throw new error('token não encontrado'),
           window.location.href = 'home.html';
        }
        if(!token.adm){
            throw new error('Você não tem permição'),
            window.location.href = 'home.html';
        }  
    } catch (error) {
        alert("Algo deu errado ao carregar a pagina", error.menssage);
        window.location.href = 'home.html';
    }   
}

// -------------------- Token -------------------- \\
async function GetTokenFromLogin() {
  var token = localStorage.getItem('token')
}

// descriptografar token
function parseJwt(token) {
  if(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.parse(jsonPayload);
  }
  console.log("Usario não está logado")
}

function convertToken() {
    const cripted = localStorage.getItem('token')    
    return parseJwt(cripted)
}

// -------------------- Pop-Up  -------------------- \\

// Função para exibir o pop-up
function showPopup() {
  const popupOverlay = document.getElementById('popup-overlay');
  popupOverlay.style.display = 'flex'; // Exibe o pop-up
}

// Função para fechar o pop-up
function closePopup() {
  const popupOverlay = document.getElementById('popup-overlay');
  popupOverlay.style.display = 'none'; // Oculta o pop-up
}

// Função para redirecionar para a página de contato
function goToContactPage() {
  window.location.href = 'contato.html'; // Redireciona para a página de contato
}

// Verifica se o pop-up já foi exibido durante a sessão
function checkPopup() {
  // Se a chave 'popupShown' não existir, significa que o pop-up nunca foi exibido nesta sessão
  if (!sessionStorage.getItem('popupShown')) {
    showPopup(); // Exibe o pop-up
    sessionStorage.setItem('popupShown', 'true'); // Marca que o pop-up foi mostrado
  }
}

// Evento para exibir o pop-up quando a página for carregada
window.addEventListener('load', checkPopup);

// Evento para o botão "Doar"
const contactButton = document.getElementById('contact-button');
contactButton.addEventListener('click', goToContactPage);

// Evento para fechar o pop-up ao clicar no botão "Talvez mais tarde"
const closeButton = document.getElementById('close-popup');
closeButton.addEventListener('click', closePopup);
