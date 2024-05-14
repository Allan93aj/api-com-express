const fs = require("fs")

function getTodosFavoritos(){
    return JSON.parse(fs.readFileSync("./favoritos.json"))
}

// DELETAR LIVRO DO FAVORITO
function deletaFavoritoPorId(id){
    const livros = JSON.parse(fs.readFileSync("faviritos.json"))
    
    const livroFiltrado = livros.filter(livro => livro.id !== id)
    
    fs.writeFileSync("./favoritos.json", JSON.stringify(livroFiltrado))

}

function insereFavorito(id){
    const livros = JSON.parse(fs.readFileSync("./livros.json"))

    const faviritos = JSON.parse(fs.readFileSync("./favoritos.json"))

    const livrosInseridos = livros.find(livro => livro.id === id)

    const novaListaDeFavoritos = [...faviritos, livrosInseridos]

    fs.writeFileSync("./livros.json", JSON.stringify(novaListaDeFavoritos))
}



module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorId,
    insereFavorito
}