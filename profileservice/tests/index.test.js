const MONGO_USER = require('../index')
const supertest = require('supertest')

test('has mongo username', () => {
    console.log(MONGO_USER)
    expect(MONGO_USER).toBe('bramvanderzee')
})
