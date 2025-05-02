const request = require('supertest')

describe('coba header', async function () {
    let header= {
        'x-access-token': '321d6a221f8926b5ec41ae89a3b2ae7b'
    }
    let url = 'https://api.travelpayouts.com';
    let endpoint = '/v1/prices/monthly'

    const response = await request(url).get(endpoint).set(header);
    console.log(response.body);
})