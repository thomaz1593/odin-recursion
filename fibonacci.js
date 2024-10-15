function fibs(num) {
  if (num == 0) return [];
  if (num == 1) return [0];
  if (num == 2) return [1];
  const fib = [0, 1];

  for (i = 2; i < num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

console.log(fibs(8));

function fibsRec(number) {
  if (number == 0) return [];
  else if (number == 1) return [0];
  else if (number == 2) return [0, 1];

  let result = fibsRec(number - 1);
  result.push(result[result.length - 1] + result[result.length - 2]);
  return result;
}

console.log(fibsRec(8));
