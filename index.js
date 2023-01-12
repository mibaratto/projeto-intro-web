//Aplicação Web para consultorio veterinario - 
// Semana 1 - exercício 1
// const nomeTutor;
// const telefoneTutor;
// const emailTutor;
// const especie;
// let idade;
// let dataNascimento;
// const raca;
// const carteiraVacinacao;
// const medicamentos;
// const castrado;

// SEMANA 1 - exercício 2
// const nomeTutor1 = "Maria"
// let telefoneTutor1 = "9101-3456"
// const nomePet1 = "Pudim";
// const especie1 = "cachorro";
// const anoNascimento1 = 2012;
// let idade1 = 2023 - anoNascimento1;
// let medicamentos1 = ["predsin", "omeprazol", "dipirona"]
// let castrado1 = true

// const nomeTutor2 = "João"
// let telefoneTutor2 = "9101-1234"
// const nomePet2 = "Pecos";
// const especie2 = "gato";
// const anoNascimento2 = 2002;
// let idade2 = 2023 - anoNascimento2;
// let medicamentos2 = []
// let castrado2 = false

// const nomeTutor3 = "Luiza"
// let telefoneTutor3 = "9101-9087"
// const nomePet3 = "Flor";
// const especie3 = "gato";
// const anoNascimento3 = 2010;
// let idade3 = 2023 - anoNascimento3;
// let medicamentos3 = ["omeprazol"]
// let castrado3 = true


// // Semana 1 - exercício 3
// let mediaIdade = (idade1 + idade2 + idade3) / 3
// console.log("Média de idade dos pets é:" + mediaIdade)

// // Semana 1 - exercício 4
// let verificaCastrados = castrado1 && castrado2 && castrado3;
// console.log(verificaCastrados)

// // Semana 1 - exercício 5


// Semana 1 - exercício 6
// console.log(`Nome do pet: ${nomePet1.toUpperCase()}
// Nome do tutor: ${nomeTutor1}
// telefone: ${telefoneTutor1}
// idade do pet:${idade1}
// medicamentos: ${medicamentos1}`)

// console.log(`Nome do pet: ${nomePet2.toUpperCase()}
// Nome do tutor: ${nomeTutor2}
// telefone: ${telefoneTutor2}
// idade do pet:${idade2}
// medicamentos: ${medicamentos2}`)

// console.log(`Nome do pet: ${nomePet3.toUpperCase()}
// Nome do tutor: ${nomeTutor3}
// telefone: ${telefoneTutor3}
// idade do pet:${idade3}
// medicamentos: ${medicamentos3}`)



// SEMANA 2 - exercício 1

const pet1 = {
    nomeTutor: "Maria",
    telefoneTutor: "9101-3456",
    nomePet: "Pudim",
    especie:"cachorro",
    anoNascimento: 2012,
    idade: 10,
    medicamentos: ["predsin", "omeprazol", "dipirona"],
    castrado: true
}

const pet2 = {
    nomeTutor: "João",
    telefoneTutor: "9101-1234",
    nomePet: "Pecos",
    especie:"gato",
    anoNascimento: 2002,
    idade: 21,
    medicamentos: [],
    castrado: true
}

const pet3 = {
    nomeTutor: "Luiza",
    telefoneTutor: "9101-9087",
    nomePet: "Flor",
    especie:"gato",
    anoNascimento: 2022,
    idade: 1,
    medicamentos: ["predsin"],
    castrado: false
}
// SEMANA 2 - exercício 2

// // SEMANA 2 - exercício 4 e 5

// const petsCastrados = []

// for (const pet of clientes){
//     if (pet.castrado === true){
//         petsCastrados.push(pet)
//     }else{
//         // alert(`O pet ${pet.nomePet} ainda não foi castrado`)
//     }
// }
// console.log(petsCastrados)

// SEMANA 3 - exercício 1
// let listaMedicamentos = pet1.medicamentos.join(", ")


// console.log(`Nome do pet: ${nomePet1.toUpperCase()}
// Nome do tutor: ${nomeTutor1}
// telefone: ${telefoneTutor1}
// idade do pet:${idade1}
// medicamentos: ${listaMedicamentos}`)


// SEMANA 3 - exercício 2

// for (let cliente of clientes){
//     console.log(cliente)
// }
// for(let cliente of clientes){
//     for (let chave in cliente){
//         console.log(`${chave}: ${cliente[chave]}`)
//     }
//     console.log("----------------------");
// }

// const myArray = [1, 2, 3, 4]
// console.log(myArray.toString())

// for (let client of clientes){
//     for (let[key, value] of Object.entries(client)){
//         console.log(`${key} : ${value}`)
//     }
//     console.log("*******----------------------");
// }

// console.log(clientes)
const clientes = []
// SEMANA 2 - exercício 3
clientes.push(pet1, pet2, pet3)
// console.log(clientes)

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
        console.log("*******----------------------");
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