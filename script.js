function trocarTema() {
    if (this.checked) {
        document.documentElement.style.setProperty("--cor-do-fundo", "#F1F6F9");
        document.documentElement.style.setProperty("--cor-principal", "#212A3E");
        document.documentElement.style.setProperty("--cor-do-texto", "#394867");
        document.documentElement.style.setProperty("--cor-do-hover", "#9BA4B5");
    } else {
        document.documentElement.style.setProperty("--cor-do-fundo", "#000000");
        document.documentElement.style.setProperty("--cor-principal", "#19A7CE");
        document.documentElement.style.setProperty("--cor-do-texto", "#F6F1F1");
        document.documentElement.style.setProperty("--cor-do-hover", "#146C94");
    }
}

const chk = document.getElementById('chk');

chk.addEventListener('change', trocarTema);