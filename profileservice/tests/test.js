const server = require('../index.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

describe('State endpoint', () => {
    it('GET /state should ...', async () => {
        const res = await requestWithSupertest.get('/state');
            expect(res.status).toEqual(200);
    });
});
