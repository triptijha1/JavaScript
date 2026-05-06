const accountId = 19824
let accountEmail = "triptijha@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 092424 // not allowed

accountEmail = "tripti@google.com"
accountPassword = "12345678"
accountCity = "Kolkata"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
    prefer not to use var
        beacse of issue in block scope & funtional scope
*/