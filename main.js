//Simulação de adição de itens de pedido
//Seleciona todos os botões que possuem a classe 'adicionar'
const botoesAdicionar = document.querySelectorAll('.adicionar');

//Seleciona a lista onde os itens do pedidos serão exibidos
const listaPedido = document.getElementById('lista-pedido');

//seleciona o elemento que exibira o total do pedido
const totalElemento = document.getElementById('total');

//variavel que armazena o total do pedido
let total = 0;

// percorrer todos os botões 'adicionar' e adicionar um evento de clique em cada um
botoesAdicionar.forEach((botao) => {
    botao.addEventListener('click', () => {
        //obtem o elemento pai do botão
        const produto = botao.parentElement;

        //obtem o nome do produto a partir do texto dat tag <h3>
        const nome = produto.querySelector('h3').textContent

        //obtem o preço do produto removendo o texto "R$" e converte o valor para decimal
        const preco = parseFloat(produto.querySelector(".preco").textContent.replace("R$",""));

        //obtem um item da lista <li> para adicionar o produto ao pedido
        const itemPedido = document.createElement("li");

        itemPedido.textContent = `${nome} - R$ ${preco.toFixed(2)}`;

        //adiona o item criado á lista de pedidos
        listaPedido.appendChild(itemPedido);

        //atualiza o total da compra
        total += preco;

        totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
    })
})

//simula a finalização do pedido
const botaoFinalizarPedido = document.getElementById("finalizar-pedido");

botaoFinalizarPedido.addEventListener("click", () => {
    alert("Pedido finalizado com sucesso" + totalElemento.textContent);
    listaPedido.innerHTML = " ";

    total = 0;

    totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
})


