import MONGO_USER from '../index.js'
const supertest = require('supertest')

test('has mongo username', () => {
    console.log(MONGO_USER)
    expect(MONGO_USER).toBe('bramvanderzee')
})
