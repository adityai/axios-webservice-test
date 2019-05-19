const axios = require('axios');
var softAssert = require('soft-assert');
var file = require('file-system');
var data_driven = require('data-driven');
var csv = require('csvtojson');


describe('Data-driven Tests', function() {

    describe('#simple-datadriven-test', function () {
        data_driven([{value: 0}, {value: 5}, {value: -2}], function () {
            it('should return -1 when the data-driven value is not present', function (passedValue) {
                softAssert.softAssert(-1, [1, 2, 3].indexOf(passedValue.value))
            })
        });
    });

    describe('#json-datadriven-test', function (done) {
        var jsonString = file.readFileSync('test-data.json');
        var test_data = JSON.parse(jsonString);
        // console.log(test_data);
        data_driven(test_data, function () {
            it('should return -1 when the json-data-driven value is not present', function (passedValue) {
                softAssert.softAssert(-1, [1, 2, 3].indexOf(passedValue.value))
            });
        });
    });
    
});

