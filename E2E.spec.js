
// describe('e2e flow customer belanja', function(){
//     it('login')
//     it('search')
//     it('cart')
//     it('checkout')
//     it('orderData')
// })

//ngejalanin integration test
//ngejalanin e2e test

const request = require('supertest');
const chai = require('chai')
const expect = chai.expect;

let url = 'https://restful-booker.herokuapp.com';
let endpoint = '/booking'
let body = {
    "firstname" : "ahmad",
    "lastname" : "sofiyan",
    "totalprice" : 9000,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2023-01-01",
        "checkout" : "2023-01-01"
    },
    "additionalneeds" : "Breakfast"
}

let header = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

let bookingId

describe('nyoba e2e', async function(){
    it('create Booking', async function(){
        this.timeout(600000);

        const response = await request(url).post(endpoint).set(header).send(body);

        expect(response.statusCode).to.equal(200);
        expect(response.body.booking.firstname).to.equal(body.firstname);

        bookingId = await response.body.bookingid;
    });

    it('get booking', async function(){
        this.timeout(300000);

        let newEndpoint = `${endpoint}/${bookingId}`;
        const response = await request(url).get(newEndpoint).set(header)
        
        console.log(response.statusCode);
        console.log(response.body);
    })
})

// catetan untuk development
// pastiin kodingannya jalan
// responnya udah bener
// rapih2, variablenya klo sama disatuin
// kalau bisa dipisah file, pisah aja, data di taruh .json atau .env