const express = require('express');
const router = express.Router();
const app = express()
const service = require('../service/user')
app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))


router.post('/register', register)
router.post('/login', login)

module.exports = router;

async function register(req, res, next) {
    try {
        await service.create(req.body)
        res.redirect('./login')
    } catch (e) {
        console.log("2")
        next(e)
    }
}
async function login(req, res, next) {
    try {
        console.log(req.body)
        let resp = await service.authenticate(req.body)
        res.json(resp)
    } catch (e) {
        console.log("3")
        next(e)
    }
}