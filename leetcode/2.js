var countValidWords = function (sentence) {
  const arr = sentence.split(' ')
  let res = 0
  for (const num of arr) {
    if (num == "!") {
      console.log(num)
      res++
    } else if (num == ".") {
      console.log(num)
      res++
    } else if (num == ",") {
      console.log(num)
      res++
    } else if (num.indexOf('-') != -1) {
      if (/^([a-z/]+)\-?([a-z/]+)[.,!]?$/.test(num)) {
        console.log(num)
        res++
      }
    } else if (/^([a-z/]+)\-?([a-z/]*)[.,!]?$/.test(num)) {
      console.log(num)
      res++
    }
  }
  return res;
};
// console.log(countValidWords("a-b."))
// console.log(countValidWords("afad"))
// console.log(countValidWords("ba-c"))
// console.log(countValidWords("!"))
// console.log(countValidWords(" , wn xhx5e2  9k !  fs uc5jc  u3  f5 lj x mkkouek, .g"))
// console.log(countValidWords("l!"))
console.log(countValidWords(". ! 7hk  al6 l! aon49esj35la k3 7u2tkh  7i9y5  !jyylhppd et v- h!ogsouv 5"))

// console.log(countValidWords("a!"))
// console.log(countValidWords("cat and  dog"))
// console.log(countValidWords("!this  1-s b8d!"))
// console.log(countValidWords("alice and  bob are playing stone-game10"))
// console.log(countValidWords("he bought 2 pencils, 3 erasers, and 1  pencil-sharpener."))