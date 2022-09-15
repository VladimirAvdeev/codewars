base_array = [1, 2, 3, 4, 5];
Array.prototype.filter = function (func, thisArg = this) {
    let result = new Array(this.length);
    let array = this;
    for (let i = 0; i < array.length; i++) {
        if (i in array) {
            if ((func.call(thisArg, array[i], i, array))) {
                result[i] = array[i];
            } else {
                //result.push(array[i]);
            }
        }
    }
    result.length = 1
    return result;
}

//console.log(base_array.filter((x) => x < 5));
console.log(base_array.filter((x) => x == 1));
//console.log(base_array.filter((x) => x % 2 != 0));