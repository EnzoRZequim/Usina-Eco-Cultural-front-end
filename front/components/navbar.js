class Navbar {
    constructor(element) {
        this.element = element;
        this.render();
    }

    render() {
        this.element.innerHTML = `
            <div class="navbar">
                <a href="/home">Home</a> <!-- Usando caminho absoluto -->
                <a href="/contato">Contato</a> <!-- Usando caminho absoluto -->
            </div>
        `;
    }
}
