class Navbar {
    constructor(element) {
        this.element = element;
        this.render();
    }

    render() {
        this.element.innerHTML = `
            <div class="navbar">
                <a href="pages/home.html">Home</a>
                <a href="pages/contato.html">Contato</a>
            </div>
        `;
    }
}
