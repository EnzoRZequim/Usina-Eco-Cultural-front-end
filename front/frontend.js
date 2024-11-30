document.addEventListener('DOMContentLoaded', async () => {
   await GetTokenFromLogin()
})

document.getElementById('lerTexto1').addEventListener('click', lerElemntos1);

async function GetTokenFromLogin() {
    var token = localStorage.getItem('token')

    // var usuarioAutenticado = document.getElementById('usuario-autenticado')
    
    // if(!token) {
    //     usuarioAutenticado.textContent = 'Usuário não autenticado'
    // }
    // else {
    //     usuarioAutenticado.textContent = 'Usuário autenticado'
    // }
}

// -------------------- Acessibilidade --------------------\\
function lerElemntos1(){
    if (window.speechSynthesis.speaking){
        window.speechSynthesis.cancel();
    } else {
        const elementos1 = document.querySelector('.ler_texto1');
        elementos1.forEach(elementos1 => {
            const texto1 = elementos1.textContent;
            const utterance1 = new SpeechSynthesisUtterance(texto1);
            window.speechSynthesis.speak(utterance1);
        });
    }
}