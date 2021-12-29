var countVowelSubstrings = function (word) {
  const arr = ['a', 'e', 'i', 'o', 'u'];
  let list = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0 }
  let res = 0
  for (let i = 0, len = word.length; i < len-4; i++){
    list = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0 }
    let sum = 0;
    let j = i;
    while (arr.indexOf(word[j]) != -1 && j < len) {
      
      if (arr.indexOf(word[j]) != -1) {
        ++sum;
        list[word[j]] += 1
        if (sum >4) {
          let flag = true;
          const nList = Object.values(list)
          for (const num of nList) {
            if (num == 0) {
              flag = false;
              break;
            }
          }
          if (flag) {
            ++res;
          }
        }
        ++j;
      } else {
        
        break;
      }
    }
  }
  return res;
};

console.log(countVowelSubstrings("aeiouu"))
console.log(countVowelSubstrings("unicornarihan"))
console.log(countVowelSubstrings("cuaieuouac"))
console.log(countVowelSubstrings("bbaeixoubb"))