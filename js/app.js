// Constantes contendo elementos importantes do HTML
const inputItem = document.getElementById('campo-item');
const botaoAdicionar = document.getElementById('btn-salvar-item');
const listaDeCompras = document.getElementById('lista-de-compras'); listaDeCompras.innerHTML = "";
const listaComprados = document.getElementById('lista-de-comprados');
    // Variável inicializada como 0, devido a presença de nenhum item, o numero aumenta a cada iteração da função adicionarItem.
    let contagemItens = 0;

// Ouvintes de evento para uso do teclado.
inputItem.addEventListener('keydown', (event) => {
    if(event.key == 'Enter') {
        event.preventDefault();
        adicionarItem();
        inputItem.value = "";
    }
    
});

// Ouvinte de evente para o uso do botao.
botaoAdicionar.addEventListener('click', adicionarItem);

// Função executada no clique do botão que serve para adicionar o item ao carrinho.
function adicionarItem() {
    // Recupera o nome do item através do valor digitado no input.
    const nomeDoItem = inputItem.value;
    // Retorna caso o input não receba um nome. 
    if(!nomeDoItem) return;
    // Cria o item dentro da lista através da função criarItemNaLista que cria o item na lista tendo como parâmetro o nome do item.
    const itemNaLista = criarItemNaLista(nomeDoItem);
   

    // Coloca o item na lista de compras.
    listaDeCompras.appendChild(itemNaLista);

    inputItem.value = "";
}

// Função criarItemNaLista que funciona como o título diz e tem como parâmetro 'nome' - e receberá o nome do item.
function criarItemNaLista(nome) {
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

// Função que cria a Checkbox
function criarCheckbox() {
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

function criarOpcoesDoItem() {
    // Constante que armazena a criação de uma div.
    const opcoesDoItem = document.createElement('div');

    // Constantes pro botão de remover e pro botão de editar que recebem a função criarBotoes com seus respectivos parâmetros
    const botaoRemover = criarBotoes('img/delete.svg', 'Deletar');
    const botaoEditar =  criarBotoes('img/edit.svg', 'Editar');

    opcoesDoItem.appendChild(botaoRemover);
    opcoesDoItem.appendChild(botaoEditar);

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


// Função que realiza a checagem do checkbox.
function checagemItem(event) {
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