const request = require('supertest')

describe('coba header', function () {
    it('login Apicheap', async function () {
        
    
    let header= {
        'x-access-token': '321d6a221f8926b5ec41ae89a3b2ae7b'
    }
    let parameter = {
        'origin' : "MOW",
        'destination': 'HKT',
        'depart_date' : '2025-11',
        'return_date' : '2025-11',
        'page' : '1',
        'currency' : 'RUB'

    }
    // let id = [123,124,125]
    let url = 'https://api.travelpayouts.com';
    let endpoint = '/v1/prices/cheap'

    // let newEndpoint = `${endpoint}/$[0]`
    // console.log(`${url}${endpoint}`);

    const response = await request(url).get(endpoint).set(header).query(parameter);
    console.log(response.body);
});
});