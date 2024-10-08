let nome = prompt('Qual é o seu nome?');
let idade = Number(prompt ('Digite sua idade:'));
let genero = prompt('Qual é o seu gênero?')

if (idade >= 18) {
    idade = true
    alert(`Olá ${nome}, você é do gênero ${genero} e é maior de idade! |${idade}|`)
} else {
    idade = false
    alert(`Olá ${nome}, você é do gênero ${genero} e é menor de idade! |${idade}|`)
}