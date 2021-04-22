//Exercícios de interpretação de código

/*1.

Será feita uma repetição, a fim de atingir o valor 5, mas como foi informado o valor i para a variável valor, será retornado 10.
*/

/*2.

a. Serão impressos os números maiores que 18, que compõe o array lista.
b. Não é suficiente.
*/

//Exercícios de escrita de código
/*3.

a.
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
    for (let i = 0; i < arrayOriginal.length; i++)
    {
        console.log(arrayOriginal[i])
    }
*/

/*

b.
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for (let i = 0; i < arrayOriginal.length; i++)
    {
        console.log(arrayOriginal[i] / 10)
    }
*/

/*

c.
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let arrayPares = []
for (let i = 0; i < arrayOriginal.length; i++)
    {
    if(arrayOriginal[i] % 2 === 0)
    {
        arrayPares.push(arrayOriginal[i])
    }
        console.log(arrayPares[i])
    }
}
*/

/*

d.
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let arrayMensagens = [];
let mensagem = "";

for (let i = 0; i < arrayOriginal.length; i++) 
{
    mensagem = "O elemento do índex" +i+ "é" +arrayOriginal[i];
    arrayMensagens.push(mensagem);
}

console.log(arrayMensagens);
*/

/*

e.
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maiorNumero = 130
let menorNumero = 21

for (let i = 0; i < arrayOriginal.length; i++)
{
    if(arrayOriginal[i] > maiorNumero){
        maiorNumero = arrayOriginal[i]
    }
}
for (let i = 0; i < arrayOriginal.length; i++)
{
    if(arrayOriginal[i] < menorNumero){
        menorNumero = arrayOriginal[i]
    }
}
console.log("O maior número é" maiorNumero ", e o menor é" menorNumero.)
*/