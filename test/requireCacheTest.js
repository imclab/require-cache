var requireCache = require('..')
  , assert = require('chai').assert
  , fs = require('fs')
  , path = require('path');

suite('requireCache', function() {
  test('you can create require cache and clear a file', function() {
    if (fs.existsSync('./tmp/require.cache.json')) fs.unlinkSync('./tmp/require.cache.json');

    assert.isFalse(fs.existsSync('./tmp/require.cache.json'), 'file shouldnt exist');

    assert.isTrue(!requireCache.cache, 'requireCache shouldnt exist');

    requireCache();

    assert.isTrue(!!requireCache.cache, 'requireCache now should exist');

    var requiredFilePath = path.join(process.cwd(), 'tmp/testFile.js');

    assert.isFalse(requireCache.cache.moduleLookup.hasOwnProperty(requiredFilePath), 'file that we havent required shouldnt exist')

    require('../tmp/testFile')

    assert.isTrue(requireCache.cache.moduleLookup.hasOwnProperty(requiredFilePath), 'file that we have later required should now exist');

    requireCache.save()

    assert.isTrue(fs.existsSync('./tmp/require.cache.json'), 'file should now exist');
  });
});
