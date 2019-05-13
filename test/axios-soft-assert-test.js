const axios = require('axios');
var assert = require('assert');
var expect = require('chai').expect;
var softAssert = require('soft-assert');

describe('Soft-Assert Tests', function() {

    describe('#pokemon-get', function () {
        it('should be lightning-rod and url is https://pokeapi.co/api/v2/ability/31', function () {
            return axios.get('https://pokeapi.co/api/v2/pokemon/25')
                .then(response => {
                    softAssert.softAssert(response.data.abilities[0].ability.name, 'lightning-rod', 'name expected is lightning-rod', true);
                    softAssert.softAssert(response.data.abilities[0].ability.url, 'https://pokeapi.co/api/v2/ability/31/', 'url expected is https://pokeapi.co/api/v2/ability/31/', true);
                    softAssert.softAssertAll();
                });

        });
    });
});


