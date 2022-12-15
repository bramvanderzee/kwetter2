require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const findOrCreate = require('mongoose-findorcreate')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const app = express()

const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL
const MONGO_USER = process.env.MONGO_USER
const MONGO_PASS = process.env.MONGO_PASS
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

const connstring = MONGO_URL.replace('<username>', MONGO_USER).replace('<password>', MONGO_PASS)

mongoose.connect(connstring)

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    googleId: String
})

const User = new mongoose.model('User', userSchema)

passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:3000/auth/google/home',
    }, (accessToken, refreshToken, profile, cb) => {
        () => User.findOrCreate({ googleId: profile.id}, (err, user) => {
            return cb(err, user)
        })
    }
))

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/pages/index.html')
})

app.get('/auth/google', passport.authenticate('google', {
    scope: ["profile"]
}))

app.get('/auth/google/home', passport.authenticate('google', {
    failureRedirect: '/'
}), function (req, res) {
    res.send('You are logged in!')
})

app.listen(PORT || 3000)
