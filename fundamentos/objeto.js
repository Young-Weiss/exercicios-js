const prod1 = {}
prod1.nome = "Celular Ultra Mega"  //Criano dinâmicamente
prod1.preco = 4999.9

prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

//maneira normal
const prod2 = {
    nome: 'Jaqueta de Couro',
    preco: 250.90
}

//JSON
'{"nome": "Jaqueta de Couro", "preco": 250.90}'

console.log(prod2)