const express = require('express')
const router = express.Router()
const Profile = require('./models/profile')

router.get('/profile', async (req, res) => {
    const profiles = await Profile.find()
    res.send(profiles)
})

router.post('/profile', async (req, res) => {
    const profile = new Profile({
        title: req.body.title,
        content: req.body.content,
        userId: req.body.userId
    })
    await profile.save()
    res.send(profile)
})

router.delete('/profile/:id', async (req, res) => {
    Profile.remove({
        _id: req.params.id
    }, function (err, profile) {
        if (err)
            return console.error(err)
        res.status(200).send()
    })
})

module.exports = router
