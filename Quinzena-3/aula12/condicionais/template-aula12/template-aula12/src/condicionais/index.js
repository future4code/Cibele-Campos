//Exercícios de interpretação de código

/*1.

A partir do número digitado pelo usuário será verificado se é par ou ímpar.
Isso será feito testando se o resto da divisão por 2 é igual ou não a 0.
Será impresso no console "passou no teste" se o número for par.
A mensagem será "Não passou no teste" se o número for ímpar
*/     

/*2. 

a. A partir do nome da fruta que será digitada pelo usuário, será apresentada no console uma mensagem com o seu preço, caso ela esteja na lista.
b. O preço da fruta Maçã é R$ 2.25
c. Daria erro ou retornaria algo como empty ou undefined
*/

/*3.
    
a. Está solicirando que o usuário entre com um valor. O valor informado pelo usuário será armazenado em uma variável do tipo Number.
b. Por 10 ser maior que 0, irá imprimir no console a mensagem "Esse número passou no teste". 
   Como não foi definida uma mensagem para números menores que zero, não retornará nenhuma mensagem.
c. Haverá um erro, pois a variável foi declarada dentro do bloco e utilizada foro do escopo.
*/
    
//Exercícios de escrita de código

/*4.

let idadeUsuario = Number(prompt("Digite abaixo a sua idade:"))
    if (idadeUsuario >= 18){
        console.log("Você pode dirigir")
    } else {
        console.log("Você não pode dirigir")
    }  
*/

/*5.

let turnoDeEstudo = prompt("Em qual turno você estuda? (Considere M se for matutino, V se for vespertino ou N se for noturno")

    if (turnoDeEstudo === "M"){
        console.log("Bom dia!")
    } else if (turnoDeEstudo === "V"){
        console.log("Boa tarde!")
    } else if (turnoEstudo === "N"){
        console.log("Boa noite!")
    } else {
        console.log("Considere apenas M, V ou N")
    }
*/
        

/*6.

let turnoDeEstudo = prompt("Em qual turno você estuda? (Considere M se for matutino, V se for vespertino ou N se for noturno")

    switch (turnoDeEstudo){
         case "M":
           console.log("Bom dia!")
           break
         case "V":
           console.log("Boa tarde!")
           break
         case "N":
           console.log("Boa noite!")
           break
         default:
            console.log("Considere apenas M, V ou N")
            break
       }  
*/

/*7.
let generoDoFilme = prompt("Qual gênero de filme irá assistir?")
let precoDoIngresso = prompt("Qual o preço do ingresso?")

    if (generoDoFilme === "fantasia" && precoDoIngresso < 15){
        console.log("Bom filme!)
    } else {
        console.log("Escolha outro filme :(")
    } 
*/