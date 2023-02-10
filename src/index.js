module.exports = function reverse (n) {
  return Math.abs(n >= 0 
    ? +`${n}`.split('').reverse().join('') 
    : -(`${-n}`.split('').reverse().join('')));

    
};


