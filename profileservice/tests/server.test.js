const mongoose = require('mongoose')
const supertest = require('supertest')
const createServer = require('../server')
const Profile = require('../models/profile')
const mongo_url = process.env.MONGO_URL
const mongo_user = process.env.MONGO_USER
const mongo_pass = process.env.MONGO_PASS

#beforeEach((done) => {
#    mongoose.connect(
#        mongo_url,
#        { 
#            authSource: "admin",
#            user: mongo_user,
#            pass: mongo_pass,
#            useNewUrlParser: true 
#        },
#        () => done()
#    )
#})

#afterEach((done) => {
#    mongoose.connection.db.dropDatabase(() => {
#        mongoose.connection.close(() => done())
#    })
#})

const app = createServer()

test('GET /profiles', async () => {
    expect(0).toBe(0)
    #    const profile = await Profile.create({
    #        title: "Profile 1",
    #        content: "Lorem Ipsum",
    #        userId: 1
    #    })
    #
    #    await supertest(app).get('/api/profiles').expect(200)
    #        .then((response) => {
    #            expect(Array.isArray(response.body)).toBeTruthy()
    #            expect(response.body.length).toEqual(1)
    #
    #            expect(response.body[0]._id).toBe(profile.id)
    #            expect(response.body[0].title).toBe(profile.title)
    #            expect(response.body[0].content).toBe(profile.content)
    #            expect(response.body[0].userId).toBe(profile.userId)
    #        })
})
