const arr = [1, 2, 2, 2, 3, 4, 4];

// 第一种方法，使用set
console.log([...new Set(arr)])

// 2. 使用Array.from
console.log(Array.from(new Set(arr)))

// 3. 使用indexof
let list = [];
for (let i = 0; i < arr.length; i++) {
  if (list.indexOf(arr[i]) == -1) {
    list.push(arr[i])
  }
}
console.log(list)
