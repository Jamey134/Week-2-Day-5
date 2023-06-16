function updateInventory(newInv, currInv) {
    //for loop iterate through newInv dictionary
    for (let i = 0; i < newInv.length; i++) {
        // declare newItem = current index of newInv dict
        let newItem = newInv[i];
        // declare found = no need to create ne dict entry (start at false, loop through, if value is found then flip the value)
        let found = false;

        // nested for loop to now iterate through currInv dict
        for (let j = 0; j < currInv.length; j++) {
            // declare currItem = current index of currInv dict
            let currItem = currInv[j];

            // if statement - if key names from dictionaries match then...
            if (newItem.name == currItem.name) {
                // add newItem quantity to currItem quantity to get new total 
                currItem.quantity += newItem.quantity;
                // found then continue to next iteration at beginning
                found = true;
            }
        }
        // if false, then we need to add a new key value pair to the dictionary
        if (found == false) {
            // push new pair into the dictionary
            currInv.push({ name: newItem.name, quantity: newItem.quantity });
        }
    }
    //return result
    return currInv;
}

console.log(updateInventory(newInv1, currInv1))
console.log(updateInventory(newInv2, currInv2))
console.log(updateInventory(newInv3, currInv3))



