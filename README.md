# require-cache

> Caches the module tree into a JSON file, so when you restart your app it doesn't have to recompute this every time.

Often **2x faster startup time**.

## Installation

```
npm install require-cache
```

## Quick Start

Put this at the top of your startup script (if you run `node server.js`, then put it at the top of `server.js`):

``` javascript
require('require-cache')();
```

That's it!

Benchmark your node startup script with and without it and see if there's an improvement, e.g.:

``` javascript
require('require-cache')(); // and comment this out to get normal execution time

var time = new Date;

require('commander');
require('express');
require('mocha');
require('chai');

console.log(((new Date).getTime() - time.getTime()) + 'ms');
```

## License

MIT
