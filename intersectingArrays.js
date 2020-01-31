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

//First attempt: Passed most of the test cases but there were a few edge cases where the returned array had a duplicate value when it should only have one of said value.
// function intersect(nums1, nums2){
//   let newArray = []
//   if(nums1.length <= nums2.length){
//     for(i=0;i<nums1.length;i++){
//         for(j=0; j<nums2.length;j++){
//           if(nums1[i] == nums2[j]){
//           newArray.push(nums2[j]);
//           break;
//           }
//         }
//     }
// } else {
//   for(i=0;i<nums2.length;i++){
//       for(j=0; j<nums1.length;j++){
//         if(nums2[i] == nums1[j]){
//         newArray.push(nums1[j]);
//         break;
//         }
//       }
//     }
//   }
//   return newArray;
// }

//My first blunt force solution that worked and passes all test cases. 
function intersect(nums1, nums2){
  nums1Occurences = {};
  nums2Occurences = {};
  let newArray = [];

  for(i=0; i<nums1.length; i++){
    if(nums1Occurences[nums1[i]]){
      nums1Occurences[nums1[i]] += 1;
    } else {
      nums1Occurences[nums1[i]] = 1;
    }
  }
  for(i=0;i<nums2.length;i++){
    if(nums2Occurences[nums2[i]]){
      nums2Occurences[nums2[i]] += 1;
    } else {
      nums2Occurences[nums2[i]] = 1;
    }

  }

  for(let key in nums1Occurences){
    if (nums2Occurences[key]){
      let occuredInBoth;
      if (nums2Occurences[key]>nums1Occurences[key]){

        occuredInBoth = nums1Occurences[key];

      } else if(nums2Occurences[key]<nums1Occurences[key]){

        occuredInBoth = nums2Occurences[key];

      } else {
        occuredInBoth = nums1Occurences[key];

      }
      for(i=0; i<occuredInBoth;i++){
        newArray.push(parseInt(key));
      }

    }
  }

  return newArray;


}

console.log(intersect([3,1,2],[2,2]));
console.log(intersect([4,9,5], [9,4,9,8,4]));
console.log(intersect([1,2,2,1],[2,2]));
console.log(intersect([1,2],[1,1]));
console.log(intersect([1,1],[3,1,2])); // should return 1

console.log(intersect([43,85,49,2,83,2,39,99,15,70,39,27,71,3,88,5,19,5,68,34,7,41,84,2,13,85,12,54,7,9,13,19,92],
[10,8,53,63,58,83,26,10,58,3,61,56,55,38,81,29,69,55,86,23,91,44,9,98,41,48,41,16,42,72,6,4,2,81,42,84,4,13])) // should return [2,83,3,41,84,13,9] but is returning [2,2,83,3,41,84,13,9] occurences is 3-1=2 thats why
