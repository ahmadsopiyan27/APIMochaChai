let token

describe('testing hooks di mocha', function(){
    before(function(){
        console.log('before jalan disini');
        //bikin kodingan untuk getToken
        // token = balikanAPILogin
    });

    after(function(){
        console.log('after disini');
        //kodingan untuk screenshot
        // let a = 1;
    });

    beforeEach(function(){
        console.log('jalanin beforeEach');
    })

    afterEach(function(){
        console.log('jalanin afterEach');
    })

    describe('describe 1', function(){
        it('it 1', function () {
            let a = 1 ;
            });
        it('it 2', function () {
            let a = 1;
            
        });
        // before(function(){
        //     console.log('before di dalam describe');
    //     });

    //     beforeEach(function(){
    //         console.log('beforeEach di dalam describe');
        });

    //     afterEach(function(){
    //         console.log('afterEach di dalam describe');
    //     })

    //     it('it 1', function(){
    //         let a = 1;
    //     });
    
    //     it('it 2', function(){
    //         let a = 1;
    //     });
    // });

    // describe('describe 2', function(){
    //     it('it 2-1', function(){
    //         // console.log('it 1');
    //         let a = 1;
    //     });
    
    //     it('it 2-2', function(){
    //         // console.log('it 1');
    //         let a = 1;
    //     });
    });

