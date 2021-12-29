/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // 字符串转数组
  const strArr = Array.from(s);
  // 移除多余空格
  removeExtraSpace(strArr);
  // 翻转
  reverse(strArr, 0, strArr.length - 1)

  let start = 0;
  for (let i = 0; i <= strArr.length; i++) {
    // 翻转单词
    if (strArr[i] == ' ' || i == strArr.length) {
      // 翻转单词
      reverse(strArr, start, i - 1);
      start = i + 1;
    }
  }

  return strArr.join('')
};


// 删除多余空格
function removeExtraSpace(strArr) {
  let slowIndex = 0;
  let fastIndex = 0;

  while (fastIndex < strArr.length) {
    // 移除开始位置和重复的空格
    if (strArr[fastIndex] == ' ' && (fastIndex == 0 || strArr[fastIndex - 1] == ' ')) {
      fastIndex++;
    } else {
      strArr[slowIndex++] = strArr[fastIndex++]
    }
  }
  // 移除末尾空格
  strArr.length = strArr[slowIndex - 1] == ' ' ? slowIndex - 1 : slowIndex;
}

// 反转
function reverse(strArr, start, end) {
  let left = start;
  let right = end;

  while (left < right) {
    // 交换
    [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
    left++;
    right--;
  }
}

reverseWords("the  sky is blue")