import { criarItemNaLista } from "./item.js";

// Constantes contendo elementos importantes do HTML
const inputItem = document.getElementById('campo-item');
const botaoAdicionar = document.getElementById('btn-salvar-item');
export const listaDeCompras = document.getElementById('lista-de-compras'); listaDeCompras.innerHTML = "";
export const listaComprados = document.getElementById('lista-de-comprados');
    

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




