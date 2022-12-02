/*
RECEITAS
titulo/nome - string
Ingredientes - lista strings
Modo de preparo - lista strings
Tempo de preparo - number
glutemfree - bolleano
lactoseFree - boleano
vegetariano -boleano
*/
//RECEITA 1----------------------------------
const receita1 = {
    titulo: "Geleia de figo e vinho tinto",
    ingredientes: ["1 ½ xícara (chá) de figos secos (cerca de 250 g)", "1 xícara (chá) de vinho tinto", "1 xícara (chá) de água","2 colheres (sopa) de açúcar", "1 canela em rama", "1 anis-estrelado"],
    modoPreparo: [
        "1. Numa tábua, corte e descarte os cabinhos dos figos. Fatie cada figo em tiras e as tiras em cubinhos. Transfira para uma panela pequena.",
        "2. Adicione à panela a água, o vinho e o açúcar. Junte a canela e o anis estrelado. Misture e leve para cozinhar em fogo médio até ferver.",
        "3. Assim que ferver, abaixe o fogo e coloque a tampa entreaberta. Deixe cozinhar por cerca de 30 minutos, mexendo de vez em quando - a cada mexida, pressione os figos levemente com as costas da colher.",
        "4. Desligue o fogo, retire a canela e o anis-estrelado. Com as costas da colher, amasse um pouco mais os figos ainda quentes - a geleia deve ficar com pedacinhos da fruta.",
        "5. Com uma concha, transfira a geleia ainda quente para potes de vidro esterilizados, deixando cerca de 2 cm até a tampa livre. Feche o pote com a geleia quente para formar vácuo. Essa geleia é ótima para comer com queijos."
    ],
    tempoPreparoMinutos: 60,
    glutenFree: true,
    lactoseFree: true,
    vegetariono: true
}

///RECEITA 2----------------------------------
const receita2 = {
    titulo: "Mimosa",
    ingredientes: ["1 parte de caldo de laranja natural coado", "1 parte de espumante"],
    modoPreparo: [
        "1. Antes de preparar o drinque, leve o suco de laranja e o espumante para a geladeira por pelo menos 30 minutos, ou até gelar. Se quiser, gele também uma taça para champanhe.",
        "2. Incline levemente a taça e preencha com espumante até a metade - esta posição inclinada evita que a bebida espume em excesso. Complete com o suco de laranja e sirva a seguir.",
    ],
    tempoPreparoMinutos: 15,
    glutenFree: true,
    lactoseFree: true,
    vegetariono: true

}

///RECEITA 3----------------------------------
const receita3 = {
    titulo: "Ovos Beneditinos",
    ingredientes: ["100 g de manteiga", "1 gema", "½ colher (sopa) de vinagre ", "sal e pimenta-do-reino moída na hora a gosto"],
    modoPreparo: [
        "1. Leve ao micro-ondas uma tigela com a manteiga para derreter. Reserve.",
        "2. Numa panelinha, coloque cerca de dois dedos de água, leve ao fogo médio e desligue quando começar a ferver.",
        "3. Junte a gema e o vinagre numa tigela média e mexa com um batedor de arame para incorporar. Adicione 1 colher (sopa) da água aquecida na mistura de gema e bata bem. Encaixe a tigela na panelinha com água fervente para fazer um banho-maria.",
        "4. Bata vigorosamente até a mistura espumar. Junte a manteiga derretida aos poucos, batendo sempre. De vez em quando, coloque o dedo na tigela para checar a temperatura do molho (precisa estar quente). Se esfriar, ligue novamente o fogo, mas sem deixar a água do banho-maria ferver (para não correr o risco de cozinhar a gema e talhar o molho). ",
        "5. Quando o molho encorpar, tire do banho-maria e tempere com sal e pimenta-do-reino a gosto. Reserve."
    ],
    tempoPreparoMinutos: 30,
    glutenFree: false,
    lactoseFree: false,
    vegetariono: false
}
//-------------------------------------------

// const mediaTempoMinutos = (tempoPreparoMinutos1 + tempoPreparoMinutos2 + tempoPreparoMinutos3)/3
// console.log(`Media de tempo de preparo em minutos: ${mediaTempoMinutos} minutos`)

// const verificaGlutenFree = glutenFree1 && glutenFree2 && glutenFree3
// console.log(`Todas receitas são sem glutem? ${verificaGlutenFree}`)

// console.log(`${titulo1.toUpperCase()} | Glutenfree: ${glutenFree1}  |  Lactosefree: ${lactoseFree1}  |   Vegetariano: ${vegetariono1} \n
// Ingredientes: ${ingredientes1}\n
// Modo de preparo: ${modoPreparo1}\n
// Tempo de preparo: ${tempoPreparoMinutos1} minutos\n
// --------------------------------------------------`)

// console.log(`\n${titulo2.toUpperCase()} | Glutenfree: ${glutenFree2}  |  Lactosefree: ${lactoseFree2}  |   Vegetariano: ${vegetariono2} \n
// Ingredientes: ${ingredientes2}\n
// Modo de preparo: ${modoPreparo2}\n
// Tempo de preparo: ${tempoPreparoMinutos2} minutos\n
// --------------------------------------------------`)

// console.log(`\n${titulo3.toUpperCase()} | Glutenfree: ${glutenFree3}  |  Lactosefree: ${lactoseFree3}  |   Vegetariano: ${vegetariono3} \n
// Ingredientes: ${ingredientes3}\n
// Modo de preparo: ${modoPreparo3}\n
// Tempo de preparo: ${tempoPreparoMinutos3} minutos\n
// --------------------------------------------------`)

const receitas = []
receitas.push(receita1, receita2, receita3)
console.log(receitas)
//----------------------------------------------
const receitasGlutenFree = []

if (receita1.glutenFree) {
    receitasGlutenFree.push(receita1)
} else {
    alert(`${receita1.titulo} não foi adicionada`)
}

if (receita2.glutenFree) {
    receitasGlutenFree.push(receita2)
} else {
    alert(`${receita2.titulo} não foi adicionada`)
}

if (receita3.glutenFree) {
    receitasGlutenFree.push(receita3)
} else {
    alert(`${receita3.titulo} não foi adicionada`)
}
console.log(receitasGlutenFree)

