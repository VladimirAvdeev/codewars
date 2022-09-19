Function.prototype.bind = function (ctx) {  // bind СОЗДАЕТ НОВУЮ ФУНКЦИЮ А НЕ ВЫПОЛНЯЕТ ЕЕ
    let prot = this.prototype.constructor.toString(); // ƒ () {\r\n    return this.prop;\r\n}
    let fun = this;
    function f() {
        return ctx.prop; 
    }
    //let arg = this.arguments;
    return f;
};



var func = function () {
    return this.prop;
};
var obj1 = { prop: 1 },
    obj2 = { prop: 2 };

func = func.bind(obj1);
console.log(func()); // Will produce 1

func = func.bind(obj2);
console.log(func()); // Will also produce 1 :(
console.log(obj1)