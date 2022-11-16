const index = require('../index.js')
const supertest = require('supertest')

test('has mongo username', () => {
    console.log(index)
    expect(index).toBe('bramvanderzee')
})
