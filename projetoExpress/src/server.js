const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dataBase = require('./dataBase')

app.use(bodyParser.urlencoded({ extended: true }))

//Selecionar todos os produtos
app.get('/produtos', (req, res, next) => {
    res.send(dataBase.getProdutos())
})

//Selecionar produto por id
app.get('/produtos/:id', (req, res, next) => {
    res.send(dataBase.getProduto(req.params.id))
})

//Inserir produto
app.post('/produtos', (req, res, next) => {
    const produto = dataBase.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

//Atualizar produto
app.put('/produtos/:id', (req, res, next) => {
    const produto = dataBase.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

//Deletar produto
app.delete('/produtos/:id', (req, res, next) => {
    const produto = dataBase.deleteProduto(req.params.id)
    res.send(produto) 
})

app.listen(porta, () => {
    console.log(`Servidor está sendo executado na porta ${porta}.`)
})