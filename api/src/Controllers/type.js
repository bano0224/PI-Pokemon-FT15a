const axios = require('axios')
const {POKEMON_TYPE_URL} = require('../constantes')
const {Type} = require('../db')

const addTypes = async () => {
    try{
        const pokeTypes = await axios.get(`${POKEMON_TYPE_URL}`)
        const typeResults = pokeTypes.data.results.map(type => {
            Type.findOrCreate({name: type.name})
        })
    return typeResults
    }catch(err) {  
        return err
    }
};



module.exports = addTypes;