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
