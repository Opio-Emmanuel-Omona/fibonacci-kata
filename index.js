function fib(num) {
  if (!Number.isInteger(num)) throw new TypeError();
  if (num <= 0) throw new RangeError();
  if (num == 1) return [0];
  if (num == 2) return [0, 1];

  var i = 2;
  var list = [0, 1]
  var sum = 1
  
  for (; i<num; i++) {
    list[i] = sum
    sum = sum + list[i-1]
  }

  return list;
};

module.exports = fib;
