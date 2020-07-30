const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')

const apenasChineses = funcionario => funcionario.pais === 'China'
const apenasMulheres = funcionaria => funcionaria.genero === 'F'
const menorSalario = (funcAnterior, funcAtual) => {
    return funcAnterior.salario < funcAtual.salario ? funcAnterior : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data

    console.log(funcionarios
        .filter(apenasChineses)
        .filter(apenasMulheres)
        .reduce(menorSalario))
})
