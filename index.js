
const pet1 = {
    nomeTutor: "Maria Carmen Oliveira",
    telefone: "55-9101-3456",
    nomePet: "Mingus",
    especie:"cachorro",
    anoNascimento: 2012,
    idade: 10,
    medicamentos: ["predsin", "omeprazol", "dipirona"],
    vacinado: true,
    imagem: "/imgs/dog-01.jpg"
}


const pet2 = {
    nomeTutor: "João Cristino da Silva",
    telefone: "9101-1234",
    nomePet: "Pecos",
    especie:"gato",
    anoNascimento: 2002,
    idade: 21,
    medicamentos: [],
    vacinado: true,
    imagem: "/imgs/cat-01.jpg"
}

const pet3 = {
    nomeTutor: "Monica Andrades",
    telefone: "9101-9087",
    nomePet: "Naná",
    especie:"gato",
    anoNascimento: 2022,
    idade: 1,
    medicamentos: ["predsin"],
    vacinado: true,
    imagem: "/imgs/cat-03.jpg"
}

const pet4 = {
    nomeTutor: "Luiza Serafim",
    telefone: "9101-9087",
    nomePet: "Flor",
    especie:"coelho",
    anoNascimento: 2022,
    idade: 1,
    medicamentos: ["predsin"],
    vacinado: false,
    imagem: "/imgs/rabit-01.jpg"
}

const pet5 = {
    nomeTutor: "Luiz Carlos Almeida",
    telefone: "9101-9087",
    nomePet: "Pitcho",
    especie:"gato",
    anoNascimento: 2022,
    idade: 1,
    medicamentos: ["predsin"],
    vacinado: false,
    imagem: "/imgs/cat-02.jpg"
}

const pet6 = {
    nomeTutor: "Tania Regina",
    telefone: "55-9101-3456",
    nomePet: "Pudim",
    especie:"cachorro",
    anoNascimento: 2012,
    idade: 10,
    medicamentos: ["predsin", "omeprazol", "dipirona"],
    vacinado: true,
    imagem: "/imgs/dog-02.jpg"
}

//Filtragem
const filtraClientes = (clientesOriginal, termoPesquisado) => { 
    const arrayResultadoPesquisa = []  
    for (let cliente of clientesOriginal){
        for (const key in cliente){
            const value = cliente[key]
            if(value.toString().toLowerCase().includes(termoPesquisado.toLowerCase())){ 
                if(!arrayResultadoPesquisa.includes(cliente)) { // se nao estiver no array, colocar
                    arrayResultadoPesquisa.push(cliente)
                }
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
        const textoResultadoNaoEncontrado = document.createElement("h2");
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
        novaImagem.setAttribute("class", "imgCards")
        novaSection.appendChild(novaImagem);

        const divInfosClientes = document.createElement("div");//cria uma div que vai conter os dados dos clientes
        divInfosClientes.setAttribute("class", "divClientes");
        novaSection.appendChild(divInfosClientes);  

        const nomePet = document.createElement("h3");//cria o nome do Pet em destaque
        nomePet.innerHTML = array[i].nomePet;  
        divInfosClientes.appendChild(nomePet);

        const nomeTutor = document.createElement("p");//adiciona outras informações
        nomeTutor.innerHTML = "Tutor:  " + array[i].nomeTutor;
        divInfosClientes.appendChild(nomeTutor);

        const telefoneTutor = document.createElement("p");
        telefoneTutor.innerHTML = "Telefone:  " + array[i].telefone ;
        divInfosClientes.appendChild(telefoneTutor);

        const divAtual = document.getElementById("sections1");
        divAtual.insertAdjacentElement('afterbegin', novaSection);   
    }      
}

//Execução da busca e chamada de filtragem
const excutaBusca = ()=>{
    let termoPesquisado = (document.getElementById("busca").value)
    
    if(termoPesquisado === ""){
        alert("Campo em branco")
    }else {
        filtraClientes(clientesOriginal, (termoPesquisado))
    }
}  


//Push dos Obj no array clientesOriginal
const clientesOriginal = []
clientesOriginal.push(pet1, pet2, pet3, pet4, pet5, pet6)

//Programa começa aqui. Tela com todos objetos.
rederizaTela(clientesOriginal)


const relatorio = (clientesOriginal) =>{
    console.log("RELATÓRIO CLIENTES \n \n")
    for (let cliente of clientesOriginal) {
        for(let [key, value] of Object.entries(cliente))
            console.log(`${key.charAt(0).toLocaleUpperCase() + key.slice(1)}: ${value}`)
            console.log("-----------------\n \n")
    }
}
relatorio(clientesOriginal)


const mediaIdade = (clientesOriginal) => {
    let somaIdades = 0
    for (let cliente of clientesOriginal) {
            somaIdades += cliente.idade
    }
    let mediaIdade = somaIdades / clientesOriginal.length
    console.log(`Média da Idade dos pacientes: ${mediaIdade.toFixed(1)}`)
}
mediaIdade(clientesOriginal)

const verificaPetsTodosVacinados = (clientesOriginal) =>{
    let petVacinado = true
    for(let cliente of clientesOriginal){
        if(cliente.vacinado === false){
            petVacinado = false
            console.log(`Nem todos pets estão vacinados: ${petVacinado}`)
            return
        }
    }
    console.log(`Todos pets estão vacinados: ${petVacinado}`)
}
verificaPetsTodosVacinados(clientesOriginal)

