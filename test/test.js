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

  it('should build a list of url', function() {
    utils.buildUrlToCheck('hon.ch/').should.deep.equal(['hon.ch/']);
    utils.buildUrlToCheck('HON.ch/').should.deep.equal(['hon.ch/']);
    utils.buildUrlToCheck('hon.ch/A/')
      .should.deep.equal(['hon.ch/a/','hon.ch/']);
    utils.buildUrlToCheck('hon.ch/A/foobar.html')
      .should.deep.equal(['hon.ch/a/','hon.ch/']);
  });
});
