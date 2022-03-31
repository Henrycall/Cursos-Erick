const assert = require('assert')
const { ObeterPersonagens } = require('../01/service')
describe('Star Wars Testes' ,() => {
    this.beforeAll(() =>{
        const response = [{"name":"R2-D2","height":"96","mass":"32","hair_color":"n/a","skin_color":"white, blue","eye_color":"red","birth_year":"33BBY","gender":"n/a","homeworld":"https://swapi.dev/api/planets/8/","films":["https://swapi.dev/api/films/1/","https://swapi.dev/api/films/2/","https://swapi.dev/api/films/3/","https://swapi.dev/api/films/4/","https://swapi.dev/api/films/5/","https://swapi.dev/api/films/6/"],"species":["https://swapi.dev/api/species/2/"],"vehicles":[],"starships":[],"created":"2014-12-10T15:11:50.376000Z","edited":"2014-12-20T21:17:50.311000Z","url":"https://swapi.dev/api/people/3/"}]
    })
    it('Deve buscar o r2d2 com o formato correto' , async  () => {
        const expected = [{nome:'R2-D2', peso:'96'}]
        const nomeBase = 'R2-D2'

        const result = await ObeterPersonagens(nomeBase)

        assert.deepEqual(result,expected)
    })
})