var lengthOfLongestSubstring = function (s) {
  let result = 0;
  const set = new Set();
  for (let i = 0, j = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[j++])
    }
    set.add(s[i])
    result = Math.max(result, set.size)
  }
  return result;
};

lengthOfLongestSubstring("abca")