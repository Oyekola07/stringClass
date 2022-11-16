let statement = 'A long time ago in a country far away from Nigeria...'
console.log(statement.length)

//Extracting A with the 3 methods

console.log(statement.slice(0, 1))
console.log(statement.substring(0, 1))
console.log(statement.substr(0, 1))


// Extracting ago with the 3 methods
console.log(statement.slice(11, 15))
console.log(statement.substring(11, 15))
console.log(statement.substr(12, 3))



// Extracting country with the 3 methods

console.log(statement.slice(21, 28))
console.log(statement.substring(21, 28))
console.log(statement.substr(21, 7))




// Extracting away with the 3 methods
console.log(statement.slice(33, 37))
console.log(statement.substring(33, 37))
console.log(statement.substr(33, 4))


// Extracting Nigeria with the 3 methods
console.log(statement.slice(-10, 50))
console.log(statement.substring(43, 50))
console.log(statement.substr(43, 7))


// Extracting ... with the 3 methods
console.log(statement.slice(-3, 53))
console.log(statement.substring(50, 53))
console.log(statement.substr(50, 3))

