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
  
      // Concatena o texto de todos os elementos encontrados
      elementos.forEach((elemento) => {
        textoParaLer += elemento.textContent.trim() + ' ';
      });
  
      // Configura a narração
      if (textoParaLer.trim() !== '') {
        const utterance = new SpeechSynthesisUtterance(textoParaLer);
        utterance.lang = 'pt-BR'; // Configura o idioma
        utterance.rate = 2.8; // Velocidade de fala
        utterance.pitch = 1; // Tom de voz
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

