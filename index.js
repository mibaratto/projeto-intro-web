
const pet1 = {
    nomeTutor: "Maria Carmen Oliveira",
    telefoneTutor: "55-9101-3456",
    nomePet: "Pudim",
    especie:"cachorro",
    anoNascimento: 2012,
    idade: 10,
    medicamentos: ["predsin", "omeprazol", "dipirona"],
    castrado: true,
    imagem: "/imgs/dog-01.jpg"
}


const pet2 = {
    nomeTutor: "João Cristino da Silva",
    telefoneTutor: "9101-1234",
    nomePet: "Pecos",
    especie:"gato",
    anoNascimento: 2002,
    idade: 21,
    medicamentos: [],
    castrado: true,
    imagem: "/imgs/cat-01.jpg"
}

const pet3 = {
    nomeTutor: "Monica Andrades",
    telefoneTutor: "9101-9087",
    nomePet: "Flor",
    especie:"gato",
    anoNascimento: 2022,
    idade: 1,
    medicamentos: ["predsin"],
    castrado: false,
    imagem: "/imgs/cat-03.jpg"
}

const pet4 = {
    nomeTutor: "Luiza Serafim",
    telefoneTutor: "9101-9087",
    nomePet: "Flor",
    especie:"gato",
    anoNascimento: 2022,
    idade: 1,
    medicamentos: ["predsin"],
    castrado: false,
    imagem: "/imgs/rabit-01.jpg"
}

const pet5 = {
    nomeTutor: "Luiz Carlos Almeida",
    telefoneTutor: "9101-9087",
    nomePet: "Roger",
    especie:"coelho",
    anoNascimento: 2022,
    idade: 1,
    medicamentos: ["predsin"],
    castrado: false,
    imagem: "/imgs/cat-02.jpg"
}

const pet6 = {
    nomeTutor: "Maria Carmen Oliveira",
    telefoneTutor: "55-9101-3456",
    nomePet: "Pudim",
    especie:"cachorro",
    anoNascimento: 2012,
    idade: 10,
    medicamentos: ["predsin", "omeprazol", "dipirona"],
    castrado: true,
    imagem: "/imgs/dog-02.jpg"
}

///PESQUISA
const pesquisarClientes = (clientesOriginal, termoPesquisado) => { 
    const arrayResultadoPesquisa= []   
    for (let cliente of clientesOriginal){
        for (let[key, value] of Object.entries(cliente)){
            if(value === termoPesquisado){
                arrayResultadoPesquisa.push(cliente)
            }
        }   
    }
    return arrayResultadoPesquisa   
}


//Criando elementos no DOM
const formataArrayClientes = (clientesOriginal) =>{
    const clientesFormatado = []
    for (let cliente of clientesOriginal){
        let conteudoCliente = {
            imagem: "", 
            texto: ""
        }
        for (let[key, value] of Object.entries(cliente)){
            if(key === "imagem"){
                conteudoCliente.imagem = value   
            }
            else{
                conteudoCliente.texto += `${key}: ${value} <br>`
            }
        }
        clientesFormatado.push(conteudoCliente)
    }
    return clientesFormatado
}

const criandoSections = (clientesFormatado) =>{
    for (let i in clientesFormatado){
        const limpaH1 = document.getElementById("resultado-nao-encontrado");
        limpaH1.innerHTML = "";
        const novaSection = document.createElement("section");
        const novaImagem = document.createElement("img");
        const novoParagrafo = document.createElement("p");
        novaSection.appendChild(novaImagem);
        novaSection.appendChild(novoParagrafo);
        const divAtual = document.getElementById("sections1");
        divAtual.insertAdjacentElement('afterbegin', novaSection);
        novoParagrafo.innerHTML = clientesFormatado[i].texto  // adiciona o parágrafo
        novaImagem.setAttribute("src", clientesFormatado[i].imagem)
    }      
}


const rederizaTela = (clientesOriginal) =>{
    const clientesFormatado = formataArrayClientes(clientesOriginal)
    criandoSections(clientesFormatado)
}


const mostraResultadoPesquisa = (termoPesquisado)=>{
    const novaSection = document.getElementById("sections1");
    novaSection.innerHTML = "";
    const resultadoNaoEncontrado = document.getElementById("resultado-nao-encontrado");
    resultadoNaoEncontrado.innerHTML = "";
    const resultadoPesquisa = pesquisarClientes(clientesOriginal, termoPesquisado)
    if(resultadoPesquisa.length === 0){
        const resultadoNaoEncontrado = document.getElementById("resultado-nao-encontrado");
        const textoResultadoNaoEncontrado = document.createElement("h1");
        textoResultadoNaoEncontrado.textContent = "Resultado não encontrado";
        resultadoNaoEncontrado.appendChild(textoResultadoNaoEncontrado);
        resultadoNaoEncontrado.insertAdjacentElement('afterbegin', textoResultadoNaoEncontrado)
    }else {
        rederizaTela(resultadoPesquisa)
    }
    console.log("fim")
}

const excutaBusca = ()=>{
    let termo = document.getElementById("busca").value
    mostraResultadoPesquisa(termo)
}

const clientesOriginal = []
clientesOriginal.push(pet1, pet2, pet3, pet4, pet5, pet6)

//Programa começa aqui. Tela com todos objetos
rederizaTela(clientesOriginal)

//Se a pessoa escrever no campo de busca na UI e clicar no botao buscar =>
//chama executaBusca (passando o termo digitado no teclado) 
//executaBusca chama mostraresultado da pesquisa 
//mostra resultado avalia SE: tem o termo > chama renderizaTela(resultadoPesquisa)
//SE NAO aparesenta mensagem "nao encontrado"



