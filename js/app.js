// Variáveis diversas com elementos do HTML, sendo: O input para digitar o item, uma lista de compras e um contador de itens. Além de um array contendo os itens.
const inputItem = document.getElementById('campo-item'); inputItem.value = "";
const listaDeCompras = document.getElementById('lista-de-compras'); listaDeCompras.innerHTML =  "";
let contagemItens = 0;
let itensNaLista = [];

// Função que adiciona os itens ao DOM.
function adicionarItem() {
    // Pega o item em si através do valor digitado no input
    let item = inputItem.value;

    // Constantes com o valor atribuído à criação dos elementos da lista.
    const topicoDaLista = document.createElement('li');
        const itemNaLista = document.createElement('div'); itemNaLista.classList.add('lista-item-container');
    topicoDaLista.appendChild(itemNaLista);

    // Constantes com o valor atribuído à criação das informações do item (nome e a checkbox denunciando se ja foi comprado, ou não.)
    const infoDoItem = document.createElement('div');
        // Constante cria um paragráfo para o nome do item //Resgata o nome do item.        
        const nomeDoItem =  document.createElement('p'); nomeDoItem.innerText = item;

        // Costante com todas as informações da checkbox. O container, a label e o input, e o checkbox customizado.
        const containerCheckbox =  document.createElement('div'); containerCheckbox.classList.add('container-checkbox'); 

            const labelCheckbox = document.createElement('label'); containerCheckbox.appendChild(labelCheckbox);

            const inputCheckbox =  document.createElement('input'); inputCheckbox.type = "checkbox"; inputCheckbox.classList.add('input-checkbox'); inputCheckbox.id = "checkbox-" + contagemItens++; labelCheckbox.setAttribute("for", inputCheckbox.id);labelCheckbox.appendChild(inputCheckbox); 

            const checkboxCustomizado = document.createElement('div'); checkboxCustomizado.classList.add('checkbox-customizado');labelCheckbox.appendChild(checkboxCustomizado); // checkboxCustomizado.setAttribute("onclick", `checkbox(${inputCheckbox.id})`)
    // Coloca o container e o nome dentro do container de informação.
    infoDoItem.appendChild(containerCheckbox);
    infoDoItem.appendChild(nomeDoItem);

    // Constante que armazena a criação de uma div para as opções referentes ao item
    const opcoesDoItem = document.createElement('div');
        // Constante que armazena a criação o botão de remoção
        const botaoRemover = document.createElement('button'); botaoRemover.classList.add('item-lista-button');
            const imagemRemover = document.createElement('img'); imagemRemover.src = "img/delete.svg"; imagemRemover.alt = "Remover"
            botaoRemover.appendChild(imagemRemover);
        // Constante que armazena a criação do botão de edição
        const botaoEditar = document.createElement('button'); botaoEditar.classList.add('item-lista-button');
            const imagemEditar = document.createElement('img'); imagemEditar.src = "img/edit.svg"; imagemEditar.alt = "Editar"
            botaoRemover.appendChild(imagemEditar);
    // Coloca ambas as opções de remover e editar no container de opções        
    opcoesDoItem.appendChild(botaoRemover);
    opcoesDoItem.appendChild(botaoEditar);

    // Coloca as informações e opções do item no item.
    itemNaLista.appendChild(infoDoItem);
    itemNaLista.appendChild(opcoesDoItem);
    // Coloca o item na lista
    listaDeCompras.appendChild(itemNaLista);

    // Limpa o slot do item.
    inputItem.value = "";
};

// function checkbox(i) {

//     let checkboxItem = document.getElementById(i);
    
//     if(checkboxItem.classList.contains('checked')) {
//         checkboxItem.classList.remove('checked');
//     } else {
//         checkboxItem.classList.add('checked');
//     }
// }

// function deletar(i) {
//     let itemDaLista = document.getElementById('item-' + i);
//     itensNaLista.splice(i, 1);
//     listaDeCompras.removeChild(itemDaLista);
// }

// function editar(i) {
//     let nomeDoItem = document.getElementById('nome-item-' + i);
//     nomeDoItem.innerHTML = prompt('Digite um novo nome');
// }
