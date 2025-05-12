const accountId = 144553
let accountEmail = "rakeshkush4@gmail.com"
var accountPassword = "12345"
accountCity = "Ahmedabad"

var accountState;

accountEmail = "rakesh4@gmail.com"
accountPassword = "123456789"
accountCity = "Bengluru"


// accountId = 2 // Not Allowed

/* Prefer not to use var
because of issue in block scope and functional scope */
 
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

