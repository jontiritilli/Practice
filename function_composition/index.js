//Iterative approach

function compose(funcs) {
    return (input) => {
        const opsList = funcs.slice();
        while (opsList.length > 0) {
            input = opsList[opsList.length - 1](input);
            opsList.pop()
        }
        return input
    }
};

//Recursive approach

function compose(funcs) {
    return (input) => {
        if (funcs.length === 1) { //base case
            return funcs[0](input);
        }
        return compose(
            funcs.slice(0, funcs.length - 1)
        )(
            funcs[funcs.length - 1](input)) //recursive case
    }
};

//Array Method approach

function compose(funcs) {
    return input => funcs.slice().reverse()
        .reduce((currInput, currFunc) => currFunc(currInput), input)
}

//TESTS

var addOne = num => num + 1;
var multByTen = num => num * 10;

var ranNum1to10 = compose([Math.floor, addOne, multByTen]);
var randomNumber = ranNum1to10(Math.random());
var randomNumber2 = ranNum1to10(Math.random());

console.assert(randomNumber >= 1, `${randomNumber} must be >= to 1`)
console.assert(randomNumber >= 1, `${randomNumber} must be <= to 10`)
console.assert(randomNumber % 1 === 0, `${randomNumber} must be a whole integer`)