module.exports = function reverse(str = 'hello world') {
    return str.split('').reverse().join('');
};