// Say you have an array for which the ith element is the price of a given stock on day i.
//
// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).
//
// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

//this was my first solution which did not pass all of the tests. It passed some of them.
// var maxProfit = function(prices) {
//     let boughtstock = 0;
//     let profit = 0;
//     let j = 1;
//     for(i=0; i < prices.length; i++){
//         if(boughtstock !== 0){
//             profit += (prices[j-1] - boughtstock);
//             boughtstock = 0;
//         }else if(prices[i]<prices[j]){
//             boughtstock = prices[i];
//         };
//         j++
//     };
//     return profit;
// };

//this is the best answer: I kind of got tripped up where it says you may not engage in mutiple transactions at the same time so I was tracking if I was holding a stock and if I was I would sell, add profits and go to next loop. But apparently I shold only track the total possible profits so there is no need for that step.

var maxProfit = function(prices) {
    let profit = 0;
    let j = 1;
    for(i=0; i < prices.length; i++){
        if(prices[i]<prices[j]){
            profit += (prices[j] - prices[j-1]);
        };
        j++
    };
    return profit;
};

console.log(maxProfit([7,1,5,3,6,4]) + ' should be 7');
console.log(maxProfit([1,2,3,4,5]) + ' shoudld be 4');
console.log(maxProfit([7,6,4,3,1]) + ' should be 0');
