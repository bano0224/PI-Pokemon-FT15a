const {Router} = require('express');
const {Type} = require('../db')


const router = Router()
module.exports = router


router.get('/', async(req, res) => {
    const resultType = await Type.findAll();
    res.send(resultType)
});