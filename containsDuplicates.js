// Given an array of integers, find if the array contains any duplicates.
//
// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
//
// Example 1:
//
// Input: [1,2,3,1]
// Output: true
//
// Example 2:
//
// Input: [1,2,3,4]
// Output: false
//
// Example 3:
//
// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true
//This was accepted however it is a bit neive and its runtime is O(n^2)
// var containsDuplicates = function(nums){
//   for(i=0; i<nums.length;i++){
//     for(j=i+1; j<nums.length;j++){
//       if(nums[i] == nums[j]){
//         console.log(nums[i] + ' ' + nums[j]);
//         return true;
//       }
//     }
//   }
//   return false;
// };
//this is the better solution:
var containsDuplicates = function(nums){
  nums.sort()
  for(i=0; i<nums.length; i++){
    if(nums[i] == nums[i+1]){return true}
  }
  return false;
}

console.log(containsDuplicates([1,2,3,1]) + ', Should return true.');
console.log(containsDuplicates([1,2,3,4]) + ', Should return false.');
console.log(containsDuplicates([1,1,1,3,3,4,3,2,4,2]) + ', Should return true.');
console.log(containsDuplicates([3,1]) + ', Should return false.');
