const index = require('../index.js')
const supertest = require('supertest')

test('has mongo username', () => {
    expect(index.MONGO_USER).toBe('bramvanderzee')
})
