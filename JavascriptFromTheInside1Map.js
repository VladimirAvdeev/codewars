Array.prototype.map = function (func, thisArg = this) {
    let result = new Array(this.length);
    let array = this;
    for (let i = 0; i < array.length; i++) {
        if (i in array) result[i] = (func.call(thisArg, array[i], i, array));
    }
    return result;
}
//console.log([, ,].map(function (x) { return 1; }));
//console.log(new Array(2).map(function (x) { return 1; }));
console.log([NaN, 2, 3, 4, 5].map(function (x) { return x; }));
console.log(new Array(2).concat([null]).map(function (x) { return 1; }));
console.log(new Array(2).concat([null]).map(function (x) { return 1; }));
console.log(null != undefined);
console.log(NaN !== undefined);