// Given an array, rotate the array to the right by k steps, where k is non-negative.
//
// Example 1:
//
// Input: [1,2,3,4,5,6,7] and k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
//This was my first approuch. It works except for the fact that im returning a new array instead of the original. I think that this is why leetcode did not accept this answer even though I get the same output.

// rotate = function(nums, k) {
//     let newArray = [];
//
//     if(k>nums.length){
//       k = k % nums.length;
//     }
//
//     for(i=0; i<nums.length; i++){
//       if((i+k) > (nums.length-1)){
//         newArray.splice(i+k, 0, nums[i]);
//       }
//     }
//     for(i=0; i<nums.length; i++){
//       if((i+k)<nums.length){
//         newArray.splice(i+k,0,nums[i]);
//       }
//     }
//     return newArray;
// };

rotate = function(nums, k) {
    let newArray = [];

    if(k>nums.length){
      k = k % nums.length;
    }

    for(i=0; i<nums.length; i++){
      if((i+k) > (nums.length-1)){
        newArray.splice(i+k, 0, nums[i]);
      }
    }
    for(i=0; i<nums.length; i++){
      if((i+k)<nums.length){
        newArray.splice(i+k,0,nums[i]);
      }
    }
    for(i=0;i<nums.length; i++){
      nums[i] = newArray[i];
    }
    return nums;
};




console.log(rotate([1,2,3,4,5,6,7],3)); //output should be: [5,6,7,1,2,3,4]
console.log(rotate([-1,-100,3,99],2)); //output should be :[3,99,-1,-100]
