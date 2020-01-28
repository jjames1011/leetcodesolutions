// Given a non-empty array of integers, every element appears twice except for one. Find that single one.
//
// Note:
//
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
//
// Example 1:
//
// Input: [2,2,1]
// Output: 1
//
// Example 2:
//
// Input: [4,1,2,1,2]
// Output: 4

//I started this method because I was assuming that the array contained integers 1-n but that isnt necesarily true. for example it could be [1,1,6,6,8,] i assumed [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8] so i scrapped this idea
// function singleNumber(nums){
//   let sum = 0;
//   for(i=0;i<nums.length;i++){
//     sum += i;
//   };
//   console.log('sum: ' + sum);
//
//   sum = sum*2;
//   console.log('sum*2: ' + sum);
//   var projectedTotal = nums.reduce(function(a,b){
//     return a + b;
//   }, 0);
//   console.log('projectedTotal: ' + projectedTotal );
//   console.log('sum-projectedTotal: ' + (sum-projectedTotal))
//   return sum-projectedTotal;
// };

function singleNumber(nums){
  nums.sort();
  for(i=0;i<nums.length;i+=2){
    if(nums[i] != nums[i+1]){return nums[i]}
  }
}
console.log(singleNumber([2,2,1]) + ' Should return 1');
console.log(singleNumber([4,1,2,1,2]) + ' Should return 4');
