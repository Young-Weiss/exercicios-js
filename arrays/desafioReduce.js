const alunos = [
    { nome: 'João', nota: 7.3, bolsista: true},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Fernando', nota: 9.8, bolsista: true},
    { nome: 'Ana', nota: 8.7, bolsista: false}
]

// Desafio 1: Todos os alunos são bolsistas?

const apenasBolsas = aluno => aluno.bolsista
const alunosBolsa = alunos.map(apenasBolsas)

console.log(alunosBolsa.reduce((alunoAnterior, alunoAtual) => alunoAnterior && alunoAtual))

// Desafio 2: Algum aluno é bolsista?

console.log(alunosBolsa.reduce((alunoAnterior, alunoAtual) => alunoAnterior || alunoAtual))
