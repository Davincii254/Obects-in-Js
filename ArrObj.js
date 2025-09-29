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