var expect = require('unexpected').clone();
var createCssStringLiteral = require('../lib/createCssStringLiteral');

describe('createCssStringLiteral', function () {
  it('should return it self', function () {
    expect(createCssStringLiteral('HELLO WORLD'), 'to be', '"HELLO WORLD"');
  });

  it('should CSS special chars', function () {
    expect(createCssStringLiteral(' '), 'to be', '" "');
    expect(createCssStringLiteral('!'), 'to be', '"\\000021"');
    expect(createCssStringLiteral('"'), 'to be', '"\\000022"');
    expect(createCssStringLiteral('#'), 'to be', '"\\000023"');
    expect(createCssStringLiteral('$'), 'to be', '"\\000024"');
    expect(createCssStringLiteral('%'), 'to be', '"\\000025"');
    expect(createCssStringLiteral('&'), 'to be', '"\\000026"');
    expect(createCssStringLiteral('\''), 'to be', '"\\000027"');
    expect(createCssStringLiteral('('), 'to be', '"\\000028"');
    expect(createCssStringLiteral(')'), 'to be', '"\\000029"');
    expect(createCssStringLiteral('*'), 'to be', '"\\00002a"');
    expect(createCssStringLiteral('+'), 'to be', '"\\00002b"');
    expect(createCssStringLiteral(','), 'to be', '"\\00002c"');
    expect(createCssStringLiteral('-'), 'to be', '"\\00002d"');
    expect(createCssStringLiteral('.'), 'to be', '"\\00002e"');
    expect(createCssStringLiteral('/'), 'to be', '"\\00002f"');
    expect(createCssStringLiteral(':'), 'to be', '":"');
    expect(createCssStringLiteral(';'), 'to be', '";"');
    expect(createCssStringLiteral('<'), 'to be', '"<"');
    expect(createCssStringLiteral('='), 'to be', '"="');
    expect(createCssStringLiteral('>'), 'to be', '">"');
    expect(createCssStringLiteral('?'), 'to be', '"?"');
    expect(createCssStringLiteral('@'), 'to be', '"@"');
    expect(createCssStringLiteral('['), 'to be', '"["');
    expect(createCssStringLiteral('\\'), 'to be', '"\\00005c"');
    expect(createCssStringLiteral(']'), 'to be', '"]"');
    expect(createCssStringLiteral('^'), 'to be', '"^"');
    expect(createCssStringLiteral('`'), 'to be', '"`"');
    expect(createCssStringLiteral('{'), 'to be', '"{"');
    expect(createCssStringLiteral('|'), 'to be', '"|"');
    expect(createCssStringLiteral('}'), 'to be', '"}"');
    expect(createCssStringLiteral('~'), 'to be', '"~"');
  });
});

