const botaoAdicionar = document.querySelector("#botaoAdicionar");

botaoAdicionar.addEventListener("click", () => {
    const conteudo = document.querySelector("#texto").value;

    if(conteudo){
        const container = document.querySelector("#container");

        const novoConteudo = document.createElement("div");
        novoConteudo.classList.add("item");

        const textoItem = document.createElement("p");
        textoItem.textContent = conteudo;

        const botaoRemover = document.createElement("button");
        botaoRemover.classList.add("botao")
        botaoRemover.textContent = "Remover";
        botaoRemover.addEventListener("click", () => {
            container.removeChild(novoConteudo);
        });

        novoConteudo.appendChild(textoItem);
        novoConteudo.appendChild(botaoRemover);
        container.appendChild(novoConteudo);
    }
});
