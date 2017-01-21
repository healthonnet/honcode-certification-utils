HONcode Certification Utils
===========================

[![Build Status][travis-image]][travis-url]
[![Coverage Status][coverage-image]][coverage-url]
[![Dependency Status][gemnasium-image]][gemnasium-url]
[![NPM version][npm-image]][npm-url]

HONcode Certification Utils as NPM module

Usage
-----

```bash
$ npm install honcode-certification-utils --save
```

Then you can `require('honcode-certification-utils')`.

```js
var HONcodeUtils = require('honcode-certification-utils');

HONcodeUtils.formatUrl('https://www.hon.ch/');
//=> 'hon.ch/'
HONcodeUtils.buildUrlToCheck('hon.ch/20-years/en/tools.html');
//=> [ 'hon.ch/20-years/en/', 'hon.ch/20-years/', 'hon.ch/' ]
HONcodeUtils.isValidUrl('https://');
//=> false
HONcodeUtils.isValidUrl('http://www.hon.ch');
//=> true
HONcodeUtils.addTrailingSlash('http://www.hon.ch');
//=> 'http://www.hon.ch/'
HONcodeUtils.addTrailingSlash('https://www.hon.ch/20-years');
//=> 'https://www.hon.ch/20-years/'
```

API
---

### .addTrailingSlash(url)

Type: `function`

Add a trailing slash to a url if necessary.

### .buildUrlToCheck(url)

Type: `function`

Return a list of urls to check in the HONcode MD5 list.

### .formatUrl(url)

Type: `function`

Remove protocol (`http://` or `https://`) and subdomain `www` from a url string.

### .isValidUrl(str)

Type: `function`

Return true if the url is valid.

See Also
--------

  * [HONcode Certification List](https://github.com/healthonnet/honcode-certification-list)

Contributing to HONcode Certification Utils
-------------------------------------------

Contributions are always welcome, no matter how large or small.

See [Contributing](CONTRIBUTING.md).

Developer
---------

  * William BELLE

License
-------

Apache License 2.0


[npm-image]: https://img.shields.io/npm/v/honcode-certification-utils.svg
[npm-url]: https://www.npmjs.com/package/honcode-certification-utils
[travis-image]: https://travis-ci.org/healthonnet/honcode-certification-utils.svg?branch=master
[travis-url]: https://travis-ci.org/healthonnet/honcode-certification-utils
[coverage-image]: https://coveralls.io/repos/github/healthonnet/honcode-certification-utils/badge.svg
[coverage-url]: https://coveralls.io/github/healthonnet/honcode-certification-utils
[gemnasium-image]: https://gemnasium.com/badges/github.com/healthonnet/honcode-certification-utils.svg
[gemnasium-url]: https://gemnasium.com/github.com/healthonnet/honcode-certification-utils
