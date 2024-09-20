const inputItem = document.getElementById('campo-item'); inputItem.value = "";
const btnSalvarItem = document.getElementById('btn-salvar-item');
const listaDeCompras = document.getElementById('lista-de-compras'); listaDeCompras.innerHTML = "";
let itensNaLista = [];

btnSalvarItem.addEventListener('click', adicionarItem);

function adicionarItem() {
    let item = inputItem.value;

    if(itensNaLista.includes(item)) {
        alert('Você já colocou esse item!');
    } else {
        itensNaLista.push(item);
        listaDeCompras.innerHTML += `
                <li id="item-${itensNaLista.indexOf(item)}" class="lista-item">
                    <div class="lista-item-container">
                        <div>
                            <div class="container-checkbox">
                                <label for="checkbox-${itensNaLista.indexOf(item)}">
                                    <input type="checkbox" class="input-checkbox"  />
                                    <div id="checkbox-${itensNaLista.indexOf(item)}" class="checkbox-customizado" onclick="checkbox(${itensNaLista.indexOf(item)})"></div>
                                </label>
                            </div>
                            <p id="nome-item-${itensNaLista.indexOf(item)}">${item}</p>
                        </div>

                        <div>
                            <button id="delete-${itensNaLista.indexOf(item)}" class="item-lista-button" onclick="deletar(${itensNaLista.indexOf(item)})" >
                                <img src="./img/delete.svg"></img>
                            </button>
                            <button id="edit-${itensNaLista.indexOf(item)}" class="item-lista-button" onclick="editar(${itensNaLista.indexOf(item)})">
                                <img src="./img/edit.svg"></img>
                            </button>
                        </div>
                    </div>
                    <p class="texto-data"></p>
                </li>
    `
    }

    inputItem.value = "";
};

function checkbox(i) {
    let checkboxItem = document.getElementById('checkbox-' + i);
    
    if(checkboxItem.classList.contains('checked')) {
        checkboxItem.classList.remove('checked');
    } else {
        checkboxItem.classList.add('checked');
    }
}

function deletar(i) {
    let itemDaLista = document.getElementById('item-' + i);
    itensNaLista.splice(i, 1);
    listaDeCompras.removeChild(itemDaLista);
}

function editar(i) {
    let nomeDoItem = document.getElementById('nome-item-' + i);
    nomeDoItem.innerHTML = prompt('Digite um novo nome');
}
