base_array = [1, 2, 3, 4, 5];
let arr = [1, 2, 3, 4, 5];
arr['00'] = 41;
arr['01'] = 42;
Array.prototype.filter = function (func, thisArg = this) {
    let result = [];
    let array = this;
    let arrayLen = this.length;
    for (let i = 0; i < arrayLen; i++) {
        if (i in array) {
            if (!!(func.call(thisArg, array[i], i, array))) {
                result.push(array[i]);
            }
        }
    }
    return result;
}

//console.log(base_array.filter((x) => x < 5));
//console.log(base_array.filter((x) => x == 1));
//console.table(base_array.filter((_, i, orig) => orig[i - 1]));
//console.log(base_array.filter((_, i, orig) => orig.filter((__, ii) => (ii % i) < 2).length == 0));
//console.log(arr.filter(x => true));
let filtered_array = arr.filter(x => true);
console.log(Object.keys(filtered_array), [0, 1, 2, 3, 4].map(String));
console.log(+'00');
console.log(parseFloat('00'));