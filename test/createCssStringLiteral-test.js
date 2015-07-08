var expect = require('unexpected').clone();
var createCssStringLiteral = require('../lib/createCssStringLiteral');

describe('createCssStringLiteral', function () {
  it('should return it self if no other arguments are supplied', function () {
    expect(createCssStringLiteral('HELLO WORLD'), 'to be', '"HELLO WORLD"');
  });

  it('should escape single quotes', function () {
    expect(createCssStringLiteral('\''), 'to be', '"\\000027"');
  });

  it('should escape double quotes', function () {
    expect(createCssStringLiteral('"'), 'to be', '"\\000022"');
  });

  it.skip('should CSS special chars', function () {
    expect(createCssStringLiteral('!'), 'to be', '"\\000022"');
    expect(createCssStringLiteral('#'), 'to be', '"\\000022"');
    expect(createCssStringLiteral('$'), 'to be', '"\\000022"');
    expect(createCssStringLiteral('%'), 'to be', '"\\000022"');
    expect(createCssStringLiteral('&'), 'to be', '"\\000022"');
    expect(createCssStringLiteral('('), 'to be', '"\\000022"');
    expect(createCssStringLiteral(')'), 'to be', '"\\000022"');
    expect(createCssStringLiteral('*'), 'to be', '"\\000022"');
    expect(createCssStringLiteral('+'), 'to be', '"\\000022"');
    expect(createCssStringLiteral(','), 'to be', '"\\000022"');
    expect(createCssStringLiteral('-'), 'to be', '"\\000022"');
    expect(createCssStringLiteral('.'), 'to be', '"\\000022"');
    expect(createCssStringLiteral('/'), 'to be', '"\\000022"');
    expect(createCssStringLiteral(':'), 'to be', '"\\000022"');
    expect(createCssStringLiteral(';'), 'to be', '"\\000022"');
    expect(createCssStringLiteral('<'), 'to be', '"\\000022"');
    expect(createCssStringLiteral('='), 'to be', '"\\000022"');
    expect(createCssStringLiteral('>'), 'to be', '"\\000022"');
    expect(createCssStringLiteral('?'), 'to be', '"\\000022"');
    expect(createCssStringLiteral('@'), 'to be', '"\\000022"');
    expect(createCssStringLiteral('['), 'to be', '"\\000022"');
    expect(createCssStringLiteral('\\'), 'to be', '"\\000022"');
    expect(createCssStringLiteral(']'), 'to be', '"\\000022"');
    expect(createCssStringLiteral('^'), 'to be', '"\\000022"');
    expect(createCssStringLiteral('`'), 'to be', '"\\000022"');
    expect(createCssStringLiteral('{'), 'to be', '"\\000022"');
    expect(createCssStringLiteral('|'), 'to be', '"\\000022"');
    expect(createCssStringLiteral('}'), 'to be', '"\\000022"');
    expect(createCssStringLiteral('~'), 'to be', '"\\000022"');
  });
});

