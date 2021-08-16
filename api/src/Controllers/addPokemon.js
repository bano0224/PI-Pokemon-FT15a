const {Pokemon, Type} = require('../db');

const addPokemon = async (name, createInDb, hp, attack, defense, speed, height, weight, sprite, types) => {
    try{
        const addNewPokemon = await Pokemon.create({
            name: name,
            createdInDb: createInDb,
            hp: hp,
            attack: attack,
            defense: defense,
            speed: speed,
            heght: height,
            weight: weight,
            sprite: sprite,
        })
        console.log('ACÁ VA EL TYPE', types)
        const typeDb = await Type.findAll({
            where: {name: types}
        })
        
        await addNewPokemon.addType(typeDb)
        return addNewPokemon;
        
    } catch(err) {
        console.log(err)
    }
};

module.exports = addPokemon

