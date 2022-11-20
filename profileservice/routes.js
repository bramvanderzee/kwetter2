const express = require('express')
const router = express.Router()
const Profile = require('./models/profile')

router.get('/profile', async (req, res) => {
    const profiles = await Profile.find()
    res.send(profiles)
})

router.post('/profile', async (req, res) => {
    console.log(req.body)
    const profile = new Profile({
        title: req.body.title,
        content: req.body.content,
        userId: req.body.userId
    })
    await profile.save()
    req.send(post)
})

module.exports = router
