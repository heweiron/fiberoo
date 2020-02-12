
function fib() {
  const fibList = [];
  let num = 0;
  let num2 = 1;
  for (let i = 0; i < 25; i++) {
    fibList.push(num, num2);
    num += num2;
    num2 = num + num2;
  }
  return fibList;
}
console.log(fib());

function numsToStrings() {
  const newList = [];
  _.map(fib(), function (entry) {
    const ele = `${entry}`;
    newList.push(ele);
  });
  return newList;
}
console.log(numsToStrings());

function numEvenNums(list) {
  return _.filter(list, function (num) { return num % 2 === 0; }).length;
}
console.log(numEvenNums(fib()));
