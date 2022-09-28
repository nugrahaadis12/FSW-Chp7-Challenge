const express = require('express')
const passport = require('passport')
const jsonParser = require('body-parser').json()
const router = express.Router()
const apiController = require('../controllers/api')
const customMiddleware = require('../utils/customMiddleware')

router.post('/register', jsonParser, apiController.register)
router.post('/login', jsonParser, apiController.login)

//ROOM//
router.get('/roomList',
    passport.authenticate('jwt', { session: false }),
    apiController.roomList)

router.post('/create-room',
    jsonParser,
    passport.authenticate('jwt', { session: false }),
    customMiddleware.validateAdmin,
    apiController.createRoom)

router.delete('/deleteRoom/:id',
    passport.authenticate('jwt', { session: false }),
    customMiddleware.validateAdmin,
    apiController.deleteRoom)

//PLAYER//
router.get('/playerList',
    passport.authenticate('jwt', { session: false }),
    customMiddleware.validateAdmin,
    apiController.playerList)

router.delete('/deletePlayer/:id',
    passport.authenticate('jwt', { session: false }),
    customMiddleware.validateAdmin,
    apiController.deletePlayer)
module.exports = router



