function getById(id) {
    return document.getElementById(id);
}

getById('botao1').addEventListener('click', () => {
    let p1 = getById('p1');
    let texto1 = getById('texto1');
    let resultado1 = getById('resultado1');
    resultado1.innerText = "Boa tarde, " + texto1.value;
});

getById('botao2').addEventListener('click', () => {
    document.getElementsByTagName("p")[0].innerHTML = "Ola!";
});


getById('botao3').addEventListener('click', () => {
    let div = getById('div2');
    let quantidade = div.getElementsByTagName("p").length;
    resultado2.innerText = "Quantidade de parágrafos = " + quantidade;
});