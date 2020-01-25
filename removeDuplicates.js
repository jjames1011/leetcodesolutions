
var removeDuplicates = function(nums) {
    //[1,1,2] remove duplicates
    let i = 0;
    for(j=1; j<nums.length;j++){
      if(nums[j] !== nums[i]){
        i++;
        nums[i] = nums[j];
      }
    }
    return i+1;
};
// let nums = [1,1,2];
// var removeDuplicates = function(nums) {
//     //[1,1,2] remove duplicates
//     let tempArray = [];
//     for(i=0; i<nums.length;i++){
//       if(nums[i] !== nums[i+1]){
//         tempArray.push(nums[i]);
//       }
//     }
//     nums = tempArray;
//     return nums.length
// };

console.log(removeDuplicates([1,1,2]));
console.log('----------------------------')
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4,4,4,4,4,4,4,4,5,5,5,5]));
