var expect = require('unexpected').clone();
var leftPad = require('../lib/leftpad');

describe('leftpad', function () {
  it('should return it self if no other arguments are supplied', function () {
    expect(leftPad('HELLO WORLD'), 'to be', 'HELLO WORLD');
  });

  it('should not pad if length of input string equals length argument', function () {
    expect(leftPad('H', 1), 'to be', 'H');
  });

  it('should left pad with spaces', function () {
    expect(leftPad('H', 2), 'to be', ' H');
    expect(leftPad('H', 5), 'to be', '    H');
    expect(leftPad('H', 8), 'to be', '       H');
  });

  it('should left pad with supplied padding char', function () {
    expect(leftPad('H', 2, '0'), 'to be', '0H');
  });
});
