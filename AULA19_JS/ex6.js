let isAluno = prompt('Você é um aluno? (sim/não)')

isAluno = isAluno.toLowerCase()

if (isAluno === 'sim') {
    isAluno = true
    alert(`Seja bem vindo! |${isAluno}|`)
} else {
    isAluno = false
    alert(`Vaza daqui! |${isAluno}|`)
}