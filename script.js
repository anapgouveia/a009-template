/*const nome = prompt("Qual o seu nome?")
const cor = prompt("Qual a sua cor favorita?")

//por cocatenação +
const fraseCorFavorita = "A cor favorita da "+nome+" é "+cor
console.log(fraseCorFavorita)

//por template ``
const fraseTemplateString = `A cor favorita da ${nome} é ${cor}`


//alterando a exibiçao de string
const citacao = prompt("Escrever uma citação.")
const fraseComCitacao = "\"" + citacao + "\""
console.log(fraseComCitacao)

console.log(`Nome: ${nome} \nCor favorita: ${cor}`)

//Manipulando a string

console.log(`Nome: ${nome.toUpperCase()} \nCor Favorita: ${cor}`)

console.log(nome.length)

//checar se o nome da pessoa possui letra A
const possueA = nome.includes("a")
console.log(possueA)*/

//EXERCICIO DE FIXAÇAO
const nomeDoUsuario = prompt("Qual o seu nome?")
const email = prompt("Qual o seu e-mail?")
console.log(`O e-mail ${email} foi cadastrado com sucesso. Boas vindas, ${nomeDoUsuario}`)
console.log(nome.length)

//trocar a letra R por L
console.log(`O e=mail ${email} foi cadastrado com sucesso. Boas vindas, ${nomeDoUsuario}`.replaceAll("r", "l"))

//Saber se tem @, usa o método includes
email.includes="@"
console.log(email.includes)
//const temArroba = email.includes("@")
//console.log(temArroba)