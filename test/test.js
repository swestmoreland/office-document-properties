var expect = require('chai').expect,
    fs     = require('fs'),
    path   = require('path');

var getDocumentProperties = require('../index');

describe('getDocumentProperties', function() {

    it('should be an object', function() {
        expect(getDocumentProperties).to.be.an.instanceof(Object);
    });

    it('properties should be functions', function() {
        expect(typeof getDocumentProperties.fromFilePath).to.eql('function');
        expect(typeof getDocumentProperties.fromBuffer).to.eql('function');
    });

    describe('can handle all the different API variations', function() {

        var test = function(done) {
            return function(error, data) {
                expect(error).to.be.null;
                expect(data).to.be.an('object');
                done();
            };
        };

        it('fromFilePath(filePath, callback)', function(done) {
            var filePath = path.join(__dirname, 'files', 'test.docx');
            getDocumentProperties.fromFilePath(filePath, test(done));
        });

        it('fromBuffer(buffer, callback)', function(done) {
            var filePath = path.join(__dirname, 'files', 'test.docx'),
                fileBuff = fs.readFileSync(filePath);
            getDocumentProperties.fromBuffer(fileBuff, test(done));
        });

    });

});
