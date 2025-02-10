//Task 1: Funciton declaration 
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    return `Total Profit: $${profit}`;
}; // function to calculate total profits

console.log(calculateProfit(20, 30, 100)); // profit is $1000
console.log(calculateProfit(50, 70, 200)); // profit is $4000

// Task 2: Function Expression
const calculateSalesTax = function(amount, taxRate) {
    let salesTax = Math.floor(amount * taxRate)
    return `Sales Tax: $${salesTax}`;
}; // function to find sales tax

console.log(calculateSalesTax(100, 0.07)); // Sales is $7
console.log(calculateSalesTax(500, 0.1)); // Sales is $50

// Task 3: Arrow Function
const calculateBonus = (salary, performanceRating) => {
    let bonus;
    if (performanceRating === "Average") {
        bonus = salary * 0.05;
    }
    else if (performanceRating === "Good") {
        bonus = salary * 0.1;
    }
    else if (performanceRating === "Excellent") {
        bonus = salary * 0.2;
    }
    return `Bonus: $${bonus}`;
}; // function to calculate bonuses

console.log(calculateBonus(5000, "Excellent")); // Bonus is $1000
console.log(calculateBonus(7000, "Good")); // Bonus is $700
