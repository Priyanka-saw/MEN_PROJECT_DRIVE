const express = require('express')
const router = express.Router();


// user/test

router.get('/register', (req, res) => {
    res.render("register")
})

router.post('/register', (req, res) => {
    console.log(req.body)
    res.send('uer register')
})






module.exports = router