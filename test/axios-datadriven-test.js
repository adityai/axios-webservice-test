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
        data_driven(test_data, function () {
            it('should return -1 when the json-data-driven value is not present', function (passedValue) {
                softAssert.softAssert(-1, [1, 2, 3].indexOf(passedValue.value))
            });
        });
    });

    describe('#pokemon-datadriven-test', function (done) {
        var jsonString = file.readFileSync('pokemon-data.json');
        var test_data = JSON.parse(jsonString);
        data_driven(test_data, function () {
            test_data.forEach(function(element) {
                console.log(element);
                it('should be ' + element.expected, function () {
                    return axios.get(element.uri)
                        .then(response => {
                            softAssert.softAssert(element.expected, response.data.abilities[0].ability.name)
                        });
                });
            });
            // it('should be ' + test_data[0].expected, function () {
            //     return axios.get(test_data[0].uri)
            //         .then(response => {
            //             softAssert.softAssert(test_data[0].expected, response.data.abilities[0].ability.name)
            //         });
            // });
        });
    });
});

