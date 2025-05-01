const chai = require('chai');
const expect = chai.expect;
// const assert = chai.should;
const request = require('supertest')



let statusCode = 200;
let failedstatusCode = 404;

let methode = 'get';
let url = 'https://fakestoreapi.com';
let endpoint = '/products'
let body = {
    "id": 0,
    "title": "string",
    "price": 0.1,
    "description": "string",
    "category": "string",
    "image": "http://example.com"
  }

describe('success', function () {
    context('hit api get products', function () {
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
    context('hit api create products', function () {
        it('success', async function () {
            const response = await request(url).post(endpoint).send(body);
            expect(response.statusCode).to.eq(200);
            expect(response.body.title).to.eq(body.title);
            
        });


        it('gagal', async function () {
            // let wrongBody = {... body};
            // wrongBody.title = 123123;
            let wrongBody = {
                id: 21,
                title: 123123,
                price: 0.1,
                description: 'string',
                image: 'http://example.com',
                category: 'string'
              }

            const response = await request(url).post(endpoint).send(wrongBody);
            console.log(response.body);
            expect(response.statusCode).to.eq(400);
            
        })
    })
    
});