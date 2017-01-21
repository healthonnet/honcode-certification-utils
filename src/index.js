'use strict';

var path     = require('path');
var urlParse = require('url');

exports.formatUrl = function(url) {
  if (url.indexOf('http://') === 0) {
    url = url.substr(7);
  } else if (url.indexOf('https://') === 0) {
    url = url.substr(8);
  }

  if (url.indexOf('www.') === 0) {
    url = url.substr(4);
  }

  return url;
};

exports.buildUrlToCheck = function(url) {
  var listUrls = [];
  var urlParts = url.toLowerCase().split('/');

  for (var i = 0; i < urlParts.length - 1; i++) {

    var potentialUrl = urlParts[i] + '/';
    if (i > 0) {
      potentialUrl = listUrls[i - 1] + potentialUrl;
    }
    listUrls.push(potentialUrl);
  }

  return listUrls.reverse();
};

exports.isValidUrl = function(str) {
  var urlObj = urlParse.parse(str);
  if (urlObj.hostname && urlObj.pathname) {
    return true;
  }
  return false;
};

exports.addTrailingSlash = function(url) {
  var parsed   = urlParse.parse(url);
  var urlParts = url.split('/');
  var basename = path.basename(parsed.pathname);
  var result   = '';

  for (var i = 0; i < urlParts.length; i++) {
    if (i === urlParts.length - 1) {
      if (urlParts[i] === basename && urlParts[i].indexOf('.') > -1) {
        result = url;
      } else {
        if (urlParts[i].indexOf('#') > -1 || urlParts[i].indexOf('?') > -1) {
          result = url;
        } else {
          result = url + '/';
        }
      }
    }
  }
  return result;
};
