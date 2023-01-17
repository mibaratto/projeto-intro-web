
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
    nomePet: "Naná",
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
    nomePet: "Pitcho",
    especie:"gato",
    anoNascimento: 2022,
    idade: 1,
    medicamentos: ["predsin"],
    castrado: false,
    imagem: "/imgs/cat-02.jpg"
}

const pet6 = {
    nomeTutor: "Tania Regina",
    telefoneTutor: "55-9101-3456",
    nomePet: "Pudim",
    especie:"cachorro",
    anoNascimento: 2012,
    idade: 10,
    medicamentos: ["predsin", "omeprazol", "dipirona"],
    castrado: true,
    imagem: "/imgs/dog-02.jpg"
}

///Filtragem
const filtraClientes = (clientesOriginal, termoPesquisado) => { 
    const arrayResultadoPesquisa= []  
    for (let cliente of clientesOriginal){
        for (let[key, value] of Object.entries(cliente)){
            if(value === termoPesquisado){
                arrayResultadoPesquisa.push(cliente)
            }
        } 
    }
    avaliaResultadoPesquisa(arrayResultadoPesquisa)  
}

const avaliaResultadoPesquisa = (arrayResultadoPesquisa )=>{
        //limpeza resultado nao encontrado, pois pode haver um "resultado não encontrado" anteriormente
        const resultadoNaoEncontradoAntigo = document.getElementById("resultado-nao-encontrado");
        resultadoNaoEncontradoAntigo.innerHTML = "";
        //limpeza da section(cards), pois podem ter o resultado de uma pesquisa anterior
        const sectionAntigas = document.getElementById("sections1");
        sectionAntigas.innerHTML = "";
    if(arrayResultadoPesquisa.length === 0){//não há resultado
        const resultadoNaoEncontrado = document.getElementById("resultado-nao-encontrado");
        const textoResultadoNaoEncontrado = document.createElement("h1");
        textoResultadoNaoEncontrado.textContent = "Resultado não encontrado";
        resultadoNaoEncontrado.appendChild(textoResultadoNaoEncontrado);
        resultadoNaoEncontrado.insertAdjacentElement('afterbegin', textoResultadoNaoEncontrado)
    }else {
        rederizaTela(arrayResultadoPesquisa)//caso contrario, chama funçao renderizar tela
    }
}

const rederizaTela = (array) =>{
        //limpeza resultado nao encontrado, pois pode haver um "resultado não encontrado" anteriormente
        const resultadoNaoEncontradoAntigo = document.getElementById("resultado-nao-encontrado");
        resultadoNaoEncontradoAntigo.innerHTML = "";
        //limpeza da section(cards), pois podem ter o resultado de uma pesquisa anterior
        const sectionAntigas = document.getElementById("sections1");
        sectionAntigas.innerHTML = "";
        
    for (let i in array){//a ordem dos elementos importa na estrutura abaixo
        const novaSection = document.createElement("section");

        const novaImagem = document.createElement("img");
        novaImagem.setAttribute("src", array[i].imagem)
        novaSection.appendChild(novaImagem);

        const divInfosClientes = document.createElement("div");//cria uma div que vai conter os dados dos clientes
        divInfosClientes.setAttribute("class", "divClientes");
        novaSection.appendChild(divInfosClientes);  

        const nomePet = document.createElement("h3");//cria o nome do Pet em destaque
        nomePet.innerHTML = array[i].nomePet;  
        divInfosClientes.appendChild(nomePet);

        const nomeTutor = document.createElement("p");//adiciona outras informações
        nomeTutor.innerHTML = "Nome do tutor:  " + array[i].nomeTutor;
        divInfosClientes.appendChild(nomeTutor);

        const telefoneTutor = document.createElement("p");
        telefoneTutor.innerHTML = "Telefone do tutor:  " + array[i].telefoneTutor ;
        divInfosClientes.appendChild(telefoneTutor);

        const divAtual = document.getElementById("sections1");
        divAtual.insertAdjacentElement('afterbegin', novaSection);   
    }      
}

//Execução da busca e chamada de filtragem
const excutaBusca = ()=>{
    let termoPesquisado = document.getElementById("busca").value
    filtraClientes(clientesOriginal, termoPesquisado)
}


//Push dos Obj no array clientesOriginal
const clientesOriginal = []
clientesOriginal.push(pet1, pet2, pet3, pet4, pet5, pet6)

//Programa começa aqui. Tela com todos objetos.
rederizaTela(clientesOriginal)





