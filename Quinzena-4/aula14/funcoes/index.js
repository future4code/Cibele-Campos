//Exercícios de interpretação de código

/*1.

a. 10 e 50 
b. Não apareceria nada.
*/

/*2.

a. Caio e Darvas
b. Amanda e Caio
*/

/*3.

É criado um novo array onde verifica-se a existência de números pares, se eles existirem, serão elevados a 2.
Um nome melhor seria arrayParesAoQuadrado.
*/

//Exercícios de escrita de código

/*4.

a.
function minhaApresentacao(){
console.log("Eu sou a Cibele, tenho 28 anos, moro em São Paulo e sou estudante.")
}
minhaApresentacao()

b.

function infoUsuario(nomeUsuario, idadeUsuario, cidadeUsuario, ocupacaoUsuario){
  nomeUsuario = prompt("Qual o seu nome?")
  idadeUsuario = prompt("Qual a sua idade?")
  cidadeUsuario = prompt("Qual o nome da sua cidade?")
  ocupacaoUsuario = confirm("Você é estudante? - sim = ok e não = cancel")
  
  
        if (ocupacaoUsuario === true){
            ocupacaoUsuario = "sou estudante"
        } else {
            ocupacaoUsuario = "não sou estudante"
        }
        let apresentacaoUsuario = "Olá, eu sou " + nomeUsuario + ", tenho " + idadeUsuario + ", moro em " + cidadeUsuario + " e " + ocupacaoUsuario + "."
        
    console.log(apresentacaoUsuario)
  
}

infoUsuario()
*/

/*5.

a.
function somaNumero(num1, num2){
    let soma = num1 + num2
    console.log(soma)
    return soma
    }
    
    somaNumero(2,5)

b.
 function compararNumeros(num1, num2){
     num1 = Number(prompt("Digite um número abaixo: "))
     num2 = Number(prompt("Digite outro número abaixo:"))
     
     if (num1 > num2){
      resultado = num1 + " é maior que " + num2
      console.log(resultado)
  
    } else if (num1 === num2) {
      resultado = num1 + " é igual a " + num2
      console.log(resultado)
       
    } else {
      resultado = num1 + " é menor que " + num2
      console.log(resultado)
     }
}
compararNumeros()

c.
function repetirFrase (frase){
  frase = prompt("Digite uma frase abaixo:")
    for (i = 0 ; i < 10 ; i++ ){
      console.log(frase)
    }
}

repetirFrase("Repetir essa frase 10 vezes")
*/

/*6.
//const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

a.
function quantidadeElementos(){
 let contagem = array.length
 for(let i = 0; i < array.length; i++){
  }
  console.log(contagem)
}

quantidadeElementos()
*/

/*
b.
function compararNumeros(resultado){
resultado = Number(prompt("Insira um número. Par = true Impar = false"))
  if(resultado % 2 == 0){
    console.log(true)
}
  else{
    console.log(false)
     }
 }

compararNumeros()
*/

/*
c.

function compararNumeros(){
let contarPares = 0
  const resultado = array
     for(let num of resultado){
         if(num % 2 == 0)
             contarPares ++
     }
     console.log("Tem " +contarPares+ " números pares nesse array")
 }

 compararNumeros(array)
 */

/*
d.

function compararNumeros(resultado){

  if(resultado % 2 == 0){
    console.log(true)
}
  else{
    console.log(false)
     }
 }

compararNumeros()

*/