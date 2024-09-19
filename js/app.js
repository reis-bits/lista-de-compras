const btnSalvarItem = document.getElementById('btn-salvar-item');
const listaDeCompras = document.getElementById('lista-de-compras');
listaDeCompras.innerHTML = "";
btnSalvarItem.addEventListener('click', adicionarItem);

function adicionarItem() {
    const campoItem = document.getElementById('campo-item');
    let item = campoItem.value;
    listaDeCompras.innerHTML += `
                <li id="lista-item">
                    <div class="lista-item-container">
                        <div>
                            <div class="container-checkbox">
                                <label for="checkbox-1">
                                    <input type="checkbox" class="input-checkbox" id="checkbox" />
                                    <div class="checkbox-customizado"></div>
                                </label>
                            </div>
                            <p> ${item} </p>
                        </div>

                        <div>
                            <button class="item-lista-button">
                                <img src="./img/delete.svg" alt="remover">
                            </button>
                            <button class="item-lista-button">
                                <img src="./img/edit.svg" alt="editar">
                            </button>
                        </div>
                    </div>
                    <p class="texto-data">Segunda-feira (31/10/2022) às 08:30</p>
                </li>
    `;


    console.log(item);
}