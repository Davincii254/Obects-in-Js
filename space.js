// --- Business Logic for Spaceport Manager (The Collection) ---
/**
 * @class SpaceportManager
 * Manages the collection of Starship objects docked at the spaceport.
 */
function SpaceportManager() {
  // Stores Starship objects, indexed by their unique bayId.
  this.ships = {};
  // The counter for assigning unique bay IDs.
  this.currentBayId = 0;
}

/**
 * Assigns a unique bay ID (docking bay number) to a new ship.
 * @returns {number} The new unique ID.
 */
SpaceportManager.prototype.assignBayId = function() {
  this.currentBayId += 1;
  return this.currentBayId;
};

/**
 * Adds a new Starship object to the spaceport manifest.
 * It assigns a unique bay ID before storing it.
 * @param {Starship} ship - The Starship object to add.
 */
SpaceportManager.prototype.addShip = function(ship) {
  // 1. Assign the ship a unique ID (the docking bay number)
  ship.bayId = this.assignBayId();
  // 2. Store the ship in the manifest object
  this.ships[ship.bayId] = ship;
  console.log(`[SYSTEM] ${ship.designation} docked successfully in Bay ${ship.bayId}.`);
};

/**
 * Retrieves a Starship object based on its bay ID.
 * @param {number} id - The unique bay ID of the ship.
 * @returns {Starship|false} The ship object if found, otherwise false.
 */
SpaceportManager.prototype.findShip = function(id) {
  if (this.ships[id] !== undefined) {
    return this.ships[id];
  }
  return false;
};

/**
 * Deletes a Starship object from the manifest based on its bay ID.
 * @param {number} id - The unique bay ID of the ship to delete.
 * @returns {boolean} True if the ship was successfully deleted, otherwise false.
 */
SpaceportManager.prototype.deleteShip = function(id) {
  if (this.ships[id] === undefined) {
    console.warn(`[ALERT] Bay ${id} is already empty or does not exist.`);
    return false;
  }
  // Delete the property from the ships object
  delete this.ships[id];
  console.log(`[SYSTEM] Ship from Bay ${id} has successfully departed.`);
  return true;
};

// --- Business Logic for Starship (The Data Object) ---
/**
 * @class Starship
 * Represents an individual starship with its core properties.
 * @param {string} designation - Unique registry number (e.g., NCC-1701).
 * @param {string} model - The ship's class/model (e.g., Freighter, Cruiser).
 * @param {number} fuelLevel - Current fuel percentage (0 to 100).
 */
function Starship(designation, model, fuelLevel) {
  this.designation = designation;
  this.model = model;
  this.fuelLevel = fuelLevel;
  this.bayId = null; // Will be assigned by SpaceportManager
}

/**
 * Returns the full, formal name of the starship.
 * @returns {string} The full registry name.
 */
Starship.prototype.getRegistryName = function() {
  return `The ${this.model} Class Vessel, ${this.designation}`;
};

// --- Execution Example ---

// 1. Initialize the Spaceport
const terminusSpaceport = new SpaceportManager();

console.log("--- Initializing Spaceport Terminus ---");

// 2. Create some Starship objects
const shipA = new Starship("Kestrel-8", "Light Freighter", 85);
const shipB = new Starship("Voyager-099", "Deep Space Cruiser", 100);
const shipC = new Starship("X-9", "Fighter Escort", 40);

// 3. Dock the ships (using the addShip method, which assigns the ID)
terminusSpaceport.addShip(shipA);
terminusSpaceport.addShip(shipB);
terminusSpaceport.addShip(shipC);

console.log("\n--- Manifest Review ---");

// 4. Find and inspect a specific ship (using the findShip method)
const cruiser = terminusSpaceport.findShip(2);
if (cruiser) {
  console.log(`Found Ship in Bay ${cruiser.bayId}: ${cruiser.getRegistryName()}`);
  console.log(`Fuel Status: ${cruiser.fuelLevel}% Full`);
  // You can even modify data directly on the found object
  cruiser.fuelLevel = 90;
  console.log(`[UPDATE] Voyager-099 fuel topped off to ${cruiser.fuelLevel}%!`);
}

// 5. Delete a ship from the manifest (using the deleteShip method)
console.log("\n--- Ship Departure ---");
terminusSpaceport.deleteShip(1); // ShipA departs

// 6. Attempt to find the departed ship
const departedShip = terminusSpaceport.findShip(1);
if (!departedShip) {
    console.log("[STATUS] Cannot locate ship in Bay 1. Manifest is up to date.");
}

// 7. Show the final manifest (The 'ships' collection)
console.log("\n--- FINAL MANIFEST (Remaining Ships) ---");
console.log(terminusSpaceport.ships);
