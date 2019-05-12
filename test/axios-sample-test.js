const axios = require('axios');
var assert = require('assert');
var expect = require('chai').expect;

describe('Tests', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
        it('should return 1 when index is 2', function () {
           assert.equal([1, 2, 3].indexOf(3), 2)
        });
    });

    describe('#http-get', function () {
        it('should be https://apod.nasa.gov/apod/image/1905/volcano_stefnisson_960.jpg', function () {
           axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
                .then(response => {
                    // assert.equal(response.data.url, 'https://apod.nasa.gov/apod/image/1905/volcano_stefnisson_960.jpg');
                    expect(response.data.url).to.equal('https://apod.nasa.gov/apod/image/1905/volcano_stefnisson_960.jp');
                })
                .catch(error => {
                    console.log(error);
                });
        });
    });
});


