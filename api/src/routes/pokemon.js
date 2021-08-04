const {Router} = require('express');
const getAllPokemon = require('../Controllers/allPokemon');

const router = Router();

module.exports = router

router.get('/', async (req, res, next) => {
    const { name } = req.query
    const pokemonTotal = await getAllPokemon();
    try {
        if(name) {
            let pokemonName = await pokemonTotal.filter(poke => poke.name.toLowerCase().includes(name.toLowerCase()));
            if(pokemonName.lengthl) {
                res.status(200).send(pokemonName)
            } else {
                res.status(400).send('No se encontró el personaje')
            }
        } else {
            res.status(200).send(pokemonTotal)
        }
    } catch(err) {
        return next(err)
    }
});
