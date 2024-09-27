import { criarCheckbox } from "./checkbox.js";
import { listaDeCompras, verificarListaVazia } from "./main.js";

// Função criarItemNaLista que funciona como o título diz e tem como parâmetro 'nome' - e receberá o nome do item.
export function criarItemNaLista(nome) {
    // Constantes que recebem a criação dos elementos básicos do DOM. Sendo o tópico e o container do item; que recebe uma classe.
    const topicoDaLista = document.createElement('li');
    const containerDoItem = document.createElement('div'); containerDoItem.classList.add('lista-item-container');

    // Constantes que recebem duas funções, criando as informações do item e outra as opções deste.
    const infoDoItem = criarInfoDoItem(nome);
    const opcoesDoItem = criarOpcoesDoItem();
    const dataDoItem = document.createElement('p');
        dataDoItem.innerText = `${new Date().toLocaleDateString('pt-BR', { weekday: "long" })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString('pt-BR', {hour: "numeric", minute: "numeric"})}`;
        dataDoItem.classList.add('texto-data')

    // Acrescenta as informações e opções deste item ao seu container.
    containerDoItem.appendChild(infoDoItem);
    containerDoItem.appendChild(opcoesDoItem);
    // Acrescenta o container do item ao tópico da lista.
    topicoDaLista.appendChild(containerDoItem);
    topicoDaLista.appendChild(dataDoItem);
    // Retorna como resultado da função o tópico da lista contendo todas as informações necessárias.
    return topicoDaLista;
}

// Função criarInfoDoItem, com um título bem sugestivo, tendo um parâmetro nome - que vai receber o nome do item.
function criarInfoDoItem(nome) {
    // Constante infoDoItem que recebe a criação de um elemento div que vai ser container pras informações do item.
    const infoDoItem = document.createElement('div');
    
    // Constante nomeDoItem que recebe a criação de um parágrafo; o parágrafo depois recebe em texto, o nome do Item.
    const nomeDoItem =  document.createElement('p'); nomeDoItem.innerText = nome; nomeDoItem.id = "item-titulo";
    // Constante containerCheckbox que recebe uma função sem parâmetros para criar a checkbox no HTML.
    const containerCheckbox =  criarCheckbox();

    // O container de informações do item recebe o container com a checkbox e com o nome
    infoDoItem.appendChild(containerCheckbox);
    infoDoItem.appendChild(nomeDoItem);

    // Retorna como resultado da função o container com as informações do item.
    return infoDoItem;
}

function criarOpcoesDoItem() {
    // Constante que armazena a criação de uma div.
    const opcoesDoItem = document.createElement('div');

    // Constantes pro botão de remover e pro botão de editar que recebem a função criarBotoes com seus respectivos parâmetros
    const botaoRemover = criarBotoes('img/delete.svg', 'Deletar');
    const botaoEditar =  criarBotoes('img/edit.svg', 'Editar');

    opcoesDoItem.appendChild(botaoRemover);
    opcoesDoItem.appendChild(botaoEditar);

    // Ouvintes de evento de ambos os botões para suas funcionalidades.
    botaoRemover.addEventListener("click", removerItem);
    botaoEditar.addEventListener("click", editarItem);

    return opcoesDoItem;
}

function criarBotoes(src, alt) {
    // Constante botao que armazena a criação de um botao; que recebe sua classe.
    const botao = document.createElement('button'); botao.classList.add('item-lista-button');

    // Constante imagem que armazena a criação de uma imagem, ela recebe seu source e seu texto alternativo de acordo com os parâmetros
    const imagem = document.createElement('img');
    imagem.src = src;
    imagem.alt =  alt;

    // Guarda a imagem dentro do botão
    botao.appendChild(imagem);

    // Retorna como resultado da função o botão contendo as informações necessárias.
    return botao;
}

function removerItem(event) {
    const topicoDaLista = event.currentTarget.closest('li');
    topicoDaLista.remove();

    verificarListaVazia(listaDeCompras);
}

function editarItem(event) {
    const nomeDoItem =  event.currentTarget.closest('li').querySelector('#item-titulo');
    nomeDoItem.innerText = prompt('Digite o nome do novo item')
}