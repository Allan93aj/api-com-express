const { getTodosLivros, getLivrosPorId, insereLivro, modificaLivro, deletarLivrosPorId} = require("../servicos/servicos")

// GET
function getLivros(req, res){
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
}

// GET por id
function getLivrosId(req, res){
    try {
        const id = req.params.id
        if(id && Number(id)){
            const livroId = getLivrosPorId(id)
            res.send(livroId)
        }else{
            res.status(422)
            res.send('ID inválido')
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
}

// POST
function postLivro(req, res){
    try {
        const livroNovo = req.body
        if(req.body.nome){
            insereLivro(livroNovo)
            res.status(201)
            res.send('Livro inserido com sucesso !!!')
        }else{
            res.status(422)
            res.send('O campo nome é obrigatório !!!')
        }
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

// PATCH
function patchLivro(req, res){
    try {
        const id = req.params.id
        if(id && Number(id)){
            const body = req.body
            modificaLivro(body, id)
            res.send('Item modificado com sucesso !!!')
        }else{
            res.status(422)
            res.send('ID inválido !!!')
        }
       
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

// DELETE
function deleteLivro(req, res){
    try {
        const id = req.params.id
        if(id && Number(id)){
        deletarLivrosPorId(id)
        res.send('Item deletado com sucesso !!!')
    } else {
        res.status(422)
        res.send('ID inválido !!!')
    }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivrosId,
    postLivro,
    patchLivro,
    deleteLivro
}