//Task 1: Funciton declaration 
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    return `Total Profit: $${profit}`;
}; // function to calculate total profits

console.log(calculateProfit(20, 30, 100)); // profit is $1000
console.log(calculateProfit(50, 70, 200)); // profit is $4000
