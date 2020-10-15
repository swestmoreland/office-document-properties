var expect = require('chai').expect,
    fs     = require('fs'),
    path   = require('path');

var getDocumentProperties = require('../index');

describe('getDocumentProperties', function() {

    it('should be an object', function() {
        expect(getDocumentProperties).to.be.an.instanceof(Object);
    });

    var testFiles = ['test.docx', 'test.pptx', 'test.xlsx', 'google.docx', 'google.pptx', 'google.xlsx'];

    var test = function(done) {
        return function(error, data) {
            expect(error).to.be.null;
            expect(data).to.be.an('object');
            done();
        };
    };

    describe('#fromBuffer()', function() {

        it('should be a function', function() {
            expect(typeof getDocumentProperties.fromBuffer).to.eql('function');
        });

        testFiles.forEach(function(file) {
            it(`fromBuffer(${path.join(__dirname, 'files', file)}, callback)`, function(done) {
                var filePath = path.join(__dirname, 'files', file),
                    fileBuff = fs.readFileSync(filePath);
                getDocumentProperties.fromBuffer(fileBuff, test(done));
            });
        })

    });

    describe('#fromFilePath()', function() {

        it('should be a function', function() {
            expect(typeof getDocumentProperties.fromFilePath).to.eql('function');
        });

        testFiles.forEach(function(file) {
            it(`fromFilePath(${path.join(__dirname, 'files', file)}, callback)`, function(done) {
                var filePath = path.join(__dirname, 'files', file);
                getDocumentProperties.fromFilePath(filePath, test(done));
            });
        })

    });

});
