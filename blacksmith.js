// Variables
let initialore = 10;
let initialwood = 10;
let initialgold =20;
let firestatus = false;
let inventoryitems = {
  swords : 0 , //there is no successfully made item available in the inventory
  axes : 0 // same in the case of axaes not made axes available made in the starting
};


// Functions

/**
 * fire
 * To start a fire:
 *    The fire must be out
 *    There must be at least 1 piece of wood
 * To stop a fire:
 *    The fire must be going
 */
function fire () {
  if (firestatus) {
    firestatus = false;
  console.log("the fire has been extinguised.")
  } else if (initialwood > 0){
    firestatus = true;
    initialwood--;
    console.log("the fire is going")
  } else{
    console.log("no enough wood to start the fire")
  }
}

/**
 * buy
 */
function buy (item){
  if (firestatus) {
    console.log("fire is burning can not buy the items");
    return;
  }

   if( item === 'ore' && initialgold >= 3) {
   initialore++;
   initialgold -= 3;
   console.log("1 piece of ore is bought successfully")
   } else if ( item === 'wood' && initialgold>= 1){
   initialwood++;
   initialgold -= 1;
   console.log("1 piece of wood is bought successfully")
   } else {
    console.log("Not having enough gold to buy the items")
   }
}

/**
 * make
 */
function make(item) {
  if(!firestatus) {
    console.log("the fire is not burning can not make items")
  }

  if (item === 'sword' && initialore >= 2 && initialwood >= 1) {
    initialore -= 2;
    initialwood -= 1;
    inventoryitems.swords++;
    console.log("1 sword is made successfully")
  }
  else if (item === 'axe' && initialore >= 1 && initialwood >= 2) {
    initialore -= 1;
    initialwood -= 2;
    inventoryitems.axes++;
    console.log("1 Axe is made successfully")
  } else {
    console.log("You do not have enough resources to make the selected items")
  }
}

/**
 * sell
 */
function sell(item) {
  if (firestatus) {
    console.log("Cannot sell items because the fire is burning.");
    return;
  }

  if (item === 'sword' && inventoryitems.swords > 0) {
    inventory.swords--;
    initialgold += 5;
    console.log(" 1 sword is sold successfully.");
  } else if (item === 'axe' && inventoryitems.axes > 0) {
    inventoryitems.axes--;
    initialgold += 4;
    console.log(" 1 axe is sold successfully.");
  } else {
    console.log("There is no item available in inventory to sell.");
  }
}


/**
 * inventory
 * 
 * Shows the players current inventory
 *
 **/
function inventory() {
  console.log("Current Inventory:");
  console.log("Gold: " + initialgold);
  console.log("Ore: " + initialore);
  console.log("Wood: " + initialwood);
  console.log("Swords: " + inventoryitems.swords);
  console.log("Axes: " + inventoryitems.axes);
}

//function help 
console.log("Game Commands:");
  console.log("buy(item) - Buy an item (ore or wood).");
  console.log("make(item) - Make a weapon (sword or axe).");
  console.log("sell(item) - Sell a weapon (sword or axe).");
  console.log("fire() - Start or stop the fire.");
  console.log("inventoryitems() - Show current inventory items available.");
  console.log("help() - Display game instructions.");

/**
 * Help Command
 * function help() {}
 * Returns the instruction on how to play the game.
 */
function help () {
  return `INSTRUCTIONS:
  Blacksmith is a simple text base game. 
  
  As a blacksmith you convert ore and wood into swords and axes. You buy your resources using gold and sell your weapons for gold.
  
  COMMANDS:
  - buy(item)
  - make(item)
  - sell(item)
  - fire()
  - inventory()
  - help()`
}

// Log the help() function
console.log(help())
