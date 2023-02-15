const express = require('express')
const router = express.Router()

const User = require("./../models/User.model")

router.get("/", (req, res) => {
    User
        .find()
        .sort({createdAt: -1})
        .then( response => setTimeout( () => res.json(response), 1000))
        .catch( err => res.status(500).json({code: 500, message: `Error fetching users: ${err}`}))
})

router.get('/details/:user_id', (req, res) => {
    const user_id = req.params.user_id
    User
        .findById(user_id)
        .then( response => res.status(200).json(response))
        .catch(err => res.status(500).json({code: 500, message: `Error fetching user with Id ${user_id}: ${err}`}))
})

router.post("/newUser", (req, res) => {
    const user = req.body
    User
        .create(user)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({code: 500, message: `Error creating user: ${err}`}))
})

router.put("/editUser/:user_id", (req, res) => {
    const user_id = req.params.user_id
    User
        .findByIdAndUpdate(user_id, req.body)
        .then(response => res.status(200).json(response))        
        .catch(err => res.status(500).json({code: 500, message: `Error updating user: ${err}`}))
})

module.exports = router