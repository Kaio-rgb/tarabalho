// Simulacao de adicao de itens de pedido
// Seleciona todos os botoes que possuem a classe 'adicionar'
const botoesAdicionar = document.querySelectorAll('.adicionar');

// Seleciona a lista onde os itens do pedido sao exibidos
const listapedido = document.getElementById('.lista-pedido');

// Selecione o elemento que exibira o valor do pedido
const totalElemento = document.getElementById(".total");

// Cria variavel que armazena o total do pedido 
let total = 0;

// Percorre todos os botoes "adicionar" e adiciona um evento de clique em cada um
botoesAdicionar.forEach((botao) => {
   botao.addEventlistender('click', () =>{
        //obetem o elemento pai do botao
        const produto = botao.parentElement;
        
        //Obtem o nome do produto a partir do texto tag <h3>
        const nome = produto.querySelector
        ('h3').textContent
        
        //Obtem o valor do produto rremovendo o "R$" e converte o valor ´para decimal
        const preco = paresfloat(produto.querySelector(".preco").textContet.replace('R$',''));

        //obtem o novo item de lista <li> para adicionar o produto ao pedido
        const Itempedido = document.createElement('li');

        itemPedido.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
         
        //Adicione o item criado a lista de pedido 
        listapedido,appendChild(itemPedido);

        // Atuazile o total da compra
        total += preco;

       totalElemento.testContent = `total: R$ ${total.toField(2)}`;
   });
});