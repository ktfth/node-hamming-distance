'use strict';
function bitDiffCount(a, b) {
  const bitStr = (a ^ b >>> 0).toString(2);
  return bitStr.split('1').length - 1;
}

function hammingDistance(a, b) {
  let out = 0;
  a = Buffer.from(a, 'binary');
  b = Buffer.from(b, 'binary');
  for (let i = 0; i < a.length; i += 1) {
    out += bitDiffCount(a[i], b[i]);
  }
  return out;
}
module.exports = exports = hammingDistance;
