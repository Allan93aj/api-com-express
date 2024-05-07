const fs = require("fs")

function getTodosLivros(){
    return JSON.parse(fs.readFileSync("./livros.json"))
}

function getLivrosPorId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    
    const livroFiltrado = livros.filter(livro => livro.id === id)[0]
    return livroFiltrado 
}

function insereLivro(livroNovo){
    const livros = JSON.parse(fs.readFileSync("./livros.json"))
    
    const novaListaDeLivros = [...livros, livroNovo]
    fs.writeFileSync("./livros.json", JSON.stringify(novaListaDeLivros))
}

function modificaLivro(modicacoes, id){
    let livrosAtuais = JSON.parse(fs.readFileSync("./livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)
    const conteudoMudado = {...livrosAtuais[indiceModificado], ...modicacoes}

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("./livros.json", JSON.stringify(livrosAtuais))
}

function deletarLivrosPorId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    
    const livroFiltrado = livros.filter(livro => livro.id !== id)
    fs.writeFileSync("./livros.json", JSON.stringify(livroFiltrado))

}

  
module.exports = {
    getTodosLivros,
    getLivrosPorId,
    insereLivro,
    modificaLivro,
    deletarLivrosPorId
}