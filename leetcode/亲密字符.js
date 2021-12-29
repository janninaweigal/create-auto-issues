function buddyStrings(s, goal) {
  let n = s.length, m = goal.length;
  if (n != m) return false;
  let cnt1 = new Array(26).fill(0), cnt2 = new Array(26).fill(0);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    let a = s.charAt(i).charCodeAt() - 'a'.charCodeAt(), b = goal.charAt(i).charCodeAt() - 'a'.charCodeAt();
    cnt1[a]++; cnt2[b]++;
    if (a != b) sum++;
  }
  let ok = false;
  for (let i = 0; i < 26; i++) {
    if (cnt1[i] != cnt2[i]) return false;
    if (cnt1[i] > 1) ok = true;
  }
  return sum == 2 || (sum == 0 && ok);
}

// buddyStrings("aaa", "aaa")
buddyStrings("ab", "ba")