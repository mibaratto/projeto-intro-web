
const pet1 = {
    nomeTutor: "Maria",
    telefoneTutor: "9101-3456",
    nomePet: "Pudim",
    especie:"cachorro",
    anoNascimento: 2012,
    idade: 10,
    medicamentos: ["predsin", "omeprazol", "dipirona"],
    castrado: true,
    imagem: "dog-01.jpg"
}

const pet2 = {
    nomeTutor: "João",
    telefoneTutor: "9101-1234",
    nomePet: "Pecos",
    especie:"gato",
    anoNascimento: 2002,
    idade: 21,
    medicamentos: [],
    castrado: true,
    imagem: "cat-01.jpg"
}

const pet3 = {
    nomeTutor: "Luiza",
    telefoneTutor: "9101-9087",
    nomePet: "Flor",
    especie:"gato",
    anoNascimento: 2022,
    idade: 1,
    medicamentos: ["predsin"],
    castrado: false,
    imagem: "cat-02.jpg"
}
const clientes = []
clientes.push(pet1, pet2, pet3)



let termo = "Flor"

const arrayResultadoPesquisa= []

const fazPesquisa = (arrayObjetos, termo) => {    
    for (let objeto of arrayObjetos){
        for (let[key, value] of Object.entries(objeto)){
            if(value === termo){
                arrayResultadoPesquisa.push(objeto)
            }
        }   
    }   
}

const mostraResultadoPesquisa = (arrayResultadosPesquisa) =>{
    for (let resultadoPesquisa of arrayResultadosPesquisa){
            for (let[key, value] of Object.entries(resultadoPesquisa)){
                console.log(`${key} : ${value}`)
            }
    }
}

const resultadoNaoEncontrado = () => {
    if(arrayResultadoPesquisa.length === 0){
        alert("bananinha")
    }
    console.log(arrayResultadoPesquisa)     
}


fazPesquisa(clientes, termo)
mostraResultadoPesquisa(arrayResultadoPesquisa)
resultadoNaoEncontrado()





//Criando elementos no DOM

const criandoLiElementos = (clientes) =>{
    for (let cliente of clientes[0]){
        for (let[key, value] of Object.entries(cliente)){
            adicionalista(key, value)
        }
    }
}

function adicionalista(key , value){
    const novaLi = document.createElement("li");
    const novoConteudoLista = document.createTextNode(`${key} : ${value}`);
    novaLi.appendChild(novoConteudoLista);
    const divAtual = document.getElementById("ul1");
    divAtual.insertAdjacentElement('afterbegin', novaLi);
}

// criandoLiElementos(clientes)

const criandoSections = () =>{
        const novaSections = document.createElement("section");
        const conteudoSection = document.createTextNode("oi");
        novaSections.appendChild(conteudoSection);
        const divAtual = document.getElementById("sections");
        divAtual.insertAdjacentElement('afterbegin', novaSections)      
}
// criandoSections()
// criandoSections()
// criandoSections()