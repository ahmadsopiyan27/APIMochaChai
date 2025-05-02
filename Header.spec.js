const request = require('supertest')

describe('coba header', async function () {
    let header= {
        'x-access-token': '321d6a221f8926b5ec41ae89a3b2ae7b'
    }
    let parameter = {
        'origin' : "MOW",
        'destination': 'HKT',
        'depart_date' : '2025-04',
        'return_date' : '2025-05'

    }
    let url = 'https://api.travelpayouts.com';
    let endpoint = '/v1/prices/monthly'

    const response = await request(url).get(endpoint).set(header).query(parameter);
    console.log(response.body);
})