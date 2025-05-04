const json = require('./data.json')

console.log(json)

// let data = JSON.stringify(json);
// let dataBaru = JSON.parse(data);

// console.log('typeof json')
// console.log(typeof json)
// console.log('typeof data')
// console.log(typeof data)
// console.log('typeof dataBaru')
// console.log(typeof dataBaru)


// dapat respon dari API dalam bentuk string
// kita ubah ke object
// kita handle datanya
// kita balikin ke string
// kirim request API

// let a = json;
let a = {...json};
// let a = JSON.parse(JSON.stringify(json));
a.email = 'emailBaru@gmail.com';
a.userData.nama = ' aulia'

console.log(a)
console.log(json)
