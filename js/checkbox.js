import {listaDeCompras, listaComprados} from "./main.js";
    // Variável inicializada como 0, devido a presença de nenhum item, o numero aumenta a cada iteração da função adicionarItem.
    let contagemItens = 0;

// Função que cria a Checkbox
export function criarCheckbox() {
    // Constante containerCheckbox que recebe a criação de uma div; que recebe uma classe que a marca como container pra checkbox.
    const containerCheckbox = document.createElement('div'); containerCheckbox.classList.add('container-checkbox')

    // Constante checkboxInput que recebe a criação de um input...
    const checkboxInput = document.createElement('input');
        // e recebe seu tipo - uma checkbox; sua classe; e seu id dinâmico, seu id conta qual o item da vez através do contador.
        checkboxInput.type = "checkbox"; checkboxInput.classList.add('input-checkbox'); checkboxInput.id = "checkbox-" + contagemItens++;
    // Constante checkboxCustom que recebe a criação de uma div...
    const checkboxCustom = document.createElement('div');
        // e recebe sua classe que o marca como uma checkbox customizada.
        checkboxCustom.classList.add('checkbox-customizado');

    // Constante checkboxLabel que recebe a criação de uma label...
    const checkboxLabel = document.createElement('label');
        // e recebe para qual elemento essa label age, além de receber o input e o checkbox custom.
        checkboxLabel.setAttribute("for", checkboxInput.id);
        checkboxLabel.appendChild(checkboxInput);
        checkboxLabel.appendChild(checkboxCustom);

    // Ouvinte de evento que ouve o clique no rótulo da checkbox e chama a checagemItem como um argumento, a função é disparada pelo clique.
    checkboxLabel.addEventListener('click', checagemItem);

    // O containerCheckbox recebe a checkboxLabel    
    containerCheckbox.appendChild(checkboxLabel);
    
    // Retorna como resultado da função o container contendo tudo do checkbox.
    return containerCheckbox;
}

// Função que realiza a checagem do checkbox.
export function checagemItem(event) {
    // Recupera o input e o checkbox custom - event é em referência ao clique do botão.
    const checkboxInput = event.currentTarget.querySelector('.input-checkbox');
    const checkboxCustom = event.currentTarget.querySelector('.checkbox-customizado');
    // Mesmo esquema, mas recupera o tópico e o nome do item através do elemento requisitado mais próximo.
    const topicoDaLista = event.currentTarget.closest('li');
    // Neste caso, pega dentro da li mais próxima o item que tiver o id item-titulo. No caso o nome do item de fato.
    const nomeDoItem = event.currentTarget.closest('li').querySelector('#item-titulo');


    // Valida o estado do input
    if(checkboxInput.checked) {
        // Se estiver checado adicione a classe checked ao checkbox customizado, mova para a lista de comprados e adicione uma linha riscando.
        checkboxCustom.classList.add('checked');
        listaComprados.appendChild(topicoDaLista);
        nomeDoItem.style.textDecoration = "line-through"
    } else {
        // Se não estiver, remova a classe checked, volte pra lista de compras e remova a linha.
        checkboxCustom.classList.remove('checked');
        listaDeCompras.appendChild(topicoDaLista);
        nomeDoItem.style.textDecoration = "none"
    }
}