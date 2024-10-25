document.addEventListener("DOMContentLoaded", () => {
    const navbarElement = document.getElementById("navbar");
    new Navbar(navbarElement); // Instancia a Navbar no carregamento da página
  });

  function togglePassword() {
    const passwordField = document.getElementById("senha");
    const toggleIcon = document.querySelector(".toggle-password");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);

    // Troca o ícone baseado no tipo de senha
    toggleIcon.textContent = type === "password" ? "visibility_off" : "visibility";
  }

  //checar Email
  function checkEmail(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let email = document.getElementById('email');

    let isEmailValid = emailRegex.test(email.value);

    if(isEmailValid) {
      email.classList.remove('invalid');
      email.classList.add('valid');
    }
    else {
      email.classList.remove('valid');
      email.classList.add('invalid');
    }
  }

  //Checar Termos de Uso 
  function checkboxTermos() { 
    let check = document.getElementById('termos');

    if(check.checked === true) {
      check.classList.remove('invalid');
      console.log('USUARIO ACEITOU OS TERMOS DE USO');
      return true;
    }
    else {
      check.classList.add('invalid');
      console.log('USUARIO NÃO ACEITOU OS TERMOS DE USO');
      return false;
    }
  }

  // Logica de Cadastro
  function Cadastrar() {
    document.getElementById('cadastroForm').addEventListener('submit', async function(event) {
      event.preventDefault();

      const nome = document.getElementById('nome').value;
      const apelido = document.getElementById('apelido').value;
      const email = document.getElementById('email').value;
      const senha = document.getElementById('senha').value;

      try {
        if(!checkboxTermos()) {
          let termosForm = document.getElementById('termos');
          termosForm.classList.add('invalid');

          alert("Erro ao cadastrar usuário. Usuário não aceitou os termos de uso.");
          
          throw new Error('Usuário não aceitou os termos de uso');
        }

        const resposta = await axios.post('http://localhost:3000/cadastro', {
          login: nome,
          apelido: apelido,
          email: email,
          password: senha
        });

        alert(`Usuário cadastrado com sucesso!\nBem vindo(a): ${nome} ${apelido}`);

        window.location.href = 'home.html';
      } catch (erro) {
        
        if(erro.status === 409) {
          let emailForm = document.getElementById('email');
          emailForm.classList.add('invalid');

          alert("Erro ao cadastrar usuário. E-mail já cadastrado.");  
        }

        console.error("Erro ao cadastrar:", erro.message);
        //alert("Erro ao cadastrar usuário. Tente novamente.");
      }
    });
}