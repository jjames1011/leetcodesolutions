// Given two arrays, write a function to compute their intersection.
//
// Example 1:
//
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
//
// Example 2:
//
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
//
// Note:
//
//     Each element in the result should appear as many times as it shows in both arrays.
//     The result can be in any order.


function intersect(nums1, nums2){
  let newArray = []
  let searched = []
  for(i=0;i<nums1.length;i++){
    if(searched.indexOf(nums1[i]) == -1){
      for(j=0; j<nums2.length; j++){
        if(nums1[i] == nums2[j]){
        newArray.push(nums2[j])
        }
      }
    searched.push(nums1[i]);
  } else {
    console.log('else ' + searched.indexOf(nums1[i]))
  }
  }
  console.log('searched array: ' + searched);
  return newArray;
}

console.log(intersect([1,2,2,1],[2,2]));
console.log(intersect([4,9,5],[9,4,9,8,4]));
