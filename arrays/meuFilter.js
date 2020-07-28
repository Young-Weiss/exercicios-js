Array.prototype.meuFilter = function(callback) {
    const novoArray = []
    for( i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            novoArray.push(this[i])
        }   
    }
    return novoArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true },
    {nome: 'iPad Pro', preco: 4199, fragil: true },
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.meuFilter(caro).meuFilter(fragil))