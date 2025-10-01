const connect_coffee = {
    name: "Connect Coffee",
    location: "Chiromo",
    dailySpecials: [ // Array of objects
        { id: 1, name: "Mocha Monday", price: 400, day: "Monday" },
        { id: 2, name: "Tiramisu Tuesday", price: 550, day: "Tuesday" },
        { id: 3, name: "Espresso Wednesday", price: 250, day: "Wednesday" }
    ]
};

// Accessing a specific object in the array
console.log(`The special for Tuesday is ${connect_coffee.dailySpecials[1].name}.`);

// Using a loop to extract and display all specials
console.log(`--- ${connect_coffee.name} Daily Specials ---`);
connect_coffee.dailySpecials.forEach(special => {
    console.log(`${special.day}: ${special.name} for Ksh ${special.price}.`);
});

// Task: Get a list of only the names of the specials.
const specialNames = connect_coffee.dailySpecials.map(special => special.name);

console.log(specialNames);

// Task: Find all specials priced under 500 KES.
const budgetSpecials = connect_coffee.dailySpecials.filter(special => special.price < 500);

console.log(budgetSpecials);

// Task: Find the special that runs on Tuesday.
const tuesdaySpecial = connect_coffee.dailySpecials.find(special => special.day === "Tuesday");

console.log(tuesdaySpecial);

// Task: Calculate the total price if you bought one of every special.
// The starting value (accumulator) is set to 0.
const totalCost = connect_coffee.dailySpecials.reduce((accumulator, special) => {
    // Add the current special's price to the running total
    return accumulator + special.price;
}, 0);

console.log(`Total cost of all specials: KES ${totalCost}`);