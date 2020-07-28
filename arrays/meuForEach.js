Array.prototype.meuForEach = function(callback) {
      for (let i = 0; i < this.length; i++) {
          callback(this[i], i, this)
      }
}

const aprovados = ["Fernando", "Manuela", "Henrique", "Pedro"]

aprovados.meuForEach((nome, indice) => console.log(`${indice + 1}) ${nome}`))