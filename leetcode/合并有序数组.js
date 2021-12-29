var merge = function(nums1, m, nums2, n) {
    let p = nums1.length;
    m = m-1;
    n = n-1

    while(p>0){
        let temp = ''
        if(n == -1){
           temp = nums1[m--]
        }else if(nums1[m] >= nums2[n]){
           temp =  nums1[m--]
        } else {
           temp =  nums2[n--]
        }
         nums1[--p] = temp
    }
    console.log(nums1)
};
merge(
  [6, 7, 0, 0, 0, 0],
2,
  [2, 5, 6, 6],
4
)