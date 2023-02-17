const express = require("express")
const router = express.Router()

const bcrypt = require('bcrypt')
const bcryptSalt = 10

const User = require('./../models/User.model')

router.post('/signup', (req, res) => {
    const {username, email, pwd, campus, course, image} = req.body

    User
    .findOne({username})
    .then( user => {
        if(user){
            res.status(400).json({code: 400, message: `Username ${username} already exists.`})
            return
        }

        const salt = bcrypt.genSaltSync( bcryptSalt )
        const hashedPassword = bcrypt.hashSync( pwd, salt )

        User
            .create({ ...req.body, password: hashedPassword})
            .then( () => res.status(200).json({code: 200, message: 'User created.'}))
            .catch( err => res.status(500).json({code: 500, message: `DB error while creating user.`}))
    })
    .catch( err => res.status(500).json({code: 500, message: `DB error while fetching user.`}))

})

router.post('/login', (req, res) => {

    const { username, pwd } = req.body
    // console.log(`Before, ${{...req.session}}`)

    User
        .findOne({ username })
        .then(user => {

            if (!user) {
                res.status(401).status(401).json({ code: 401, message: 'Username not registered' })
                return
            }

            if (bcrypt.compareSync(pwd, user.password) === false) {
                res.status(401).status(401).json({ code: 401, message: 'Incorect password' })
                return
            }

            req.session.currentUser = user
            res.json(req.session)
            // res.json(req.session.currentUser)
        })
        .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err }))
})


// router.get('/logout', (req, res) => {
//     req.session.destroy((err) => res.json({ message: 'Logout successful' }, err));
// })

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        res.json({ message: `Logout successful ` })});
})

router.post('/isLoggedIn', (req, res) => {
    req.session.currentUser ? res.json(req.session.currentUser) : res.status(401).json({ code: 401, message: 'Unauthorized' })
})






module.exports = router