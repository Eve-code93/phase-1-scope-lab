// Write your solution in this file!
// Declare customerName in global scope
var customerName = 'bob';

// Function to uppercase the customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob'; // Creates a global variable without var, let, or const
}

// Function to overwrite bestCustomer
function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
}

// Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = 'someone';

// Function that tries to change leastFavoriteCustomer (should throw an error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // This will cause an error since leastFavoriteCustomer is a const
}
