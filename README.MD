# **Usina Eco-Cultural Front-End**
Esse projeto foi desenvolvido pelos alunos do IMT para o parceiro Usina Eco-Cultural:

1. **Enzo R. Zequim (RA: 24.00085-0)** *(Aprocimadamente 51% dos Commits)*
   **Função Principal:** Documentação e Back-End
    - **Documentação:**
      - Itens 1 a 4 e 8 a 10, com a Thamires.
    
   **Contribuições no Código:**  
    - **Pasta `Backend`:**
      - **`BackEnd.js` (Tudo):**
      - **`Cadastro.js` (Tudo):**
      - **`Eventos.js`:**
        - Tudo, exceto parte visual (HTML).
      - **`Login.js` (Tudo):**
      - **`Loja.js`:**
        - Tudo, exceto parte visual (HTML).
      - **`Noticias.js`:**
        - Tudo, exceto parte visual (HTML).

    - **Pasta `front`:**
      - **Pasta `Componentes`:**
        - **`navbar.js`:**
          - Funções: (verificarLogin, logout, criarBotaoDropdown).
        - **`painel-adm.js`:**
          - Funções de Cadastro: (CadastrarEvento, CadastrarNoticia, CadastrarProduto).  
      
      - **Pasta `pages`:**
        - Implementou Back-End no Front-End.
        - Encontrou e corrigiu erros (ícones, responsividade e outros).
      
    - **`FrontEnd.js`:**
      - Validar ADM.
      - Token.
      - README.md.

2. **Eric Calil Souto (RA: 24.00941-5)** *(Aprocimadamente 4% dos Commits)*
   **Função Principal:** Prototipação
    - **Design:**
      - Criou o Figma.
    - **Documentação:**
      - Itens 5, 6 e 7.
    
   **Contribuições no Código:**      
    - **Pasta `Backend`:**
      - **`Noticias.js`:**
        - Parte visual.
         
    - **Pasta `front`:**
      - **Pasta `Componentes`:**    
        - **`footer.js`:**
          - Parte visual.
         
    - **Pasta `pages`:**
      - **`home.html`:**
        - Criou Pop-Up de Natal.
        - footer e área dos parceiros
      
    - **`FrontEnd.js`:**
      - Acessibilidade.
      - Visual do Pop-Up.

3. **Thamires Pietra Menezes dos Santos (RA: 24.00872-9)** *(Aprocimadamente 45% dos Commits)*
   **Função Principal:** Documentação e Front-End
    - **Documentação:**
      - Ajudou com os itens 1 a 4 e 8 a 10.
    
   **Contribuições no Código:**  
    - **Pasta `Backend`:**
      - **`add-colaborador.js` (Tudo):**
      - **`Carrinho.js` (Tudo):**
      - **`Eventos.js`:**
        - Parte visual (HTML).    
      - **`Loja.js`:**
        - Parte visual (HTML).
      - **`Noticias.js`:**
        - Parte visual (HTML).

    - **Pasta `front`:**
      - **Pasta `Componentes`:**
        - **`footer.js`:**
          - Parte funcional (botões e redirecionamento).
        - **`navbar.js`:**
          - Tudo, exceto as funções: (verificarLogin, logout, criarBotaoDropdown).
        - **`painel-adm.js`:**
          - Tudo, exceto as funções de Cadastro: (CadastrarEvento, CadastrarNoticia, CadastrarProduto).  
        - **`termos-de-uso.js` (Tudo):**
      
      - **Pasta `pages`:**
        - **`cadastro.html` (Tudo):**
        - **`carrinho.html` (Tudo):**
        - **`contato.html` (Tudo):**
        - **`eventos.html` (Tudo):**
        - **`home.html`:**
          - Tudo menos o visual do footer e area dos parceiros
        - **`login.html` (Tudo):**
        - **`loja.html` (Tudo):**
        - **`painel-adm.html` (Tudo):**
      
    - **`FrontEnd.js`:**
      - Funcionalidade do Pop-Up.



## **Requisitos**
Antes de rodar o código, verifique se você tem os seguintes itens instalados no seu computador, e atualizados:

[Visual Studio Code](https://code.visualstudio.com/)  
[Gir Hub](https://desktop.github.com/download/)  
[Git Bash](https://gitforwindows.org/)  
[Node.js](https://nodejs.org)  

### Abra o Visual Studio Code:
No VS Code navegue até uma pasta vazia no seu computador.
Abra o terminal integrado do VS Code e execute o seguinte comando para clonar o repositório:  
`git clone https://github.com/EnzoRZequim/Usina-Eco-Cultural-front-end.git`

Se prefifrir não usar o git, você pode baixar o projeto .zip no link do github

**Instalando Dependências:**  
Após clonar o repositório, siga estas etapas para instalar as dependências:
No VS Code, dentro da pasta do projeto abra o terminar execute o seguinte comando para baixar os componentes usados no projeto:  
`npm install --legacy-peer-deps`

**Iniciando o Servidor**
Para iniciar o servidor, abra o arquivo 'home.html' e execute o seguinte comando no terminal:  
`npm start`

**Instale a extensão "Live Server".**

Para abrir o projeto no seu navegador, utilize a extensão "Live Server" no Visual Studio Code:

Instale a extensão "Live Server".
Após a instalação, um botão chamado "Go Live" aparecerá na parte inferior direita do VS Code.
Clique em "Go Live" para abrir o projeto no seu navegador padrão.
Agora você poderá testar o site!
