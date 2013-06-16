/**
 * Regex
 */

var rcount = /:count\((\d)+(\-(\d+))?\)/

/**
 * style based on number of elements
 *
 *    li:count(1-2) {
 *      color: red;
 *    }
 *
 * yields:
 *
 *    li:first-child:nth-last-child(1),
 *    li:first-child:nth-last-child(1) ~ li,
 *    li:first-child:nth-last-child(2),
 *    li:first-child:nth-last-child(2) ~ li {
 *      color: red;
 *    }
 *
 */

module.exports = function() {
  return function(style){
    style.rules = style.rules.map(function(rule){
      if (!rule.selectors) return rule;
      rule.selectors = rule.selectors.map(function(selector){
        var m = selector.match(rcount);
        if (!m) return selector;

        var sel = selector.replace(m[0], '');
        var from = +m[1];
        var to = +(m[3] || from);
        var out = [];

        for (var i = from; i <= to; i++) {
          out[out.length] = count(sel, i);
        };

        return out.join(',\n');
      });

      return rule;
    });
  }
};

/**
 * Create the count selectors
 *
 * @param {String} sel
 * @param {Number} n
 * @return {String}
 * @api private
 */

function count(sel, n) {
  var out = [];
  out[out.length] = sel + ':first-child:nth-last-child(' + n + ')';
  if (n > 1) out[out.length] = sel + ':first-child:nth-last-child(' + n + ') ~ ' + sel
  return out.join(',\n');
}
