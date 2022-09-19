Function.prototype.bind = function (ctx) {
    const fn = this;
    return function () {
        return fn.call((this == global) ? ctx : this);
    }
};



var func = function () {
    return this.prop;
};
var obj1 = { prop: 1 },
    obj2 = { prop: 2 };

func = func.bind(obj1);
let result = func();
console.log(result); // Will produce 1

func = func.bind(obj2);
let result2 = func();
console.log(result2); // Will also produce 1 :(
console.log(obj1)