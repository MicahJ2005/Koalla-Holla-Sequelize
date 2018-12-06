let app = require('../server');
let testServer = require('supertest');

describe('Test server routes', () => {
    test('lets see if we get our default app page', async () => {
        const response = await testServer(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toContain('root');
    });

    test('check the post route returns status 200', async() => {
        const response = await testServer(app).post('/koalla').send( {data: {
            name: 'John', 
            gender: 'male',
            age: 12,
            ready_to_transfer: false,
            notes: 'who cares'
        }});
        expect(response.statusCode).toBe(200);
    });

    // test('lets see if we get our Koallas', async () => {
    //     const response = await testServer(app).get('/koalla');
    //     expect('GET_KOALLAS', /json/).toBe(200);
    //     expect(response.text).toContain('root');
    // });

})