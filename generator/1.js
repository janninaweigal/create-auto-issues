function* getSum() {
  const a = yield 123;
}
const aa = getSum();
console.log(aa.next())