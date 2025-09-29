// Constructor function for creating menu items
function MenuItem(name, price, category, isHot) {
    this.name = name;
    this.price = price;
    this.category = category;
    this.isHot = isHot;
    
    this.display = function() {
        console.log(`${this.name} (${this.category}) - Ksh ${this.price}`);
    };
}

// Create new objects (instances) using the 'new' keyword
const latte = new MenuItem("Latte", 420, "Coffee", true);
const icedTea = new MenuItem("Iced Lemon Tea", 380, "Beverage", false);
const samosa = new MenuItem("Beef Samosa", 200, "Snack", true);

latte.display(); // Output: Latte (Coffee) - Ksh 420
icedTea.display(); // Output: Iced Lemon Tea (Beverage) - Ksh 380