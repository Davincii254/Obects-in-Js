// Creating a CoffeeShop object using literal notation
const a_brewed_awakening = {
    // --- PROPERTIES (Data) ---
    name: "A Brewed Awakening",
    location: "Nairobi CBD",
    isOpen: true,
    capacity: 50,
    
    // --- METHOD (Functionality) ---
    toggleOpenStatus: function() {
        if (this.isOpen) {
            console.log(this.name + " is now closing.");
            this.isOpen = false;
        } else {
            console.log(this.name + " is now opening!");
            this.isOpen = true;
        }
    }
};

// Now we have a single variable, 'a_brewed_awakening', that holds all this related information.
console.log(a_brewed_awakening);






// --- ACCESSING PROPERTIES ---
console.log("Shop Name:", a_brewed_awakening.name); // Dot notation
console.log("Location:", a_brewed_awakening["location"]); // Bracket notation

// --- MODIFYING PROPERTIES ---
console.log("Capacity before renovation:", a_brewed_awakening.capacity);
// Let's expand the shop
a_brewed_awakening.capacity = 60;
console.log("Capacity after renovation:", a_brewed_awakening.capacity);

// Using a variable with bracket notation
const propertyToAccess = "isOpen";
console.log("Is the shop open?", a_brewed_awakening[propertyToAccess]);

// --- CALLING A METHOD ---
console.log("Current status:", a_brewed_awakening.isOpen); // true
a_brewed_awakening.toggleOpenStatus(); // Calls the method
console.log("Status after toggle:", a_brewed_awakening.isOpen); // false



// this
const java_house = {
    name: "Java House",
    location: "Westlands",
    customers: 0,

    // Method to let a customer in
    addCustomer: function() {
        this.customers++; // 'this.customers' refers to java_house.customers
        console.log(`Welcome! We now have ${this.customers} customers.`);
    },

    // Method to serve a customer
    serveCustomer: function() {
        if (this.customers > 0) {
            this.customers--;
            console.log(`Enjoy your coffee! Customers remaining: ${this.customers}.`);
        } else {
            console.log("No customers to serve.");
        }
    }
};

java_house.addCustomer(); // Output: Welcome! We now have 1 customers.
java_house.addCustomer(); // Output: Welcome! We now have 2 customers.
java_house.serveCustomer(); // Output: Enjoy your coffee! Customers remaining: 1.