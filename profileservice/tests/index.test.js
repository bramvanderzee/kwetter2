const index = require('../index.js')
const supertest = require('supertest')

test('has mongo username', () => {
    console.log(index.MONGO_USER)
    expect(index.MONGO_USER).toBe('bramvanderzee')
})
