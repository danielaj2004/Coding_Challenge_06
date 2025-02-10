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

// Task 4: Parameters and Arguments
function calculateSubscriptionCost(plan, months, discount = 0) {
    let monthlyCost;
    if (plan === "Basic") {
        monthlyCost = 10
    }
    else if (plan === "Premium") {
        monthlyCost = 20
    }
    else if (plan === "Enterprise") {
        monthlyCost === 50
    }
    let totalCost = (monthlyCost * months) - discount;
    return `Total Cost: $${totalCost}`;
} // function to calculate total subscription cost

console.log(calculateSubscriptionCost("Basic", 6, 10)); // Total Cost is $50
console.log(calculateSubscriptionCost("Premium", 12, 0)); // Total Cost is $240

// Task 5: Returning Values
function convertCurrency(amount, exchangeRate) {
    let convertAmount = amount * exchangeRate
    return `Converted Amount: $${convertAmount.toFixed(2)}`;
}; // function to convert currency

console.log(convertCurrency(100, 1.1));
console.log(convertCurrency(250, 0.85));

// Task 6: Higher-Order Functions
let orders = [200, 600, 1200, 450, 800]; // array of orders
function applyBulkDiscount(orders, discountFunction) {
    return orders.map(discountFunction);
}; // function to apply bulk discount
let discountFunction = amount => amount > 500 ? amount * 0.9 : amount;
let discountedOrders = applyBulkDiscount(orders, discountFunction);

console.log(discountedOrders) // [ 200, 540, 1080, 450, 720]

// Task 7: Closures
function createExpenseTracker() {
    let totalExpenses = 0;
    return function(expense) {
        totalExpenses += expense;
        return `Total Expenses: $${totalExpenses}`;
    };
}; // function to track expenses

let tracker = createExpenseTracker();
console.log(tracker(200)); // Total Expenses is $200
console.log(tracker(150)); // Total Expenses is $350
