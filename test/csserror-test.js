var expect = require('unexpected').clone();
var csserror = require('../index');

expect.addAssertion('string', 'to have content property', function (expect, subj, value) {
  var lines = subj.split('\n').map(function (line) { return line.trim(); });
  var contentLine = lines.filter(function (line) { return line.indexOf('content:') === 0; })[0];

  var content = contentLine.match(/^content: "(.*?)";$/)[1];

  return expect(content, 'to be', value);
});


describe('csserror', function () {
  it('should insert an error message into the error stylesheet', function () {
    return expect(csserror('HELLO WORLD'), 'to have content property', 'HELLO WORLD');
  });

  it('should escape the error message', function () {
    return expect(csserror('"'), 'to have content property', '\\000022');
  })
});
