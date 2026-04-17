// selecione o botão usando o método getElementById
var botao = document.getElementById("botao");

// adicione um evento de clique ao botão
botao.addEventListener('click', function() {
    // selecione o parágrafo usando o método getElementByUd
    let paragrafo = document.getElementById("paragrafo");

    // altere o texto do parágrafo
    paragrafo.innerText = "O texto deste parágrafo foi alterado!";
})

var botao2 = document.getElementById("botao2");

botao2.addEventListener('click', () => {
    let paragrafo = document.getElementById("paragrafo");

    paragrafo.innerText = "";
});

var botao3 = document.getElementById("botao3");

botao3.addEventListener('click', () => {
    let p_botao3 = document.getElementById("p_botao3");

    p_botao3.textContent = "Obtém o conteúdo textual bruto de todos os elementos, incluindo ocultos. Recomendado para texto.";
});

var botao4 = document.getElementById("botao4");

botao4.addEventListener('click', () => {
    let p_botao4 = document.getElementById("p_botao4");

    p_botao4.innerText = "Retorna apenas o texto visível e estilizado.";
});

var botao5 = document.getElementById("botao5");

botao5.addEventListener('click', () => {
    let p_botao5 = document.getElementById("p_botao5");

    p_botao5.innerHTML = "Interpreta tags HTML.";
});
