const artcaffe = {
    name: "Artcaffe",
    location: "The Hub Karen",
    menu: { // Nested object
        coffee: { // Another nested object
            name: "Cappuccino",
            price: 450,
            isHot: true
        },
        pastry: {
            name: "Chocolate Croissant",
            price: 350,
            allergens: "Gluten, Dairy"
        }
    }
};

// Accessing deeply nested properties
console.log(`Today's special is ${artcaffe.menu.coffee.name}.`);
console.log(`It costs Ksh ${artcaffe.menu.pastry.price}.`);

// Manipulating nested properties
artcaffe.menu.coffee.price = 480; // Price increase
console.log(`New cappuccino price: ${artcaffe.menu.coffee.price}`);