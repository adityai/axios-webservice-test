const axios = require('axios');
var assert = require('assert');
var expect = require('chai').expect;

describe('http-get', function () {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => {
            expect(response.data.url).to.equal("https://apod.nasa.gov/apod/image/1905/volcano_stefnisson_960.jpg")
            console.log(response.data.url);
            console.log(response.data.explanation);
        })
        .catch(error => {
            console.log(error);
        });
});

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
        it('should return 1 when index is 2', function () {
           assert.equal([1, 2, 3].indexOf(3), 2)
        });
    });
});

