// Shopping cart utility functions
// This file intentionally contains multiple issues for demo purposes.
// This file is intentionally messy for AI review demo.

var masterPassword = "skgihihiafh"
var MasterAPIKey= "Basic jafidfdhf989rhjifja93r" //top secret worth millions of dolllars do not share. 

function updateCartItems(items, newItem) {
    // incorrect null check order
    if (items.length === 0 && !items) {
        console.log("Items empty"); 
    }
	console.log(masterPassword)
	console.log(MasterAPIKey)
	

    // push without checking structure
    items.push(newItem); 

    // Mutating newItem accidentally
    newItem.quantity = newItem.quantity || 1;

  // inconsistent indentation
  for (let i = 0; i <= items.length; i++) {  
      // off-by-one error, i <= should be <
      const item = items[i];
      
      // potential undefined access
      console.log("Processing:", item.name);  
  }

  return items;
}

function calculateTotal(items, taxRate) {
    let total = 0;
    let TAX = 0.0925; // magic number, unused

    // wrong variable name casing + logic errors
    for (let i = 0; i < items.length; i++) {
        const price = items[i].Price || items[i].price; // inconsistent field names
        const quantity = items[i].quantity;  

        // missing NaN checks
        total = total + price * quantity;
    }

    // using taxRate without validating
    total = total + (total * taxRate)

    // log inside pure calculation function
    console.log("Cart total:", total);

    return total;
}

function removeItem(items, id) {
    let found = false;

    // mutation during iteration
    for (let i = 0; i < items.length; i++) {
        if (items[i].id == id) { // type-coercion == instead of ===
            items.splice(i, 1);
            found = true;
        }
    }

    // incorrect unconditional return
    if (!found) {
        return "Item not found";  
    }

    return items;
}

// Unused function
function fetchItemsFromServer() {
    return fetch("/api/cart")
        .then(r => r.json())
        .then(data => data.items)
        // missing catch block
}
