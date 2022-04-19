let inputNovaTarefa = document.querySelector('#inputNovaTarefa'); //Pegando o campo de texto da nova tarefa
let btnAddTarefa = document.querySelector('#btnAddTarefa'); //Pegando o botao de adicionar nova tarefa
let listaTarefas = document.querySelector('#listaTarefas'); //Pegando a lista de tarefas

let qtdTarefas = 0;


inputNovaTarefa.addEventListener('keypress', (e) => { //Vai ficar ouvindo o evento de uma tecla pressionada
    if (e.keyCode == 13) { //Se a tecla 'enter' for pressionada
        let tarefa = {
            nome: inputNovaTarefa.value,
            id: gerarId,
        }
        adicionarTarefa(tarefa)
    }
});

btnAddTarefa.addEventListener('click', (e) => { //Se o botão for clicado
    let tarefa = {
        nome: inputNovaTarefa.value,
        id: gerarId,
    }
    adicionarTarefa(tarefa)
});



//--------------------------------------------Função para gerar id aleatório
function gerarId() {
    //A função vai retornar um número entre 1 e 3.000
    //Depois o numero vai ser arrendodado pro menor numero inteiro
    return Math.floor(Math.random() * 3000);
}



//--------------------------------------------Função para adicionar a tarefa na lista
function adicionarTarefa(tarefa) {
    let li = criarTagLi(tarefa);
    listaTarefas.appendChild(li); //Adiciona como componente filho no escopo da tag
    qtdTarefas++;
    console.log(qtdTarefas);
    inputNovaTarefa.value = ''; //Depois de tudo, o input se limpa
}



//--------------------------------------------Função para criar um novo item na lista
function criarTagLi(tarefa) {
    let li = document.createElement('li'); //Cria uma tag

    let span = document.createElement('span');
    span.classList.add('textoTarefa'); //Adiciona a classe que será usada na tag
    span.innerHTML = tarefa.nome; //Adiciona ao span o nome da tarefa digitada

    let div = document.createElement('div');

    let btnEditar = document.createElement('button');
    btnEditar.classList.add('btnAcao');
    btnEditar.innerHTML = "<i class='fa fa-pencil'></i>";
    btnEditar.setAttribute('onclick', 'editar('+tarefa.id+')'); //Adiciona o evento de onclick ja com a função

    let btnExcluir = document.createElement('button');
    btnExcluir.classList.add('btnAcao');
    btnExcluir.innerHTML = "<i class='fa fa-trash'></i>";
    btnExcluir.setAttribute('onclick', 'excluir('+tarefa.id+')'); //Adiciona o evento de onclick ja com a função

    div.appendChild(btnEditar); //Adiciona dentro da tag
    div.appendChild(btnExcluir);

    li.appendChild(span);
    li.appendChild(div);

    return li;
}

//--------------------------------------------Função para mudar a tarefa
function editar(idTarefa){
}



//--------------------------------------------Função para excluir a tarefa
function excluir(idTarefa){
}