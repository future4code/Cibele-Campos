/* Exercícios de interpretação de código
//1- Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**

a = 10
b = 10
console.log(b)
//Será impresso o valor 10

b = 5
console.log(a, b)
//Serão impressos os valores 10,5
*/

/* 2-Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
a = 10
b = 20
c = a
b = c
a = b

console.log(a, b, c)
//Serão impressos os valores 10,10,10
*/



/*Exercícios de escrita de código
1- Construa um programa, seguindo os seguintes passos:*/

    //a) Declare uma variável para armazenar um nome, sem atribuir um valor.
    //let nomeUsuario

    //b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
    //let idadeUsuario 

    //c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
    //console.log(typeof nomeUsuario)
    //console.log(typeof idadeUsuario)

    //d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
    //Porque não foi atribuído nenhum valor
    
    //e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
    //let nomeUsuario = prompt ("Qual o seu nome?")
    //let idadeUsuario = prompt ("Qual a sua idade?")

    //f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
    //console.log(typeof nomeUsuario)
    //console.log(typeof idadeUsuario)
    //ambas são variáveis do tipo String (texto)

    //g) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu
    //console.log("Olá", nomeUsuario, "você tem", idadeUsuario, "anos")

/*    

// 2- Faça um programa que faça 5 perguntas para o usuário (pode ser criativo aqui). Imprima-as com as respostas no console da seguinte forma:
let primeiraInfo = prompt("Bolacha ou biscoito?")
console.log("1. Bolacha ou biscoito?", "Resposta:", primeiraInfo)

let segundaInfo = prompt("Capitu traiu ou não traiu Bentinho?")
console.log("2. Capitu traiu ou não traiu Bentinho?", "Resposta:", segundaInfo)

let terceiraInfo = prompt("Ross traiu Rachel?")
console.log("3. Ross traiu Rachel?", "Resposta:", terceiraInfo)

let quartaInfo = prompt("Blue French Horn ou Yellow Umbrella?")
console.log("4. Blue French Horn ou Yellow Umbrella?", "Resposta:", quartaInfo)

let quintaInfo = prompt("O Palmeiras tem mundial?")
console.log("5. O Palmeiras tem mundial?", "Resposta:", quintaInfo)

*/

/*

// 3- Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
let comidasFavoritas = ["Frango com creme de milho", "Lasanha", "Pizza", "Batata frita", "Strogonoff"]
    
//a) Imprima na tela o array completo
console.log(comidasFavoritas)

//b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
console.log("Essas são as minhas comidas favoritas:")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])                                            

//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista
let comidaUsuario = prompt ("Qual a sua comida preferida?")
console.log(comidasFavoritas[0])
console.log(comidasUsuario[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])  

*/

/*

// 4- Faça um programa que contenha um array com 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
let arrayPerguntas = ["Você estuda programação?","Você trabalha na área?","Você é frontend?"]

//a) Crie uma nova variável, contendo um array com as respostas. Utilize o tipo booleano para cada resposta.
let arrayRespostas = [true,false,true]

//b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:
console.log(arrayPerguntas[0],arrayRespostas[0])
console.log(arrayPerguntas[1],arrayRespostas[1])
console.log(arrayPerguntas[2],arrayRespostas[2])

*/