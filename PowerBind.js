Function.prototype.bind = function (ctx) {  // bind СОЗДАЕТ НОВУЮ ФУНКЦИЮ А НЕ ВЫПОЛНЯЕТ ЕЕ
    let fun = this;
    let arg = this.arguments;
    return new Function(arg);
};



var func = function () {
    return this.prop;
};
var obj1 = { prop: 1 },
    obj2 = { prop: 2 };

func = func.bind(obj1);
//console.log(func); // Will produce 1

func = func.bind(obj2);
//console.log(func); // Will also produce 1 :(
console.log(obj1)