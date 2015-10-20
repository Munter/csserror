var expect = require('unexpected').clone();
var createCssStringLiteral = require('../lib/createCssStringLiteral');

describe('createCssStringLiteral', function () {
  it('should return it self', function () {
    expect(createCssStringLiteral('HELLO WORLD'), 'to be', '"HELLO WORLD"');
  });

  it('should escape CSS special chars', function () {
    var strings = ' !"#$%&\'()*+,-./:;<=>?@[\\]^`{|}~'.split('').map(function (s) {
      return createCssStringLiteral(s);
    });

    expect(strings, 'to satisfy', [
      '" "',
      '"\\21 "',
      '"\\22 "',
      '"\\23 "',
      '"\\24 "',
      '"\\25 "',
      '"\\26 "',
      '"\\27 "',
      '"\\28 "',
      '"\\29 "',
      '"\\2a "',
      '"\\2b "',
      '"\\2c "',
      '"\\2d "',
      '"\\2e "',
      '"\\2f "',
      '":"',
      '";"',
      '"<"',
      '"="',
      '">"',
      '"?"',
      '"@"',
      '"["',
      '"\\5c "',
      '"]"',
      '"^"',
      '"`"',
      '"{"',
      '"|"',
      '"}"',
      '"~"'
    ]);
  });

  it('should double escape CSS special chars', function () {
    var strings = ' !"#$%&\'()*+,-./:;<=>?@[\\]^`{|}~'.split('').map(function (s) {
      return createCssStringLiteral(s, true);
    });

    expect(strings, 'to satisfy', [
      '" "',
      '"\\\\21 "',
      '"\\\\22 "',
      '"\\\\23 "',
      '"\\\\24 "',
      '"\\\\25 "',
      '"\\\\26 "',
      '"\\\\27 "',
      '"\\\\28 "',
      '"\\\\29 "',
      '"\\\\2a "',
      '"\\\\2b "',
      '"\\\\2c "',
      '"\\\\2d "',
      '"\\\\2e "',
      '"\\\\2f "',
      '":"',
      '";"',
      '"<"',
      '"="',
      '">"',
      '"?"',
      '"@"',
      '"["',
      '"\\\\5c "',
      '"]"',
      '"^"',
      '"`"',
      '"{"',
      '"|"',
      '"}"',
      '"~"'
    ]);
  });
});

