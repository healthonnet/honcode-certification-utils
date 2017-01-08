'use strict';

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
