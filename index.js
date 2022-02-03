//JavaScript functions are first-class objects; 
//assign to variable, passed as values to other functions, 
//returned as the value from another function, etc.

//takes a callback function as an argument
//calls the callback function
//returns callback function
function receivesAFunction(whatever) {
    whatever();    
}

//takes no arguments, returns a named function
function returnsANamedFunction() {
    return function receivesAFunction() {}
}

//takes no arguments, returns an anonymous function
function returnsAnAnonymousFunction() {
    return function() {
        return `hi`;
    }
}