function getNthFib(n) {
  // Write your code here.
  let arr = [];
  if (n <= 1) arr.push(n);
  for (let arr = 1; arr < n; arr++) {
    for (let idx = 2; idx < arr.length; idx++) {
      let num = arr[idx - 1] + arr[idx - 2];
      arr.push(num);
    }
  }
  return arr.slice(-1);
}
