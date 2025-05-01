const chai = require('chai');
const expect = chai.expect;
const request = require('supertest')



let statusCode = 200;
let failedstatusCode = 404;

let methode = 'get';
let url = 'https://fakestoreapi.com';
let endpoint = '/products'


describe('success', function () {
    context('hit api login', function () {
        it('statusCode 200', async function () {
            const response = await request(url).get(endpoint);
        
            expect(response.statusCode).to.eq(200);
            expect(response.body[0].id).to.eq(1);

        });
        it ('failed', async function () {
            const response = await request(url).get(`${endpoint}s`)
          expect(response.statusCode).to.eq(404);
        });
    })
    
});