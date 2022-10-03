const server = require('../index.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

describe('Profile endpoint', () => {
    it('GET /profile should ...', async () => {
            expect(res.status).toEqual(200);
    });
});
