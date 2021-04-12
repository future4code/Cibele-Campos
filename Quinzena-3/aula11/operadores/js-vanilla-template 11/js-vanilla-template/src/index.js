/*Exercícios de interpretação de código
//1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

const bool1 = true
const bool2 = false
const bool3 = !bool2


let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)

console.log("e. ", typeof resultado)

//R: false - false - true - undefined
*/

/*
2. Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.
let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)

//R: Undefined - Null - 11 - 3 - [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13], 9
*/

/*
**Exercícios de escrita de código**
1. Faça um programa que:

a. Pergunte a idade do usuário
let idadeUsuario = prompt("Qual a sua idade?")

b. Pergunte a idade do seu melhor amigo ou da sua melhor amiga
let idadeBF = prompt("Qual a idade do seu/da sua melhor amigo/amiga?")

c. Imprima na tela a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (true ou false). Para isso, use a variável criada no item (b) para definir qual será a resposta.
let ageUser = Number(idadeUsuario)
let ageFriend = Number(idadeBF)

let compararIdade = ageUser > ageFriend
let diferencaIdade = ageUser - ageFriend


d. Imprima na tela a diferença de idade (não tem problema se sair um número negativo)
console.log("Sua idade é maior que a do seu(sua) amigo(a)?", compararIdade)
console.log("Você é ",diferencaIdade,"anos mais velho que seu(sua) amigo(a)")
*/

/*
2. Faça um programa que:

a. Peça ao usuário que insira um número par.
let numeroPar = prompt("Insira abaixo um número par:")

b. Imprima na tela o resto da divisão desse número por 2.
let numero = Number(numeroPar)
let restoDivisao = numero%2  
console.log("O resto da divisão desse número por 2 é:", restoDivisao)


c. Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
//Todo número par quando dividido por dois terá como resto zero. 

d. O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
//Número ímpar sempre terá valor diferente de zero.
*/

/*
3. Faça um programa, seguindo os passos:

a. Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
let listaDeTarefas = []

b. Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
let primeiraTarefa = listaDeTarefas.push = prompt("Cite a primeira tarefa que você precisa fazer hoje:")
let segundaTarefa = listaDeTarefas.push = prompt("Cite a segunda tarefa que você precisa fazer hoje:")
let terceiraTarefa = listaDeTarefas.push = prompt("Cite a terceira tarefa que você precisa fazer hoje:")

c. Imprima o array na tela
console.log("Essas são as suas principais tarefas do dia:", listaDeTarefas)

d. Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 
let tarefasRealizadas = prompt("Qual tarefa você já realizou até o momento? Informe 0,1 ou 2:")

e. Remova da lista o item de índice que o usuário escolheu.
listaDeTarefas.splice(tarefasRealizadas,1)

f. Imprima o array na tela
console.log("Você ainda tem as seguintes tarefas:", listaDeTarefas)
*/

/*
4. 4. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:
    O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

let nomeDoUsuario = prompt("Qual o seu nome?")
let emailDoUsuario = prompt("Qual o seu e-mail?")

console.log("O e-mail", emailDoUsuario, "foi cadastrado com sucesso!. Seja bem-vinda(o),",nomeDoUsuario,"!")
*/