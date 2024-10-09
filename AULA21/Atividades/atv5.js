let nota1 = Number(prompt ('Insira a primeira nota do aluno:'))
let nota2 = Number(prompt ('Insira a segunda nota do aluno:'))
let med = (nota1 + nota2) / 2
let resposta = med >= 6 ? 'foi aprovado.' : 'foi reprovado.'


alert(`A média do aluno é ${med}, e ${resposta}`)