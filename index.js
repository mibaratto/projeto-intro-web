
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
    especie:"coelho",
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
    especie:"gato",
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
const filtraClientes = (clientesOriginal, termoPesquisado) => { 
    const arrayResultadoPesquisa= []   
    for (let cliente of clientesOriginal){
        for (let[key, value] of Object.entries(cliente)){
            if(value === termoPesquisado){
                arrayResultadoPesquisa.push(cliente)
            }
        }   
    }
    avaliaLimpaResultadoPesquisa(arrayResultadoPesquisa)  
}


//Criando elementos no DOM
// const formataArrayClientes = (clientesOriginal) =>{
//     const clientesFormatado = []
//     for (let cliente of clientesOriginal){
//         let conteudoCliente = {
//             imagem: "", 
//             texto: ""
//         }
//         for (let[key, value] of Object.entries(cliente)){
//             if(key === "imagem"){
//                 conteudoCliente.imagem = value   
//             }
//             else{
//                 conteudoCliente.texto += `${key}: ${value} <br>`
//             }
//         }
//         clientesFormatado.push(conteudoCliente)
//     }
//     return clientesFormatado
// }



const criandoSections = (clientesFormatado) =>{
    for (let i in clientesFormatado){
        const limpaH1 = document.getElementById("resultado-nao-encontrado");
        limpaH1.innerHTML = "";
        const novaSection = document.createElement("section");

        const novaImagem = document.createElement("img");
        novaImagem.setAttribute("src", clientesFormatado[i].imagem)
        novaSection.appendChild(novaImagem);

        const divInfosClientes = document.createElement("div");
        divInfosClientes.setAttribute("class", "divClientes");
        novaSection.appendChild(divInfosClientes);  

        const nomePet = document.createElement("h3");
        nomePet.innerHTML = clientesFormatado[i].nomePet;  // adiciona o parágrafo
        divInfosClientes.appendChild(nomePet);

        const nomeTutor = document.createElement("p");
        nomeTutor.innerHTML = "Nome do tutor:  " + clientesFormatado[i].nomeTutor;  // adiciona o parágrafo
        divInfosClientes.appendChild(nomeTutor);

        const telefoneTutor = document.createElement("p");
        telefoneTutor.innerHTML = "Telefone do tutor:  " + clientesFormatado[i].telefoneTutor ; // adiciona o parágrafo
        divInfosClientes.appendChild(telefoneTutor);

        // const telefoneTutor = document.createElement("p");
        // telefoneTutor.innerHTML = "Telefone do tutor:  " + clientesFormatado[i].telefoneTutor;  // adiciona o parágrafo
        // divInfosClientes.appendChild(telefoneTutor);

        // const novoParagrafo = document.createElement("p");
        // novaSection.appendChild(novoParagrafo);
        const divAtual = document.getElementById("sections1");
        divAtual.insertAdjacentElement('afterbegin', novaSection);
        // novoParagrafo.innerHTML = clientesFormatado[i].texto  // adiciona o parágrafo
        
    }      
}


const rederizaTela = (array) =>{
    const clientesFormatado = formataArrayClientes(array)
    criandoSections(clientesFormatado)
}


const avaliaLimpaResultadoPesquisa = (arrayResultadoPesquisa )=>{
    //limpeza da section original
    const novaSection = document.getElementById("sections1");
    novaSection.innerHTML = "";
    //limpeza resultado nao encontrado
    const resultadoNaoEncontrado = document.getElementById("resultado-nao-encontrado");
    resultadoNaoEncontrado.innerHTML = "";
    if(arrayResultadoPesquisa.length === 0){
        const resultadoNaoEncontrado = document.getElementById("resultado-nao-encontrado");
        const textoResultadoNaoEncontrado = document.createElement("h1");
        textoResultadoNaoEncontrado.textContent = "Resultado não encontrado";
        resultadoNaoEncontrado.appendChild(textoResultadoNaoEncontrado);
        resultadoNaoEncontrado.insertAdjacentElement('afterbegin', textoResultadoNaoEncontrado)
    }else {
        rederizaTela(arrayResultadoPesquisa)
    }
}

const excutaBusca = ()=>{
    let termoPesquisado = document.getElementById("busca").value
    filtraClientes(clientesOriginal, termoPesquisado)
}

const clientesOriginal = []
clientesOriginal.push(pet1, pet2, pet3, pet4, pet5, pet6)

//Programa começa aqui. Tela com todos objetos
// rederizaTela(clientesOriginal)

criandoSections(clientesOriginal)

//Se a pessoa escrever no campo de busca na UI e clicar no botao buscar =>
//chama executaBusca (passando o termo digitado no teclado) 
//executaBusca chama mostraresultado da pesquisa 
//mostra resultado avalia SE: tem o termo > chama renderizaTela(resultadoPesquisa)
//SE NAO aparesenta mensagem "nao encontrado"



