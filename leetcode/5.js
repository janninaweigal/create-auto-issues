var isSelfCrossing = function (distance) {
  const record = ["0,0"]
  let start = 0
  let end = 0
  let set = new Set();
  set.add("0,0")
  let len = 0;
  while (len < distance.length) {
    const top = distance[len++]
    // 上
    for (let i = 0; i < top; i++) {
      end += 1
      const str = start + "," + end
      if (set.has(str)) {
        return true;
      }
      record.push(str)
      set.add(str)
    }

    const left = distance[len++]
    // 左
    for (let i = 0; i < left; i++) {
      start -= 1;
      const str = start + "," + end
      if (set.has(str)) {
        return true;
      }
      record.push(str)
      set.add(str)
    }

    const bottom = distance[len++]
    // 下
    for (let i = 0; i < bottom; i++) {
      end -= 1
      const str = start + "," + end
      if (set.has(str)) {
        return true;
      }
      record.push(str)
      set.add(str)
    }

    const right = distance[len++]
    // 右
    for (let i = 0; i < right; i++) {
      start += 1
      const str = start + "," + end
      if (set.has(str)) {
        return true;
      }
      record.push(str)
      set.add(str)
    }
  }
  console.log(record)
  return false;
};

// console.log(isSelfCrossing([2, 1, 1, 2]))

// console.log(isSelfCrossing([1, 2, 3, 4]))

// console.log(isSelfCrossing([1, 1, 1, 1]))
  
console.log(isSelfCrossing([1, 1, 2, 1, 1]))
