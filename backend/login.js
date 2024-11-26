// Lógica de Login
function FazerLogin() {
    document.getElementById('loginForm').addEventListener('submit', async function(event) {
        event.preventDefault(); // Evita o envio normal do formulário

        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        try {
            // Realiza a requisição de login
            const resposta = await axios.post('http://localhost:3000/login', {
                email: email,
                password: senha
            });

            alert(`Login realizado com sucesso!\nBem-vindo(a) de volta!`);
            
            // Redireciona para a página home.html
            window.location.href = 'home.html';
        } catch (erro) {
            // Verifica o erro retornado
            if (erro.response && erro.response.status === 401) {
                alert("Email ou senha incorretos.");
                console.log("Email ou senha incorretos.");
            } else {
                console.error("Erro ao fazer login:", erro.message);
                alert("Erro ao fazer login. Tente novamente.");
            }
        }
    });
}

// Chama a função ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    FazerLogin(); // Corrigido para chamar a função corretamente
    const navbarElement = document.getElementById("navbar");
    new Navbar(navbarElement);
});
