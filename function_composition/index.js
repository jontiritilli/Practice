let addOne = num => num + 1;

let multByTen = num => num * 10;

let ranNum1to10 = compose(Math.floor, addOne, multByTen);

console.log(ranNum1to10(Math.random()));

function compose() {
    let functions = arguments;
    return function (e) {
        for (let i = functions.length - 1; i >= 0; i--) {
            e = functions[i].call(this, e);
        }
        return e
    }
};