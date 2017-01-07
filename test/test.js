'use strict';

var should = require('chai').should();
var utils  = require('../src/index.js');

describe('HONcode Certification Utils', function() {

  it('should format url', function() {
    utils.formatUrl('https://www.hon.ch').should.equal('hon.ch');
    utils.formatUrl('http://www.hon.ch').should.equal('hon.ch');
    utils.formatUrl('https://hon.ch').should.equal('hon.ch');
    utils.formatUrl('http://hon.ch').should.equal('hon.ch');
    utils.formatUrl('').should.equal('');
  });
});
