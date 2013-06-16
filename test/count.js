/**
 * Module Dependencies
 */

var assert = require('better-assert');
var rework = require('rework');
var read = require('fs').readFileSync;
var count = require('../');
var css = read(__dirname + '/count.css', 'utf8');
var out = read(__dirname + '/count.out.css', 'utf8').trim();

/**
 * Parse
 */

var res = rework(css).use(count()).toString();

/**
 * Test equality
 */

assert(out == res);
