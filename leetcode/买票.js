function time(tickets, k) {
  const max = tickets[k];
  let ans = 0;
  let count = 0;
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i] >= max) {
      ans += max;
      if (i > k) {
        count++;
      }
    } else {
      ans += tickets[i]
    }
  }
  return ans - count
}
console.log(time([1, 2, 2], 1))