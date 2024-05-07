const { Router } = require("express")
const {getLivros, getLivrosId, postLivro, patchLivro, deleteLivro} = require("../controladores/controladores") 

const router = Router()

// GET 
router.get('/', getLivros)

// ROTA ESPECIFICA PARA ID COM GET
router.get('/:id', getLivrosId)

// POST 
router.post('/', postLivro)

// PATCH
router.patch('/:id', patchLivro)

// DELETE
router.delete('/:id', deleteLivro)


module.exports = router