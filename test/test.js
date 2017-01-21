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

  it('should validate a url', function() {
    utils.isValidUrl('http://www.hon.ch').should.equal(true);
    utils.isValidUrl('https://foobar').should.equal(true);
    utils.isValidUrl('http://').should.equal(false);
    utils.isValidUrl('foobar').should.equal(false);
  });

  it('should add a trailing slash if necessary', function() {
    utils.addTrailingSlash('https://www.hon.ch/index.html')
      .should.equal('https://www.hon.ch/index.html');
    utils.addTrailingSlash('https://www.hon.ch/index.html#anchor')
      .should.equal('https://www.hon.ch/index.html#anchor');
    utils.addTrailingSlash('https://www.hon.ch/search.html?q=asthma')
      .should.equal('https://www.hon.ch/search.html?q=asthma');
    utils.addTrailingSlash('https://www.hon.ch/a')
      .should.equal('https://www.hon.ch/a/');
    utils.addTrailingSlash('https://www.hon.ch')
      .should.equal('https://www.hon.ch/');
  });
});
