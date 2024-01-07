var area = document.getElementById('area')

function entrar() {
    var nome = prompt('Digite seu nome:');

    if (nome === '' || nome === null) {
        //mensagem de erro
        alert("Ops, algo deu errado...");



    } else {
        //exibir mensagem + nome no html
        area.innerHTML = 'Bem Vindo ' + nome;

        //criar um botão no documento html
        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair da conta";
        botaoSair.onclick = sair;
        area.appendChild(botaoSair);

    }

    function sair() {
        alert('Até mais!')
        area.innerHTML = 'Você saiu...'
        
    }
    
    
}