module.exports = function reverse(n) {
    n = n < 0 ? -n : n;
    return +('' + n).split('').reverse().join('');
}
