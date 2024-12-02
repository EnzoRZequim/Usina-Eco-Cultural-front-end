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

// descriptografar token
function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
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


function convertToken() {
    const cripted = localStorage.getItem('token')
    return parseJwt(cripted)
}