const googleSearch = require('./script');
dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpict.com'
];

//grouping similar tests
describe('googleSearch',()=>{

    it('this is a test',()=>{
        expect('hello').toBe('hello')
    })
    
    it('is searching google',()=>{
        expect( googleSearch('testtest',dbMock)
        ).toEqual([])
        expect( googleSearch('dog',dbMock)
        ).toEqual(['dog.com','dogpict.com'])
    })
    
    it('work with undefined and null input',()=>{
        expect(googleSearch(undefined,dbMock)).toEqual([]);
        expect(googleSearch(null,dbMock)).toEqual([]);
    })
    
    it('doesnt return more than 3 matches',()=>{
        expect(googleSearch('.com',dbMock).length).toEqual(3);
    })
})
