var maxDistance = function (colors) {
  let start = 0;
  let num = colors[0];
  let end = 0
  for (let i = 1; i < colors.length; i++) {
    if (colors[i] != num) {
      if (end == 0 || end + 1 != i || colors[end] != colors[i]) {
        end = i;
      }
    }
  }
  return end - start;
};

// console.log(maxDistance([1, 1, 1, 6, 6, 1, 1, 1]))
// console.log(maxDistance([1, 8, 3, 8, 3]))
// console.log(maxDistance([0, 0]))
// console.log(maxDistance([9, 9, 9, 18, 9, 9, 9, 9, 9, 18]))
console.log(maxDistance([4, 4, 4, 11, 4, 4, 11, 4, 4, 4, 4, 4]))