document.addEventListener('DOMContentLoaded', async () => {
   await GetTokenFromLogin()
})

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