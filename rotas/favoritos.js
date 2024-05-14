const { Router } = require("express")
const {getFavoritos, postFavoritos, deleteFavoritos} = require("../controladores/favorito") 

const router = Router()

// GET 
router.get('/', getFavoritos)

// POST 
router.post('/', postFavoritos)

// DELETE
router.delete('/:id', deleteFavoritos)


module.exports = router