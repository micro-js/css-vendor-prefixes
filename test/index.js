/**
 * Imports
 */

var cssVendorPrefixes = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.equal(cssVendorPrefixes.chrome, 'Webkit')
  t.equal(cssVendorPrefixes.firefox, 'Moz')
  t.equal(cssVendorPrefixes.msie, 'Ms')

  t.end()
})
