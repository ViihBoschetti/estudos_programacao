const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imgBotaoTrocaTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {

    const modoEAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEAtivo) {
        imgBotaoTrocaTema.setAttribute("src", "./src/imgs/sun.png");
    } else {
        imgBotaoTrocaTema.setAttribute("src", "./src/imgs/moon.png");
    }
});
